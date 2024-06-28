/*
The following sketch draws a simple and cute rabbit using basic shapes in p5.js.
The canvas is dynamically resized to fit the window using windowWidth and windowHeight.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  // Calculate center position
  let centerX = width / 2;
  let centerY = height / 2 - 50;

  // Draw the head
  fill(255);
  ellipse(centerX, centerY, 200, 250);

  // Draw the ears
  ellipse(centerX - 60, centerY - 175, 60, 160);
  ellipse(centerX + 60, centerY - 175, 60, 160);

  // Draw the eyes
  fill(0);
  ellipse(centerX - 40, centerY - 20, 20, 35);
  ellipse(centerX + 40, centerY - 20, 20, 35);

  // Draw the nose
  fill(255, 192, 203);
  ellipse(centerX, centerY + 20, 20, 15);

  // Draw the mouth
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(centerX, centerY + 40, 50, 30, 0, PI);

  // Draw the whiskers
  line(centerX - 50, centerY + 20, centerX - 120, centerY + 10);
  line(centerX - 50, centerY + 30, centerX - 120, centerY + 30);
  line(centerX - 50, centerY + 40, centerX - 120, centerY + 50);
  line(centerX + 50, centerY + 20, centerX + 120, centerY + 10);
  line(centerX + 50, centerY + 30, centerX + 120, centerY + 30);
  line(centerX + 50, centerY + 40, centerX + 120, centerY + 50);
}