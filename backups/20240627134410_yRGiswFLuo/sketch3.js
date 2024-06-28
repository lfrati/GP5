/*
In this sketch, we will draw a cute koala climbing on a tree.
We'll animate the koala moving up and down the tree.
To do this, we'll use simple shapes for the koala and the tree and use a sin wave function to make the koala smoothly move up and down.
The canvas will adjust to the window dimensions using windowWidth and windowHeight.*/

let koalaY;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  koalaY = height / 2;
}

function draw() {
  background(220);
  drawTree();
  drawKoala();
  moveKoala();
}

function drawTree() {
  fill(139, 69, 19); // Brown color for the tree trunk
  rect(width / 2 - 25, 0, 50, height);
  fill(34, 139, 34); // Green color for the leaves
  ellipse(width / 2, height / 6, 150, 150);
  ellipse(width / 2 - 50, height / 5, 150, 150);
  ellipse(width / 2 + 50, height / 5, 150, 150);
}

function drawKoala() {
  let koalaX = width / 2 - 25;
  fill(160); // Grey color for the koala
  ellipse(koalaX, koalaY, 50, 50); // Koala's head
  ellipse(koalaX, koalaY + 50, 75, 50); // Koala's body
  fill(0); // Black color for eyes and nose
  ellipse(koalaX - 10, koalaY - 10, 10, 10); // Left eye
  ellipse(koalaX + 10, koalaY - 10, 10, 10); // Right eye
  ellipse(koalaX, koalaY, 10, 10); // Nose
}

function moveKoala() {
  koalaY = height / 2 + sin(angle) * (height / 3);
  angle += 0.02;
}