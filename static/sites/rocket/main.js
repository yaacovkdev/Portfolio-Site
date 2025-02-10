/*
main.js
Yaacov Kochatkov
Global variables that change the way math operates for displaying of the objects.
Functions that exand the programs scalability, graphics library functions for rendering
the objects and background and listeners that run functions upon being triggered.
*/

"use strict";

//global variables for the program
var gl;
var program;

/* All colors are very light and pleasant to the eye but also
are designed to allow the user to see the shapes along the background
*/
var background_color_opt = [
    [0.9,0.9,0.9,1], //starting
    [1,0.8,0.8,1], //red
    [0.8,1,0.8,1], //green
    [0.8,0.8,1,1], //blue
    [0.9,0.9,0.9,1], //dynamic
];

/*
Variables that support all functions that work with the background
*/
var dynamic_color_x = 0;
var min_light = 0.8;
var dynamic_color_speed;
var background_color;

/*
Location of the variables in the shader language, in main.html
*/
var m_vPosition;
var m_vColor;

//Audio array that plays sounds
var audio = [];

/*
Ratio to work with each pixel as a unit relative to the canvas size which is 
X,Y -> {R} X->[-1,1], Y->[-1,1]
*/
var pixel_to_canvas;

/*
options for the color of the shape
*/
var main_color_opt = [
    [0,0,0,1], //black
    [1,0,0,1], //red
    [0,1,0,1], //green
    [0,0,1,1], //blue
    [1,1,0,1], //yellow
];

//Variables that work the the rocket
var mainshape;
var mainscale = 0.03;

//the additioanl range out of bounds of the canvas that turns the rocket to (0,0)
var emergency_out_bound = 0.1;

//fraction of 2*PI that turns the rocket on each refresh of the canvas
const directionFrac = 256;

//Array that switches when A or D is pressed and when either is true, turns the rocket
var ControlArray = [false, false];

//Array of Orb Shape objects
var ObjectArray = [];

//variable that points to the iterating game loop (setInterval function)
var refresh;

//boolean variable that is modified when the true and false buttons are pressed
var is_refreshing = false;

//speed of the game
var speed = 0;

//refresh rate interval (ms)
const change_ms = 15;

//Function that is called when the html page loads
window.onload = function init(){
    
    //initalize speed
    document.getElementById("speed").value = 0;
    document.getElementById("background_color").value = "0";
    document.getElementById("shape_color").value = "0";
    
    audio.push(new Audio("./sounds/rocketcollision.wav"));
    audio.push(new Audio("./sounds/object1.wav"));

    audio[0].volume = 0.7;
    audio[1].volume = 0.7;

    background_color = [...background_color_opt[0]];

    var canvas = document.getElementById("gl-canvas");
    gl = canvas.getContext('webgl2');
    if(!gl) console.log("Error: WebGL 2.0 isn't avalible");

    gl.viewport(0,0,canvas.clientWidth, canvas.height);

    pixel_to_canvas = 1/canvas.clientWidth;
    dynamic_color_speed = change_ms/30000;

    gl.clearColor(...background_color);

    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram(program);
    m_vPosition = gl.getAttribLocation(program, "aPosition");
    m_vColor = gl.getAttribLocation(program, "aColor");

    mainshape = new Shape("spaceship", gl.createBuffer(), gl.createBuffer());
    mainshape.setShape(spaceship,mainscale);


    var starting_direction = 0;

    mainshape.setColor(...main_color_opt[1]);
    mainshape.rotate(starting_direction);
    mainshape.setVelocity([1,0]);
    mainshape.setTrajectory(starting_direction);
    mainshape.setPosition(randomPosition(0.5,0.5));


    gl.bindBuffer(gl.ARRAY_BUFFER, mainshape.shapebuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mainshape.display_points), gl.STATIC_DRAW);

    gl.vertexAttribPointer(m_vPosition,2,gl.FLOAT, false, 0, 0);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, mainshape.colorbuffer)
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mainshape.colors), gl.STATIC_DRAW);    
    gl.vertexAttribPointer(m_vColor, 4, gl.FLOAT, false, 0, 0);
    
    gl.enableVertexAttribArray(m_vPosition);
    gl.enableVertexAttribArray(m_vColor);
    
    //first frame before the refresh even starts
    core_progress.call();
}

//Variable pointing to the function that is called into the iterating game loop function
var core_progress = function(){
    if(document.getElementById("background_color").value == "4"){
        backgroundDynamicRGB(dynamic_color_x);
        gl.clearColor(...background_color);
        
        if(dynamic_color_x>=0) {
            dynamic_color_x += dynamic_color_speed * speed;
        }
    }
    gl.clear(gl.COLOR_BUFFER_BIT);
    controls(mainshape);
    drawMainShape();
    drawAllOrbs();
}

