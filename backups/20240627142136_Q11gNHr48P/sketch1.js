/*
This p5.js sketch creates a visual of a cute koala climbing on a mountain.
The mountain is represented by a series of triangles, and the koala is represented by simple shapes to make it look cute.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(135, 206, 250); // Sky blue background

  // Draw the mountain
  fill(105, 105, 105); // Dark gray color
  noStroke();
  beginShape();
  vertex(0, windowHeight);
  vertex(windowWidth / 3, windowHeight / 2);
  vertex(windowWidth / 3 * 2, windowHeight);
  endShape(CLOSE);

  fill(169, 169, 169); // Lighter gray color
  beginShape();
  vertex(windowWidth / 3, windowHeight / 2);
  vertex(windowWidth / 3 * 2, windowHeight);
  vertex(windowWidth, windowHeight);
  endShape(CLOSE);

  // Draw the koala
  let koalaX = windowWidth / 2;
  let koalaY = windowHeight / 2;

  // Body
  fill(220, 220, 220); // Light gray
  ellipse(koalaX, koalaY, 50, 70);

  // Head
  ellipse(koalaX, koalaY - 50, 60, 60);

  // Ears
  ellipse(koalaX - 30, koalaY - 60, 30, 30);
  ellipse(koalaX + 30, koalaY - 60, 30, 30);

  // Eyes
  fill(0); // Black
  ellipse(koalaX - 15, koalaY - 55, 10, 10);
  ellipse(koalaX + 15, koalaY - 55, 10, 10);

  // Nose
  fill(0); // Black
  ellipse(koalaX, koalaY - 45, 10, 15);

  // Arms
  fill(220, 220, 220); // Light gray
  ellipse(koalaX - 20, koalaY + 5, 20, 50);
  ellipse(koalaX + 20, koalaY + 5, 20, 50);
}