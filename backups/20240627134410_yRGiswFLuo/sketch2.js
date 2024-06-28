/*
The following p5.js sketch depicts a koala climbing up and down a tree.
We create a tree using a simple rectangle and the koala with an ellipse for the head and small circles for the ears.
The koala moves up and down the tree by changing its y-coordinate based on a sine wave for a smooth, continuous animation.*/

let koalaY; // Position of the koala in the Y-axis
let koalaSpeed = 0.02; // Speed of the koala's movement

function setup() {
  createCanvas(windowWidth, windowHeight);
  koalaY = height / 2;
}

function draw() {
  background(135, 206, 250); // Sky blue background
  drawTree();
  drawKoala();
  koalaY = height / 2 + sin(frameCount * koalaSpeed) * (height / 4); // Calculate new y position
}

function drawTree() {
  fill(139, 69, 19); // Brown color for the tree
  rect(width / 2 - 20, 0, 40, height); // Tree trunk
  fill(34, 139, 34); // Green color for the leaves
  ellipse(width / 2, 100, 200, 200); // Tree top
}

function drawKoala() {
  let koalaX = width / 2 - 60; // Fixed x position for the koala
  fill(128, 128, 128); // Grey color for the koala
  ellipse(koalaX, koalaY, 80, 60); // Head
  ellipse(koalaX - 30, koalaY - 40, 30, 30); // Left ear
  ellipse(koalaX + 30, koalaY - 40, 30, 30); // Right ear
  fill(0); // Black for the eyes and nose
  ellipse(koalaX - 20, koalaY, 10, 10); // Left eye
  ellipse(koalaX + 20, koalaY, 10, 10); // Right eye
  ellipse(koalaX, koalaY + 20, 15, 10); // Nose
}