//Function sets the gl to render the rocket points and renders them
function drawMainShape(){
    collision_main(mainshape);
    mainshape.progress();

    gl.bindBuffer(gl.ARRAY_BUFFER, mainshape.shapebuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mainshape.display_points), gl.STATIC_DRAW);
    gl.vertexAttribPointer(m_vPosition,2,gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, mainshape.colorbuffer)

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mainshape.colors), gl.STATIC_DRAW);    
    gl.vertexAttribPointer(m_vColor, 4, gl.FLOAT, false, 0, 0);
    
    gl.drawArrays(gl.LINES, 0, mainshape.point_length);
}

//function sets gl to render all orbs
function drawAllOrbs(){
    for(var i = 0; i < ObjectArray.length; i++){
        
        collision_orbs(ObjectArray[i]);
        ObjectArray[i].progress();

        gl.bindBuffer(gl.ARRAY_BUFFER, ObjectArray[i].shapebuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ObjectArray[i].display_points), gl.STATIC_DRAW);
        gl.vertexAttribPointer(m_vPosition,2,gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, ObjectArray[i].colorbuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ObjectArray[i].colors), gl.STATIC_DRAW);
        gl.vertexAttribPointer(m_vColor, 4, gl.FLOAT, false, 0, 0);

        gl.drawArrays(gl.TRIANGLE_FAN, 0, ObjectArray[i].point_length);
    }
}

/*
Function that checks if the rocket's centre point is out of bounds or if it crossed the
emergency range from the border to either reflect it or direct it to the centre point.
Note: Rocket may get stuck in one spot on the border but only happend if the rocket is being turned
near the border on high velocity
*/
function collision_main(inputshape){
    var new_theta;
    var e_v;
    var do_rotate = false;
    if(inputshape.position[0] >= 1 + emergency_out_bound || inputshape.position[0] <= -1 - emergency_out_bound ||
        inputshape.position[1] >= 1 + emergency_out_bound || inputshape.position[1] <= -1 - emergency_out_bound){
        e_v = direction2d(mainshape.position,[0,0]);
        new_theta = vectorToTheta(e_v[0],e_v[1]);
        do_rotate = true;
    } else {
        if(inputshape.position[0] >= 1 || inputshape.position[0] <= -1){
            new_theta = Math.PI - mainshape.theta;
            do_rotate = true;
        }
        else if(inputshape.position[1] >= 1 || inputshape.position[1] <= -1) {
            new_theta = 2*Math.PI - mainshape.theta;
            do_rotate = true;
        }
    
        //prevents the shape glitching out if it touches corners
        if((inputshape.position[0] >= 1 && inputshape.position[1] >= 1) ||
            (inputshape.position[0] <= -1 && inputshape.position[1] <= -1) ||
            (inputshape.position[0] >= 1 && inputshape.position[1] <= -1) ||
            (inputshape.position[0] <= -1 && inputshape.position[1] >= 1)){
                new_theta = inputshape.theta + Math.PI;
    
                do_rotate = true;
        }
    }
    

    if(do_rotate){

        audio[0].play();
        
        inputshape.rotate(new_theta);
        inputshape.setTrajectory(new_theta);
        
    }
}

/*
Function that applied collision physics to Orbs but checks for their radius to reflect them if they "barely touch"
the wall.
*/
function collision_orbs(inputhazard){
    var new_theta;
    var do_rotate = false;
    if((1-inputhazard.position[0]) <= inputhazard.radius || (-1)*(-1-inputhazard.position[0]) <= inputhazard.radius){
        new_theta = Math.PI - inputhazard.theta;
        do_rotate = true;
    } 
    else if((1-inputhazard.position[1]) <= inputhazard.radius || (-1)*(-1-inputhazard.position[1]) <= inputhazard.radius){
        new_theta = 2*Math.PI - inputhazard.theta;
        do_rotate = true;
    }

    if(do_rotate){
        
        inputhazard.rotate(new_theta);
        inputhazard.setTrajectory(new_theta);
    }
}

/*
changes speed variable and stops the interval if the speed is zero to not make the hardware
work on rendering exact same image
*/
function setSpeed(current){
    if(speed == current) return;

    if(current > 0 && speed == 0){
        refresh = setInterval(core_progress, change_ms);
    } else if(current == 0 && speed > 0){
        clearInterval(refresh);
    }

    speed = current;
}

/*
setting the speed as one of the multiple in the addition to the theta makes the shape
turn with the direction of it's movement. Input array ControlArray is checked to change
trajectory of the rocket as well as rotate it.
*/
function controls(shape){
    var new_theta;
    
    if(ControlArray[0]){
        new_theta = adjustTheta(shape.theta+(speed/6)*(2*Math.PI/directionFrac));
    }

    if(ControlArray[1]){
        new_theta = adjustTheta(shape.theta-(speed/6)*(2*Math.PI/directionFrac));
    }

    if(new_theta) {
        shape.rotate(new_theta);
        shape.setTrajectory(new_theta);
    }
}

