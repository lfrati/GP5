/*
This sketch imagines a world where dogs, having achieved sentience, are the ones to land on the moon.
It draws a moon landscape with paw prints and a flag symbolizing the dog's achievement.
The canvas size is set to the full window dimensions to ensure it is responsive.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // to prevent continuous looping as we only need to draw the scene once
}

function draw() {
  background(0); // space is black
  drawMoonSurface();
  drawPawPrints();
  drawDogFlag();
}

function drawMoonSurface() {
  fill(200);
  ellipse(width / 2, height / 2, height, height); // Simulate the moon surface as a large ellipse
}

function drawPawPrints() {
  fill(100);
  // Simple representation of paw prints
  ellipse(width / 2 - 100, height / 2 - 50, 20, 20);
  ellipse(width / 2 - 110, height / 2 - 30, 10, 10);
  ellipse(width / 2 - 90, height / 2 - 30, 10, 10);
  ellipse(width / 2 - 100, height / 2 - 10, 10, 10);
  ellipse(width / 2 - 70, height / 2 + 30, 20, 20);
  ellipse(width / 2 - 80, height / 2 + 50, 10, 10);
  ellipse(width / 2 - 60, height / 2 + 50, 10, 10);
  ellipse(width / 2 - 70, height / 2 + 70, 10, 10);
}

function drawDogFlag() {
  fill(255);
  rect(width / 2 + 100, height / 2 - 200, 10, 200); // Flag pole
  fill(255, 0, 0);
  rect(width / 2 + 110, height / 2 - 200, 100, 50); // Flag
  fill(255);
  ellipse(width / 2 + 150, height / 2 - 175, 30); // Symbol on the flag - representing a dog's nose or paw print stylized
}