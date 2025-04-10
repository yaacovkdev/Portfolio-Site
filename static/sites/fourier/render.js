"use strict";

const CANVAS_SIZE = 1000,
  STARTING_X = 0,
  STARTING_Y = 0;

let FPS = 60;
let canvas;
let linegraphics;
let inklayer;

let x1 = STARTING_X;
let y1 = STARTING_Y;
let x2 = 0;
let y2 = 0;

let displayarm = false;
let drawspeed = 1;

let nam = {
  started: false,
  old_x: STARTING_X,
  old_y: STARTING_Y,
  new_x: 0,
  new_y: 0,
};

function setup() {
  canvas = createCanvas(CANVAS_SIZE, CANVAS_SIZE);

  canvas.parent("mainDiv");
  canvas.id("mainCanvas");

  linegraphics = createGraphics(CANVAS_SIZE, CANVAS_SIZE, WEBGL);
  inklayer = createGraphics(CANVAS_SIZE, CANVAS_SIZE, WEBGL);

  linegraphics.stroke(255);
  linegraphics.strokeWeight(1);

  inklayer.stroke(0, 255, 0);
  inklayer.strokeWeight(2);

  inklayer.smooth(4);
  linegraphics.smooth(2);

  frameRate(FPS);
  background(0);
}

function setSpeed(s) {
  drawspeed = s;
}

function resetValues() {
  x1 = STARTING_X;
  y1 = STARTING_Y;
  x2 = STARTING_X;
  y2 = STARTING_Y;

  nam = {
    started: false,
    old_x: STARTING_X,
    old_y: STARTING_Y,
    new_x: 0,
    new_y: 0,
  };

  drawspeed = 1;

  background(0);

  //HOLY MOLY RANDOM GUESS.
  inklayer.clear();
  linegraphics.clear();

  try {
    //change for now. Uncertain if it protects too much better.
    sandboxFunction(code_field)();
    loop();
    return false;
  } catch (err) {
    console.error(err);
    noLoop();
    return true;
  }
}

function displayVectors(drawArm) {
  x1 = STARTING_X;
  y1 = STARTING_Y;
  x2 = STARTING_X;
  y2 = STARTING_Y;

  if (drawArm) linegraphics.background(0);

  for (var i = 0; i < mainArm.vectors; i++) {
    const vec = mainArm.pos(i);

    if ( vec.angle > 2 * Math.PI)  vec.angle -= 2 * Math.PI;
    if ( vec.angle < 0)  vec.angle += 2 * Math.PI;

    x2 += vec.length * Math.cos( vec.angle);
    y2 += vec.length * -Math.sin( vec.angle); //negative is up in WebGL
    if (drawArm) linegraphics.line(x1, y1, x2, y2);
    x1 = x2;
    y1 = y2;
  }
}

function displayInk() {
  if (!nam.started) {
    nam.started = true;
    nam.old_x = x1;
    nam.old_y = y1;

    return;
  }
  nam.new_x = x1;
  nam.new_y = y1;
  inklayer.line(nam.new_x, nam.new_y, nam.old_x, nam.old_y);
  //linegraphics.line(nam.new_x+10, nam.new_y+10, nam.old_x+10, nam.old_y+10);
  nam.old_x = x1;
  nam.old_y = y1;
}

//updates canvas in between frames when sped up
function updateSequence(s) {
  displayVectors(displayarm);
  displayInk();
  mainArm.proceed(FPS);
  for (var i = 1; i < s; i++) {
    displayVectors(false);
    displayInk();
    mainArm.proceed(FPS);
  }
}

function draw() {
  background(0);

  if (mainArm == null) return;

  updateSequence(drawspeed);

  //render
  if (displayarm) image(linegraphics, 0, 0);
  image(inklayer, 0, 0);
}
