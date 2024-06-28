/*
This p5.js sketch represents an imaginative scenario where dogs have achieved sentience and landed on the moon before humans.
The sketch includes a simple representation of a lunar surface, a dog in a space suit, paw prints on the lunar surface, and a flag with a dog paw emblem to mark their achievement.
The canvas is dynamically set to windowWidth and windowHeight to accommodate different screen sizes.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drawMoonSurface();
  drawSpaceDog();
  drawPawPrints();
  drawFlag();
}

function drawMoonSurface() {
  fill(80);
  noStroke();
  ellipse(width / 2, height, width * 1.5, height / 2); // Simplistic moon surface
}

function drawSpaceDog() {
  fill(200);
  stroke(0);
  ellipse(width / 2, height / 2, 100, 100); // Dog helmet
  ellipse(width / 2, height / 2 + 50, 50, 100); // Dog body
  strokeWeight(2);
  line(width / 2 - 25, height / 2 + 75, width / 2 - 50, height / 2 + 125); // Left leg
  line(width / 2 + 25, height / 2 + 75, width / 2 + 50, height / 2 + 125); // Right leg
  line(width / 2 - 10, height / 2 + 30, width / 2 - 50, height / 2 - 10); // Left arm
  line(width / 2 + 10, height / 2 + 30, width / 2 + 50, height / 2 - 10); // Right arm
}

function drawPawPrints() {
  fill(0);
  ellipse(width / 2 - 80, height - 100, 20, 20); // Paw prints
  ellipse(width / 2 - 60, height - 120, 20, 20);
  ellipse(width / 2 - 40, height - 140, 20, 20);
}

function drawFlag() {
  stroke(255);
  line(width / 2 + 100, height / 2 - 50, width / 2 + 100, height / 2 + 100); // Flag pole
  fill(200, 0, 0);
  rect(width / 2 + 100, height / 2 - 70, 60, 40); // Flag
  fill(255);
  ellipse(width / 2 + 130, height / 2 - 50, 20, 20); // Paw emblem
  ellipse(width / 2 + 125, height / 2 - 55, 5, 5);
  ellipse(width / 2 + 135, height / 2 - 55, 5, 5);
  ellipse(width / 2 + 125, height / 2 - 45, 5, 5);
  ellipse(width / 2 + 135, height / 2 - 45, 5, 5);
}