/*
To depict a sea urchin cooking a pancake, we need to draw a sea urchin with multiple spines, and in front of it, we should place a griddle with a pancake on it.
The sea urchin can have a set of tongs or a spatula to represent the cooking action.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  drawSeaUrchin(width / 3, height / 2, 100);
  drawGriddleAndPancake((2 * width) / 3, height / 2);
}

function drawSeaUrchin(x, y, radius) {
  push();
  translate(x, y);
  fill(50);
  noStroke();
  ellipse(0, 0, radius * 2, radius * 2);
  stroke(50);
  for (let angle = 0; angle < 360; angle += 20) {
    let x1 = cos(angle) * radius;
    let y1 = sin(angle) * radius;
    let x2 = cos(angle) * (radius + 50);
    let y2 = sin(angle) * (radius + 50);
    line(x1, y1, x2, y2);
  }
  pop();
}

function drawGriddleAndPancake(x, y) {
  push();
  translate(x, y);
  // Draw griddle
  fill(100);
  rectMode(CENTER);
  rect(0, 0, 150, 20);
  // Draw handle of the griddle
  rect(0, 45, 20, 60);
  // Draw pancake
  fill(200, 150, 50);
  ellipse(0, 0, 100, 100);
  // Draw tongs/spatula
  stroke(50);
  line(-10, -50, -50, -100);
  line(10, -50, 50, -100);
  pop();
}