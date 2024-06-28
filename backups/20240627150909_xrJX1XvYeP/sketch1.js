/*
This sketch represents a humorous illustration of the moon landing if dogs had achieved sentience before humans.
A dog in a space suit is planted on the moon, with a dog paw flag, staring at Earth in the background.
The sketch utilizes basic shapes to draw the dog, the moon surface, the paw flag, and Earth.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(0);
  drawMoonSurface();
  drawEarth();
  drawDogAstronaut(width / 2, height / 2 + 100);
  drawPawFlag(width / 2 - 100, height / 2 + 50);
}

function drawMoonSurface() {
  fill(169, 169, 169);
  ellipse(width / 2, height, windowWidth, windowHeight / 3);
}

function drawEarth() {
  fill(0, 0, 255);
  stroke(0, 255, 0);
  strokeWeight(10);
  ellipse(100, 100, 80, 80);
  noStroke();
}

function drawDogAstronaut(x, y) {
  // Body
  fill(255);
  ellipse(x, y, 100, 150);
  // Helmet
  fill(0, 191, 255, 150);
  ellipse(x, y - 50, 120, 120);
  // Head
  fill(139, 69, 19);
  ellipse(x, y - 50, 80, 80);
  // Eyes
  fill(0);
  ellipse(x - 20, y - 55, 10, 10);
  ellipse(x + 20, y - 55, 10, 10);
  // Nose
  fill(0);
  ellipse(x, y - 40, 15, 15);
  // Mouth
  stroke(0);
  line(x - 10, y - 30, x + 10, y - 30);
  noStroke();
}

function drawPawFlag(x, y) {
  // Flag
  fill(255, 0, 0);
  rect(x, y - 60, 50, 30);
  // Paw print
  fill(0);
  ellipse(x + 25, y - 50, 10, 10);
  ellipse(x + 22, y - 40, 10, 10);
  ellipse(x + 28, y - 40, 10, 10);
  ellipse(x + 25, y - 35, 20, 20);
  // Flag pole
  stroke(255);
  line(x, y, x, y - 60);
  noStroke();
}