/*
In this p5.js sketch, I will create a scene where a fish jumps over a boat.
The boat will be positioned towards the bottom of the canvas and the fish will follow a sinusoidal path to give the illusion of jumping over the boat.
The canvas will adjust to the window size using windowWidth and windowHeight.*/

let fishX = 0, fishY = 0, boatX, boatY, amplitude, period, boatWidth, boatHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  boatWidth = windowWidth / 5;
  boatHeight = windowHeight / 20;
  boatX = width / 2 - boatWidth / 2;
  boatY = height - boatHeight - 30;
  amplitude = height / 4;
  period = width;
}

function draw() {
  background(135, 206, 235); // Sky blue background
  drawBoat(boatX, boatY, boatWidth, boatHeight);
  drawFish();
  fishX += 5; // Move fish along x-axis
  if (fishX > width) { // Reset fish position after it leaves the canvas
    fishX = -50;
  }
}

function drawBoat(x, y, w, h) {
  fill(139, 69, 19); // Brown color for boat
  rect(x, y, w, h);
  triangle(x, y, x + w / 2, y - h, x + w, y); // The top part of the boat
}

function drawFish() {
  fishY = height / 2 + amplitude * sin((TWO_PI / period) * fishX) - 50; // Sinusoidal path for jumping effect
  fill(255, 69, 0); // Orange color for fish
  ellipse(fishX, fishY, 50, 30); // Fish body
  triangle(fishX - 25, fishY, fishX - 50, fishY - 15, fishX - 50, fishY + 15); // Fish tail
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  boatX = width / 2 - boatWidth / 2;
  boatY = height - boatHeight - 30;
}