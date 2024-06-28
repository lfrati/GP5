/*
This sketch imagines a whimsical scene of the moon landing, but if dogs were sentient and did it before humans.
The drawing features a simple dog astronaut planting a bone-shaped flag on the moon, with Earth visible in the background.
The canvas is resized to fit the browser window dimensions using windowWidth and windowHeight.*/

function setup() {
  createCanvas(windowWidth, windowHeight);}  background(0); // Setting the background to black to represent space
}

function draw() {
  // Draw the moon (a large gray circle at the bottom of the screen)
  fill(200);
  noStroke();
  ellipse(windowWidth / 2, windowHeight, windowWidth * 1.5, windowHeight / 2);

  // Draw Earth in the background
  fill(50, 100, 255);
  ellipse(windowWidth * 0.1, windowHeight * 0.2, windowWidth * 0.2, windowWidth * 0.2);

  // Draw the dog astronaut (rectangle for body, ellipse for head, ellipses for paws)
  fill(150, 75, 0); // Brown color for dog
  rect(windowWidth / 2 - 25, windowHeight * 0.6, 50, 100); // Body
  ellipse(windowWidth / 2, windowHeight * 0.55, 60, 60); // Head
  ellipse(windowWidth / 2 - 30, windowHeight * 0.63, 20, 20); // Left paw
  ellipse(windowWidth / 2 + 30, windowHeight * 0.63, 20, 20); // Right paw
  ellipse(windowWidth / 2 - 15, windowHeight * 0.75, 20, 20); // Left foot
  ellipse(windowWidth / 2 + 15, windowHeight * 0.75, 20, 20); // Right foot

  // Draw the flag the dog is planting (pole and bone flag)
  stroke(255);
  strokeWeight(5);
  line(windowWidth / 2 + 25, windowHeight * 0.7, windowWidth / 2 + 25, windowHeight * 0.6);

  noStroke();
  fill(255);
  rect(windowWidth / 2 + 25, windowHeight * 0.58, 50, 10); // Flagpole
  ellipse(windowWidth / 2 + 55, windowHeight * 0.58, 60, 20); // Dog bone shape
}