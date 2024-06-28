/*
This sketch depicts a simple representation of a koala climbing a mountain.
The koala is created with basic shapes like ellipses and rectangles, and it is placed on a sloped mountain shape.
The canvas size adapitates to the window's dimensions using windowWidth and windowHeight.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(135, 206, 250); // sky blue background
  drawMountain();
  drawKoala();
}

function drawMountain() {
  fill(139, 69, 19); // brown color for mountain
  triangle(0, height, width / 2, height / 4, width, height); // mountain shape
}

function drawKoala() {
  push();
  translate(width / 2.5, height / 2); // position koala on the mountain
  rotate(-PI / 6); // rotate koala to match the slope of mountain

  // koala body
  fill(169, 169, 169); // grey color for koala
  ellipse(0, 0, 50, 70);

  // koala head
  ellipse(0, -50, 60, 60);

  // koala ears
  ellipse(-25, -60, 20, 30);
  ellipse(25, -60, 20, 30);

  // koala eyes
  fill(0); // black color for eyes
  ellipse(-15, -55, 10, 10);
  ellipse(15, -55, 10, 10);

  // koala nose
  fill(0); // black color for nose
  ellipse(0, -40, 10, 15);

  pop();
}