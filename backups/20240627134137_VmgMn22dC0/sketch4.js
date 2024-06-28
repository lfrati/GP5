/*
This sketch represents a whimsical scenario where dogs, having reached sentience before humans, are the ones to land on the Moon.
We will draw a simplified Moon's surface, a dog in an astronaut suit planting a flag with a paw print symbol, and stars in the background.
The canvas size will be set to the window dimensions using windowWidth and windowHeight to make it responsive.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); // Space's black background

  // Draw stars
  for (let i = 0; i < 100; i++) {
    stroke(255);
    point(random(windowWidth), random(windowHeight));
  }

  // Draw Moon surface
  fill(200);
  noStroke();
  ellipse(windowWidth / 2, windowHeight, windowWidth * 1.2, windowHeight / 3);

  // Draw dog astronaut
  push();
  translate(windowWidth / 2, windowHeight - windowHeight / 6);

  fill(255, 204, 100); // Dog's yellowish fur color
  ellipse(0, -50, 80, 100); // Dog's head

  fill(200);
  ellipse(0, -50, 90, 110); // Helmet

  fill(255);
  rect(-25, -10, 50, 80); // Body space suit

  fill(180);
  rect(-20, -60, 40, 20); // Helmet connector

  fill(0);
  ellipse(-15, -55, 10, 10); // Left eye
  ellipse(15, -55, 10, 10); // Right eye
  ellipse(0, -40, 20, 15); // Nose

  fill(255, 204, 100);
  ellipse(-12, -30, 10, 10); // Left ear
  ellipse(12, -30, 10, 10); // Right ear
  pop();

  // Draw flag
  push();
  translate(windowWidth / 2 + 50, windowHeight - windowHeight / 3);

  stroke(255);
  strokeWeight(5);
  line(0, 0, 0, -100); // Flagpole

  noStroke();
  fill(255);
  rect(0, -150, 100, 50); // Flag

  fill(0);
  ellipse(50, -125, 30, 30); // Paw print circle
  ellipse(40, -130, 10, 10); // Paw print detail
  ellipse(60, -130, 10, 10);
  ellipse(45, -115, 10, 10);
  ellipse(55, -115, 10, 10);
  pop();
}