/*
Yaacov Kochatkov
624280
CMPT 370 A
7 Dec, 2021
*/
"use strict";

var canvas;
var gl;

var program;

var numPositions  = 36;

var positionsArray = [];
var normalsArray = [];
var colorsArray = [];

var placementStack = [];
//up, down, left, right

var origin;

var framebuffer;

var flag = false;

var color = new Uint8Array(4);

//left up right down
var arrowdirection = [false, false, false, false];

//arrowdirection keys
var arrowdirection = [false, false];

var vertices = [
        vec4(-0.5, -0.5,  0.5, 1.0),
        vec4(-0.5,  0.5,  0.5, 1.0),
        vec4(0.5,  0.5,  0.5, 1.0),
        vec4(0.5, -0.5,  0.5, 1.0),
        vec4(-0.5, -0.5, -0.5, 1.0),
        vec4(-0.5,  0.5, -0.5, 1.0),
        vec4(0.5,  0.5, -0.5, 1.0),
        vec4(0.5, -0.5, -0.5, 1.0),
    ];

var vertexColors = [
        vec4(0.0, 0.0, 0.0, 1.0),  // black
        vec4(1.0, 0.0, 0.0, 1.0),  // red
        vec4(0.0, 1.0, 0.0, 1.0),  // green
        vec4(0.0, 0.0, 1.0, 1.0),  // blue
        vec4(1.0, 0.0, 1.0, 1.0),  // magenta
        vec4(1.0, 1.0, 0.0, 1.0),  // yellow
        vec4(0.0, 1.0, 1.0, 1.0),  // cyan
        vec4(1.0, 1.0, 1.0, 1.0),   // white
        //123645
    ];

    

    var texCoordsArray = new Float32Array([
        0.25, 1.0,
        0.25, 0.5,
        0.5 ,0.5 ,
        0.25, 1.0,
        0.5 ,0.5 ,
        0.5 ,1.0 ,

        
        0.5, 1.0,
        0.5, 0.5,
        0.75 ,0.5 ,
        0.5, 1.0,
        0.75 ,0.5 ,
        0.75 ,1.0 ,

        0, 1.0,
        0, 0.5,
        0.25 ,0.5 ,
        0, 1.0,
        0.25 ,0.5 ,
        0.25 ,1.0 ,
       
        0.25, 0.5,
        0.25, 0,
        0.5 ,0 ,
        0.25, 0.5,
        0.5 ,0,
        0.5 ,0.5 ,

        
        0.5, 0.5,
        0.5, 0,
        0.75 ,0 ,
        0.5, 0.5,
        0.75 ,0 ,
        0.75 ,0.5 ,

        0, 0.5,
        0, 0,
        0.25 ,0 ,
        0, 0.5,
        0.25 ,0 ,
        0.25 ,0 ,
    ]);

var lightPosition = vec4(1.0, 1.0, 10.0, 0.0 );
var lightAmbient = vec4(0.2, 0.2, 0.2, 1.0 );
var lightDiffuse = vec4( 1.0, 1.0, 1.0, 1.0 );
var lightSpecular = vec4( 1.0, 1.0, 1.0, 1.0 );

var materialAmbient = vec4( 1.0, 0.0, 1.0, 1.0 );
var materialDiffuse = vec4( 1.0, 0.8, 0.0, 1.0);
var materialSpecular = vec4( 1.0, 0.8, 0.0, 1.0 );
var materialShininess = 40.0;

var ambientColor, diffuseColor, specularColor;
var modelViewMatrix, projectionMatrix;
var viewerPos;
var at;
var up;

var program;

var texture;
var textureLocation;
var xAxis = 0;
var yAxis = 1;
var zAxis = 2;
var axis = xAxis;

var theta = vec3(0.0, 0.0, 0.0);

var viewtheta = [0,0];
var camerapos;

var thetaLoc;

var isclicked;
var x, y;

//types of modes
const Fixed = "Fixed";
const Move = "Move";
const Look = "Look";
const Rotate = "Rotate";
const Present = "Present";
var Mode;

//Sounds
const audio_place = new Audio('Place.wav');
const audio_destroy = new Audio('Destroy.wav');

//Pushes the multicolour polygons as well as vectors to be used for shading
function quad(a, b, c, d) {

     var t1 = subtract(vertices[b], vertices[a]);
     var t2 = subtract(vertices[c], vertices[b]);
     var normal = cross(t1, t2);
     normal = normalize(normal);

     positionsArray.push(vertices[a]);
     normalsArray.push(normal);
     colorsArray.push(vertexColors[a]);
     positionsArray.push(vertices[b]);
     normalsArray.push(normal);
     colorsArray.push(vertexColors[a]);
     positionsArray.push(vertices[c]);
     normalsArray.push(normal);
     colorsArray.push(vertexColors[a]);
     positionsArray.push(vertices[a]);
     normalsArray.push(normal);
     colorsArray.push(vertexColors[a]);
     positionsArray.push(vertices[c]);
     normalsArray.push(normal);
     colorsArray.push(vertexColors[a]);
     positionsArray.push(vertices[d]);
     normalsArray.push(normal);
     colorsArray.push(vertexColors[a]);
}

