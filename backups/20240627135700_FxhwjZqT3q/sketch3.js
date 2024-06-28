/*
This sketch creates a visualization of a glazed donut (represented as a circle with a hole) rolling down a hill.
The hill is represented by a diagonal line, and the donut moves down this line while rotating to simulate rolling.
The sketch uses the window width and height to ensure it is responsive to different screen sizes.*/

let angle = 0;
let pos;
let diameter = 100;
let speed = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pos = createVector(width / 4, height / 4);
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(2);
  let hillSlope = height / width;
  let hillY = height / 4 - (pos.x - width / 4) * hillSlope;
  line(0, height / 4, width, height); // Hill line

  // Moving down the hill
  pos.x += speed;
  pos.y = height / 4 + (pos.x - width / 4) * hillSlope;

  // Reset position when off-screen
  if (pos.x - diameter / 2 > width || pos.y - diameter / 2 > height) {
    pos = createVector(width / 4, height / 4);
  }

  // Drawing the donut
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  angle += speed / diameter; // Update the rotation angle
  fill(255, 204, 153); // Light brown color for the donut
  ellipse(0, 0, diameter, diameter);
  fill(255); // White color for the glaze
  ellipse(0, 0, diameter / 2, diameter / 2);
  pop();
}