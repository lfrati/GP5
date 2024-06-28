/*
This sketch simulates a glazed donut rolling down a hill.
It achieves this with a loop that moves and rotates an ellipse with holes in it down a sloped background.
The donut is created using concentric ellipses to represent the glazing and the hole in the middle.*/

let angle = 0; 
let donutX = 0; 
let donutY = 0; 
let slope = 5; 

function setup() { 
  createCanvas(windowWidth, windowHeight); 
  donutY = windowHeight / 4; 
}

function draw() { 
  background(200, 220, 255); 
  drawHill(); 
  drawDonut(donutX, donutY, angle); 
  donutX += 3; 
  donutY = windowHeight / 2 + slope * donutX; 
  angle += 0.05; 
  if (donutX > windowWidth) { 
    donutX = -50; 
  }
}

function drawHill() { 
  noStroke(); 
  fill(100, 250, 100); 
  beginShape(); 
  vertex(0, windowHeight / 2); 
  vertex(windowWidth, windowHeight / 2 + slope * windowWidth); 
  vertex(windowWidth, windowHeight); 
  vertex(0, windowHeight); 
  endShape(CLOSE); 
}

function drawDonut(x, y, angle) { 
  push(); 
  translate(x, y); 
  rotate(angle); 
  fill(255, 240, 200); 
  ellipse(0, 0, 100, 100); 
  fill(200, 160, 100); 
  ellipse(0, 0, 50, 50); 
  pop(); 
}