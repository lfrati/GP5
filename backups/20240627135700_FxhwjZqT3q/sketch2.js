/*
The sketch includes a glazed donut shape that rolls down a hill.
The hill is represented by a diagonal line.
The donut is drawn using ellipse and arcs to mimic the look of a glazed donut.
The rolling motion is achieved by incrementing the x and y positions of the donut and rotating it around its center as it moves diagonally down the 'hill'.*/

let x, y, angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 50;
  y = 50;
  angle = 0;
}

function draw() {
  background(220);
  drawHill();
  drawDonut(x, y, angle);
  x += 2;
  y += 2;
  angle += 0.05;
  if (x - 50 > windowWidth || y - 50 > windowHeight) {
    x = 50;
    y = 50;
  }
}

function drawHill() {
  stroke(0);
  strokeWeight(4);
  line(0, 0, windowWidth, windowHeight);
}

function drawDonut(x, y, angle) {
  push();
  translate(x, y);
  rotate(angle);
  fill(255, 200, 150);
  ellipse(0, 0, 100, 100);
  fill(220);
  ellipse(0, 0, 50, 50);
  pop();
}