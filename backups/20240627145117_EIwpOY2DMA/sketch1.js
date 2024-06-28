/*
This p5.js sketch depicts a cute happy rabbit.
The sketch uses basic shapes to draw the body, ears, eyes, nose, and mouth of the rabbit, giving it a joyful expression.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);
  // Draw the body
  fill(255, 255, 255); // White color
  ellipse(width / 2, height / 1.5, 200, 300); // Body
  
  // Draw the head
  ellipse(width / 2, height / 2, 150, 150); // Head
  
  // Draw the ears
  ellipse(width / 2 - 50, height / 2 - 100, 40, 100); // Left ear
  ellipse(width / 2 + 50, height / 2 - 100, 40, 100); // Right ear
  
  // Draw the eyes
  fill(0); // Black color
  ellipse(width / 2 - 30, height / 2 - 20, 20, 20); // Left eye
  ellipse(width / 2 + 30, height / 2 - 20, 20, 20); // Right eye
  
  // Draw the nose
  fill(255, 192, 203); // Pink color
  triangle(width / 2 - 10, height / 2 + 10, width / 2 + 10, height / 2 + 10, width / 2, height / 2 + 20);

  // Draw the mouth
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(width / 2, height / 2 + 30, 40, 20, 0, PI); // Happy mouth
}