function updateLook(){
    var r = 10;
    var pm = Math.sqrt(100 - Math.pow(r*viewtheta[1],2)); //height vector
    
    at = vec3(camerapos[xAxis] + pm * Math.sin(viewtheta[0]),r * Math.sin(viewtheta[1]),camerapos[zAxis] + pm * Math.cos(viewtheta[0]));
}

//create the polygons from the vertices of the cube
function colorCube()
{
    quad(1, 0, 3, 2);
    quad(2, 3, 7, 6);
    quad(3, 0, 4, 7);
    quad(6, 5, 1, 2);
    quad(4, 5, 6, 7);
    quad(5, 4, 0, 1);
}

//Initializes all uninitialized variables
window.onload = function init() {
    canvas = document.getElementById("gl-canvas");

    gl = canvas.getContext('webgl2');
    if (!gl) alert("WebGL isn't available");


    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.5, 0.5, 0.5, 1.0);

    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);

    var texture = gl.createTexture();
    gl.bindTexture( gl.TEXTURE_2D, texture );
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 512, 512, 0,
       gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.generateMipmap(gl.TEXTURE_2D);

// Allocate a frame buffer object

   framebuffer = gl.createFramebuffer();
   gl.bindFramebuffer( gl.FRAMEBUFFER, framebuffer);

// Attach color buffer

   gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

   gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    //
    //  Load shaders and initialize attribute buffers
    //
    program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    colorCube();

    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(colorsArray), gl.STATIC_DRAW);

    var colorLoc = gl.getAttribLocation( program, "aColor");
    gl.vertexAttribPointer(colorLoc, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(colorLoc);

    var nBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, nBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(normalsArray), gl.STATIC_DRAW);

    var normalLoc =gl.getAttribLocation( program, "aNormal");
    gl.vertexAttribPointer(normalLoc, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(normalLoc);

    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(positionsArray), gl.STATIC_DRAW);

    var positionLoc = gl.getAttribLocation(program, "aPosition");
    gl.vertexAttribPointer(positionLoc, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLoc);

    var tBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, tBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, texCoordsArray, gl.STATIC_DRAW);
    var texCoordLoc = gl.getAttribLocation(program, "aTexCoord");
    gl.vertexAttribPointer(texCoordLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(texCoordLoc);

    var image = document.getElementById("texImage");
    configureTexture(image);

    isclicked = false;

    viewtheta[xAxis] = Math.PI;
    viewtheta[yAxis] = 0;
    camerapos = [0.0,0.0,4.5]; //changed z to positive so the texture bugfix is clear   

    viewerPos = vec3(camerapos[0], camerapos[1], camerapos[2]);
    at = vec3(0,0,camerapos[zAxis] - 10);
    up = vec3(0,1,0);

    Mode = Move;

    origin = [0,0,0];
    placementStack.push(origin);
    
    //projectionMatrix = ortho(-10, 10, -10, 10, -10, 10);
    projectionMatrix = perspective(70, canvas.width/canvas.height, 0.1, 20);

   

    var ambientProduct = mult(lightAmbient, materialAmbient);
    var diffuseProduct = mult(lightDiffuse, materialDiffuse);
    var specularProduct = mult(lightSpecular, materialSpecular);
    
    document.getElementById("ButtonU").onclick = function(){
        
        //Centre block won't be deleted
        if(placementStack.length == 1 || Mode == Present) return;
        placementStack.pop();
        audio_destroy.play();
    }

    document.getElementById("ModeS").value = 1;
    document.getElementById("ModeS").onchange = function(event){
        switch(parseInt(event.target.value)){
            case 0:
                Mode = Fixed;
                break;
            case 1:
                Mode = Move;
                break;
            case 2:
                Mode = Look;
                break;
            case 3:
                Mode = Rotate;
                break;
            case 4:
                Mode = Present;
                break;
        }
    }

    canvas.addEventListener("mousedown", function(event){
        
        x = event.clientX;
        y = canvas.height -event.clientY;
        isclicked = true;
        
    });


    gl.uniform4fv(gl.getUniformLocation(program, "uAmbientProduct"),
       ambientProduct);

    gl.uniform4fv(gl.getUniformLocation(program, "uDiffuseProduct"),
       diffuseProduct );
    gl.uniform4fv(gl.getUniformLocation(program, "uSpecularProduct"),
       specularProduct );
    gl.uniform4fv(gl.getUniformLocation(program, "uLightPosition"),
       lightPosition );

    gl.uniform1f(gl.getUniformLocation(program,
       "uShininess"),materialShininess);

    gl.uniformMatrix4fv( gl.getUniformLocation(program, "uProjectionMatrix"),
       false, flatten(projectionMatrix) );

    
    
    document.addEventListener('keydown', function(event){
        switch(event.keyCode){
            case 37: //left
                arrowdirection[0] = true;
                break;
            case 38: //up
                arrowdirection[1] = true;
                break;
            case 39: //right
                arrowdirection[2] = true;
                break;
            case 40: //down
                arrowdirection[3] = true;
                break;

            default:
                break;
        }
        
    });
    
    render();
}

