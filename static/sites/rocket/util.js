/*
util,js
Yaacov Kochatkov
Utility file that stores rocket ship points, Classes that contruct the main object
and orbs
*/

const spaceship = 
    [-1,1,
    1,1,
    
    1,1,
    1,-1,

    1,-1,
    -1,-1,

    -1,-1,
    -1,1,

    -1,1,
    -2,1.5,

    -2,1.5,
    -2,-1.5,

    -2,-1.5,
    -1,-1,

    1,1,
    2.5,0,

    2.5,0,
    1,-1];

/*
All shape related variables and functions that are taken in order to modify the object and
support in rendering it.
*/
class Shape {
    constructor(name, shapebuffer, colorbuffer){
        this.name = name;
        this.shapebuffer = shapebuffer;
        this.colorbuffer = colorbuffer;
        this.acceleration = [0,0];
        this.velocity = [0,0];
        this.theta;
        this.position = [0,0];
        this.defaultColor = [0,0,0,1];
        this.points = [];
        this.colors = [];
        this.scale = 0;
        this.point_length = 0;
        this.display_points = [];
    }

    //sets the points onto the array of the object points
    setShape(points, scale){
        
        //pass points to the object points
        this.points = [...points];
        
        this.scale = scale;
        for(var i = 0; i < points.length; i++){
            this.points[i] *= this.scale;
        }
        
        this.display_points = [...this.points];
        this.point_length = this.display_points.length/2;
        //set the color to have this many points
        for(var i = 0; i < this.point_length; i++){
            this.colors.push(...this.defaultColor);
        }
    
    }

    //resizes the objects
    resize(scale){
        if(!this.isDisplayPoints()) return;
        this.scale = scale;
        for(var i = 0; i < points.length; i++){
            this.points[i] *= this.scale;
            this.points[i+1] *= this.scale;
            this.display_points[i] = this.position[0] + this.points[i];
            this.display_points[i+1] = this.position[1] + this.points[i+1];
        }
        
    }
    
    //rotates the object
    rotate(theta){
        if(!this.isDisplayPoints()) return;
        this.theta = theta;
        var i = 0;
        while(i < this.display_points.length){
            this.display_points[i]      = this.position[0] + ((this.points[i] * Math.cos(theta)) - (this.points[i+1] * Math.sin(theta)));
            this.display_points[i+1]    = this.position[1] + ((this.points[i] * Math.sin(theta)) + (this.points[i+1] * Math.cos(theta)));
            i+=2;
        }
        
    }

    //rotates the object given degrees
    rotateD(theta){
        theta *= (Math.PI/180);
        this.rotate(theta);
    }

    //sets the position of the object
    setPosition(point){
        if(!this.isDisplayPoints()) return;
        this.position = [...point];

        for(var i = 0, j = 0; i < this.point_length; i++){
            this.display_points[j] += this.position[0];
            this.display_points[j+1] += this.position[1];
            j+=2;
        }
    }

    //sets the direction of the object
    setTrajectory(theta){
        this.theta = theta;
        var speed = Math.sqrt(Math.pow(this.velocity[0],2) + Math.pow(this.velocity[1],2));
        this.velocity = [speed*Math.cos(theta),speed*Math.sin(theta)];
    }

    //sets colof of the object
    setColor(color){
        if(!this.isDisplayPoints() || color.length != 4) return;
        
        this.colors = [];
        for(var i = 0; i < this.point_length; i++){
            this.colors.push(...color);
        }
    }

    //sets a rainbow color pattern to points of the object
    setRainbow(){
        if(!this.isDisplayPoints()) return;

        var rainbow = [
            [1,0,0,1],
            [1,0.65,0,1],
            [1,1,0,1],
            [0,0.5,0,1],
            [0,0,1,1],
            [0.3,0,0.5, 1],
            [0.93, 0.5, 0.93, 1]
        ];

        this.colors = [];
        var i = 0, j = 0;
        while(i < this.point_length){
            this.colors.push(...rainbow[j]);
            i++; j++;
            if(j == 7) j = 0;
        }
    }

    //sets velocity of the object
    setVelocity(velocity){
        if(!this.isDisplayPoints()) return;
        this.velocity = [...velocity];

    }

    //checks if the object has points to render
    isDisplayPoints(){
        if(this.point_length == 0){
            console.log("Error: Shape " + this.name + " not set");
            return false;
        }
        return true;
    }

    //moves the shape by changing the position values depending on speed and direction
    progress(){
        var d_x = this.velocity[0]*pixel_to_canvas*(speed);
        var d_y = this.velocity[1]*pixel_to_canvas*(speed);

        //position of the shapes centre
        this.position[0] += d_x;
        this.position[1] += d_y;

        this.velocity[0] += this.acceleration[0]*pixel_to_canvas;
        this.velocity[1] += this.acceleration[1]*pixel_to_canvas;
        
        var i = 0;
        while(i < this.display_points.length){
            this.display_points[i] += d_x;
            this.display_points[i+1] += d_y;
            i+=2;
        }
    }
}

/*
Extended class from Shape. Is used for orb shapes in the program
*/
class BasicCircle extends Shape {
    constructor(name, shapebuffer, colorbuffer){
        super(name, shapebuffer, colorbuffer);
        this.radius = 0;
    }

    //sets the radius variable of the shape
    setShape(points, scale){
        super.setShape(points, scale);
        this.radius = distance2d([this.display_points[0],this.display_points[1]],[this.display_points[2],this.display_points[3]]);
    }

    //rescales the shape modifying the radius too
    resize(scale){
        super.resize(scale);
        this.radius = distance2d([this.display_points[0],this.display_points[1]],[this.display_points[2],this.display_points[3]]);
    }
}

//generates points for fan mode in gl
function createCircle(npoints){
    var points = [0,0];
    
    var t_interval = 2*Math.PI / (npoints-2);
    var t = 0;

    //uses in an Implicit function style to create x and y points
    for(var i = 0; i < npoints; i++){
        points.push(Math.cos(t),Math.sin(t));
        t+=t_interval;
    }
    return points;
}

//adjusts theta that its only in between 0 and 2*PI
function adjustTheta(theta){
    var new_theta = theta;
    while(new_theta > 2 * Math.PI){ new_theta-=(2*Math.PI);}
    while(new_theta < 0){ new_theta+=(2*Math.PI);}
    
    return new_theta;
}

//generates random theta
function randomDirection(){
    var con = 2*Math.PI * Math.random();
    return con;
}

//generates random position vector
function randomPosition(constraint_x, constraint_y){
    var r = [Math.random()*(2-(constraint_x*2)) - (1-constraint_x),Math.random()*(2-(constraint_y*2)) - (1-constraint_y)];
    return r;
}

//distance scalar between 2 2d points
function distance2d(point_a, point_b){
    return Math.abs(Math.sqrt(Math.pow(point_b[0] - point_a[0], 2) + Math.pow(point_b[1] - point_a[1], 2)));
}

//direction of 2 points
function direction2d(point_a, point_b){
    var velocity = [0,0];
    velocity[0] = point_b[0] - point_a[0];
    velocity[1] = point_b[1] - point_a[1];
    return velocity;
}

/*
An idea to turn the ship back to the center direction for the sake of not having the main shape
stuck inside the walls
*/
function vectorToTheta(x, y){
    if(x == 0 && y == 0)
        return 0;

    if(x == 0){
        return y > 0 ? Math.PI/2 : 3 * Math.PI / 2;
    } 
    var theta = Math.atan(y/x);
    if(x<0){
        theta += Math.PI;
    }
    return adjustTheta(theta);
}