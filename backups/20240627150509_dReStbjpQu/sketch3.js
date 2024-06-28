/*
This sketch depicts a fish jumping over a boat.
The boat is drawn at the bottom of the screen, remaining stationary, while a fish periodically jumps over it following a sine wave trajectory.*/

let angle = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(135, 206, 250);
  drawBoat();
  drawFish();
  angle += 0.05;
}

function drawBoat() {
  fill(139, 69, 19); // brown color for the boat
  let boatWidth = 200;
  let boatHeight = 50;
  // Center the boat horizontally and near the bottom vertically
  let x = (width / 2) - (boatWidth / 2);
  let y = height - 100;
  rect(x, y, boatWidth, boatHeight);
}

function drawFish() {
  fill(255, 165, 0); // orange color for the fish
  let fishWidth = 50;
  let fishHeight = 25;
  // Create a smooth jump with a sine wave
  let x = (width / 2) - (fishWidth / 2) + cos(angle) * (width / 4);
  let y = height - 100 - sin(angle) * (height / 3);
  ellipse(x, y, fishWidth, fishHeight);
  drawFishTail(x, y);
}

function drawFishTail(x, y) {
  // Draw the tail of the fish
  fill(255, 140, 0); // darker orange color for the tail
  triangle(x - 25, y, x - 50, y - 10, x - 50, y + 10);
}