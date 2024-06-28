/*
This p5.js sketch will create a simple drawing of a cute koala climbing on a mountain.
It will use basic shapes and colors to depict the elements.
The koala will be represented using circles and ellipses, and the mountain will be a triangle.*/

function setup() {
  // Create a canvas that fits the window dimensions
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Set the background color to sky blue
  background(135, 206, 235);
  
  // Draw the mountain
  fill(139, 69, 19); // Brown color for the mountain
  noStroke(); // No outline for the mountain
  beginShape();
  vertex(100, height); // Bottom left corner
  vertex(width / 2, height / 3); // Peak
  vertex(width - 100, height); // Bottom right corner
  endShape(CLOSE);
  
  // Draw the koala
  let koalaX = width / 2; // X position for koala
  let koalaY = height / 3 + 50; // Y position for koala
  fill(192, 192, 192); // Grey color for the koala
  
  // Koala head
  ellipse(koalaX, koalaY, 60, 60);
  
  // Koala ears
  ellipse(koalaX - 30, koalaY - 30, 40, 40);
  ellipse(koalaX + 30, koalaY - 30, 40, 40);
  
  // Koala eyes
  fill(0); // Black color for the eyes
  ellipse(koalaX - 15, koalaY, 10, 10);
  ellipse(koalaX + 15, koalaY, 10, 10);
  
  // Koala nose
  fill(0); // Black color for the nose
  ellipse(koalaX, koalaY + 15, 15, 10);
  
  // Koala body
  fill(192, 192, 192); // Grey color for the body
  ellipse(koalaX, koalaY + 80, 80, 100);
}