//Gets the face of the cube, of all 6 faces, by associating the color to which the user has clicked on
function getface(colors){
    var adjpos = null;
    if(colors[0] == 255 && colors[1] == 0 && colors[2] == 0) adjpos = [0,0,1];
    if(colors[0] == 0 && colors[1] == 255 && colors[2] == 0) adjpos = [1,0,0];
    if(colors[0] == 0 && colors[1] == 0 && colors[2] == 255) adjpos = [0,-1,0];
    if(colors[0] == 255 && colors[1] == 255 && colors[2] == 0) adjpos = [-1,0,0];
    if(colors[0] == 0 && colors[1] == 255 && colors[2] == 255) adjpos = [0,1,0];
    if(colors[0] == 255 && colors[1] == 0 && colors[2] == 255) adjpos = [0,0,-1];

    return adjpos;
}

//COnfigures the image to properly load on the fragment 
function configureTexture(image){
    texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, 
        new Uint8Array([0, 0, 255, 255]));
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    //generate the Mipmap
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.bindTexture(gl.TEXTURE_2D, texture);         
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
}

//Renders on the canvas each frame
var render = function(){
    if(Mode != Fixed || Mode != Present){
        if(Mode == Look){
            //turns camera, no tilting
            if(arrowdirection[0])
                viewtheta[xAxis] += 0.1;
            if(arrowdirection[1])
                viewtheta[yAxis] += 0.1;
            if(arrowdirection[2])
                viewtheta[xAxis] += -0.1;
            if(arrowdirection[3])
                viewtheta[yAxis] += -0.1;
        
            //turn caps
            viewtheta[0] %= 2 * Math.PI;
            
            //vertical looking directio locks at pointing up and down
            if(viewtheta[1] >= Math.PI/2) viewtheta[1] = Math.PI/2;
            else if(viewtheta[1] <= -Math.PI/2) viewtheta[1] = -Math.PI/2;

            updateLook();
        }
        if(Mode == Move){
            if(arrowdirection[1]){
                camerapos[zAxis] += -0.2;
            }
            if(arrowdirection[3]){
                camerapos[zAxis] += +0.2;
            }

            updateLook();
            viewerPos = vec3(camerapos[xAxis], 0, camerapos[zAxis]);
        }

        if(Mode == Rotate){
            if(arrowdirection[0]){
                //flag = true;
                theta[yAxis] += -4.0;
            }
            if(arrowdirection[1]){
                //flag = true;
                theta[xAxis] += -4.0;
            }
            if(arrowdirection[2]){
                //flag = true;
                theta[yAxis] += 4.0;
            }
            if(arrowdirection[3]){
                //flag = true;
                theta[xAxis] += 4.0;
            }
        }
        arrowdirection[0] = false;
        arrowdirection[1] = false;
        arrowdirection[2] = false;
        arrowdirection[3] = false;
    }
    
    gl.clear( gl.COLOR_BUFFER_BIT );
    
    var viewMatrix = lookAt(viewerPos, at, up);
        
    var translationMat;

    gl.uniform1i(gl.getUniformLocation(program, "multicolor"), 0);
    
    
    //First the first origin cube is initialized with rotation matrix, then rendered, then the next transformation info about matrices is being passed in.
    var i;
    for(i = 0; i < placementStack.length; i++){
        translationMat = translate(...placementStack[0]);
        if(i == 0){
            modelViewMatrix = mult(viewMatrix, translationMat);
            modelViewMatrix = mult(modelViewMatrix, rotate(theta[xAxis], vec3(1, 0, 0)));
            modelViewMatrix = mult(modelViewMatrix, rotate(theta[yAxis], vec3(0, 1, 0)));
            modelViewMatrix = mult(modelViewMatrix, rotate(theta[zAxis], vec3(0, 0, 1)));
        } else {
            translationMat = translate(...placementStack[i]);
            modelViewMatrix = mult(modelViewMatrix, translationMat);
        }
        gl.uniformMatrix4fv( gl.getUniformLocation(program,
            "uModelViewMatrix"), false, flatten(modelViewMatrix));
        
        gl.uniform1i(textureLocation, i);
        
        if(i == placementStack.length-1) break;
        
        gl.drawArrays(gl.TRIANGLES, 0, numPositions);
    }

    if(Mode == Present){
        isclicked = false;
    }else{
        gl.uniform1i(gl.getUniformLocation(program, "multicolor"), 1);
    }

    //Do this for the final Cube 
    if(isclicked){
        isclicked = false;
        gl.drawArrays(gl.TRIANGLES, 0, numPositions);      
        gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, color);

        gl.drawArrays(gl.TRIANGLES, 0, numPositions);
        
        var posoff = getface(color);
        
        if(posoff != null){
            audio_place.play();
            placementStack.push([...posoff]);
        }
    }

    gl.drawArrays(gl.TRIANGLES, 0, numPositions);
    requestAnimationFrame(render);
}