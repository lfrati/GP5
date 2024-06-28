/*
This sketch represents a koala climbing up and down a tree.
The koala starts at the bottom of the canvas and moves upwards until it reaches near the top, then it reverses direction and moves back down.
The koala and tree are drawn using simple shapes for simplicity.
The position of the koala is updated in the draw function to create the animation effect.*/

let yKoala; // y-coordinate of the koala
let dir = 1; // direction of movement, 1 means moving up, -1 means moving down

function setup() {
  createCanvas(windowWidth, windowHeight);
  yKoala = height - 100; // Initial position at bottom of canvas
}

function draw() {
  background(135, 206, 235); // Light sky blue background
  drawTree();
  drawKoala(width / 2, yKoala);
  moveKoala();
}

function drawTree() {
  // Draw tree trunk
  fill(139, 69, 19); // Brown color for the trunk
  rect(width / 2 - 50, 0, 100, height);
}

function drawKoala(x, y) {
  // Draw the body
  fill(169, 169, 169); // Grey color for koala
  ellipse(x, y, 80, 100); // Body
  // Draw the head
  ellipse(x, y - 70, 80, 80); // Head
  // Draw the ears
  ellipse(x - 30, y - 90, 30, 40); // Left ear
  ellipse(x + 30, y - 90, 30, 40); // Right ear
  // Draw the eyes
  fill(0); // Black color for eyes
  ellipse(x - 15, y - 75, 10, 10); // Left eye
  ellipse(x + 15, y - 75, 10, 10); // Right eye
  // Draw the nose
  fill(0); // Black color for nose
  ellipse(x, y - 60, 10, 15); // Nose
}

function moveKoala() {
  yKoala += dir * 2; // Move koala
  // Reverse direction if it reaches top or bottom limits
  if (yKoala < 100 || yKoala > height - 100) {
    dir *= -1;
  }
}