//function will move uniform along the oscillating functions and select colors based on combos
function backgroundDynamicRGB(x){
    
    //special mode for changin grey color to red
    if(x == -1){
	var check = true;
        if(background_color[0] < 1){
            background_color[0] += dynamic_color_speed * speed;
		check = false;
        } 
	if(background_color[2] > min_light){
            background_color[2] -= dynamic_color_speed * speed;
		check = false;
        }
	if(background_color[1] > min_light){
            background_color[1] -= dynamic_color_speed * speed;
		check = false;
        }
	else if(check) {
            background_color = [...background_color_opt[1]];
            dynamic_color_x = dynamic_color_speed * speed;    
        }
        return;
    }

    x = adjustTheta(x);

    /*Concept about writing specific sin functions to generate the effect of smooth background color
    change was proposed by Jacobus Burger, to whom I'm grateful for giving me this idea. There was no
    cheating involved.
    */
    var compression = (Math.asin(0.8) - (Math.PI/2))/ (2*Math.PI/3);
    var F = (x,s) => {
        return Math.sin(x*compression + ((s+1) * (Math.PI / 2) - (s * Math.asin(0.8))));
    }

    background_color[0] = F(x,0);
    background_color[1] = F(x,1);
    background_color[2] = F(x,2);
    var temp = F(x,3);
    if(background_color[0] < temp) background_color[0] = temp;

    for(var i = 0; i < 3; i++){
        if(background_color[i] < min_light) background_color[i] = min_light;
    }
}

//functions that's called when the speed slider is changed
document.getElementById("speed").onclick = function(event){
    var curr_value = event.target.value;
    
    if(!is_refreshing) return;

    setSpeed(curr_value);

}

//function thats called when the key is being pressed
document.addEventListener('keydown', function(e){
    switch(e.keyCode){
        case 65:
            ControlArray[0] = true;
            break;
        case 68:
            ControlArray[1] = true;
            break;
        default:
            break;
    }
});

//function thats called when the key is being released
document.addEventListener('keyup', function(e){
    switch(e.keyCode){
        case 65:
            ControlArray[0] = false;
            break;
        case 68:
            ControlArray[1] = false;
            break;
        default:
            break;
    }
});

/*
function that adds the orb object into the array and renders it in a random location
on the canvas
*/
document.getElementById("button1").onclick = function(){
    if(!is_refreshing) return;
    
    audio[1].play();
    var new_orb = new BasicCircle("enemy_test", gl.createBuffer(), gl.createBuffer());
    
    new_orb.setShape(createCircle(30),0.01);
    new_orb.setColor([0,0,1,1]);
    
    var rand_pos = randomPosition(0.05,0.05);
    
    new_orb.setPosition(rand_pos);

    new_orb.setVelocity([1,0]);
    new_orb.setTrajectory(randomDirection());
    ObjectArray.push(new_orb);
    
    if(speed == 0){
        core_progress.call();
    }
}

//function clear orbs
document.getElementById("button2").onclick = function(){
    ObjectArray = [];
    if(speed == 0){
        core_progress.call();
    }
}

//function that changes direction of the rocket
document.getElementById("button3").onclick = function(){
    mainshape.rotate(randomDirection());
    mainshape.setTrajectory(mainshape.theta);

    if(speed == 0){
        core_progress.call();
    }
}

//function that starts the program
document.getElementById("start").onclick = function(){
    is_refreshing = true;
    setSpeed(document.getElementById("speed").value);
}

//function that stops the program
document.getElementById("stop").onclick = function(){
    is_refreshing = false;
    setSpeed(0);
}

//function that changes the background
document.getElementById("background_color").onchange = function(e){
    if(e.target.value == '4'){
        var pos = -1;
        //check if dynamic from gray
        for(var i = 0; i < 3; i++){
            if(background_color[i] == 1){
                pos = i;
            }
        }
        if(pos == -1){
            dynamic_color_x = -1;
        } else {
            dynamic_color_x = pos * 2 * Math.PI/3;
        }
    } else {
        dynamic_color_x = 0;
    }


    background_color = [...background_color_opt[parseInt(e.target.value)]];
    gl.clearColor(...background_color);
    
    if(speed == 0){
        core_progress.call();
    }
    
}

//Function changes the shape color
document.getElementById("shape_color").onchange = function(e){
    if(e.target.value == "5"){
        mainshape.setRainbow();
    } else {
        mainshape.setColor(main_color_opt[parseInt(e.target.value)]);
    }
    if(speed == 0){
        core_progress.call();
    }
}