/*
This sketch will draw a simple koala climbing up and down a tree.
The koala will move vertically along the tree trunk.
The draw function will update the koala's position to create the climbing up and down animation using sine wave motion for smooth transition.*/

let koalaY = 0;
let direction = 1;
let koalaX;
let treeWidth = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  koalaX = windowWidth / 3;
}

function draw() {
  background(135, 206, 235); // Sky blue background
  drawTree();
  drawKoala(koalaX, koalaY);
  animateKoala();
}

function drawTree() {
  // Tree trunk
  fill(139, 69, 19); // Brown color
  rect(windowWidth / 3 - treeWidth / 2, 0, treeWidth, windowHeight);
  
  // Tree leaves (simplistic form)
  fill(34, 139, 34); // Green color
  ellipse(windowWidth / 3, 80, 200, 200);
  ellipse(windowWidth / 3 - 80, 130, 200, 200);
  ellipse(windowWidth / 3 + 80, 130, 200, 200);
}

function drawKoala(x, y) {
  // Koala Head
  fill(200);
  ellipse(x, y, 60, 60); // Main head
  
  // Ears
  fill(150);
  ellipse(x - 35, y - 10, 30, 30); // Left ear
  ellipse(x + 35, y - 10, 30, 30); // Right ear
  
  // Eyes
  fill(0);
  ellipse(x - 15, y, 10, 10); // Left eye
  ellipse(x + 15, y, 10, 10); // Right eye
  
  // Nose
  fill(0);
  ellipse(x, y + 10, 15, 10); // Nose
  
  // Body
  fill(200);
  ellipse(x, y + 60, 80, 100); // Body
}

function animateKoala() {
  koalaY = windowHeight / 2 + sin(frameCount * 0.02) * (windowHeight * 0.25);
}