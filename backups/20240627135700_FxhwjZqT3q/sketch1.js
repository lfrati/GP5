/*
The sketch will depict a simple scene of a glazed donut rolling down a hill.
The donut will be represented by two ellipses (one larger with a smaller one cut out for the hole).
The hill will be a polygon.
The donut will move diagonally down the canvas and rotate to simulate rolling.*/

let x, y, angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 100;
  y = 100;
  angle = 0;
}

function draw() {
  background(135, 206, 235); // Sky blue background
  fill(34, 139, 34); // Green hill
  beginShape();
  vertex(0, windowHeight);
  vertex(0, windowHeight / 2);
  vertex(windowWidth / 2, 3 * windowHeight / 4);
  vertex(windowWidth, windowHeight / 2);
  vertex(windowWidth, windowHeight);
  endShape(CLOSE);

  push();
  translate(x, y);
  rotate(angle);
  fill(255, 223, 186); // Donut base color
  ellipse(0, 0, 100, 100);
  fill(135, 89, 60); // Donut hole color
  ellipse(0, 0, 40, 40);
  pop();

  x += 2;
  y += 1;
  angle += 0.05;

  // Reset the donut's position if it goes off-screen
  if (x > windowWidth + 50 || y > windowHeight + 50) {
    x = -50;
    y = random(50, windowHeight / 2 - 50);
  }
}