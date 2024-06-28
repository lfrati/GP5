/*
This sketch creates a scene of a fish jumping over a boat.
The boat is drawn as a simple rectangle and triangle, representing the hull and sail.
The fish follows an arc-like path over the boat.
The canvas size will adjust to match the window size.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(135, 206, 235); // Sky Blue

  // Water
  fill(0, 105, 148);
  rect(0, height * 0.6, width, height * 0.4);

  // Boat Hull
  fill(139, 69, 19);
  rect(width * 0.4, height * 0.5, width * 0.2, height * 0.1);
  // Boat Sail
  fill(255);
  triangle(width * 0.5, height * 0.2, width * 0.4, height * 0.5, width * 0.6, height * 0.5);

  // Fish jumping logic
  let fishX = (frameCount % width);
  let fishY = height * 0.6 - abs(sin(TWO_PI * fishX / width) * height * 0.3);

  // Fish
  fill(255, 165, 0); // Orange
  ellipse(fishX, fishY, 30, 15); // Body
  triangle(fishX - 15, fishY, fishX - 30, fishY - 10, fishX - 30, fishY + 10); // Tail

}