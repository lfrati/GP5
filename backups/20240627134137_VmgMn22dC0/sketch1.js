/*
This sketch visualizes a fun scenario where sentient dogs land on the moon before humans.
The drawing consists of a dog astronaut on the moon with the Earth visible in the background.
The setup function initializes the canvas size to match the browser window, and the draw function continuously renders the scene.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);  // Use degrees for easier rotational angles
}

function draw() {
  background(0);  // Space background
  drawMoon();
  drawEarth();
  drawDogAstronaut();
}

function drawMoon() {
  fill(169);
  noStroke();
  ellipse(width / 2, height + 100, width * 1.5, height * 0.7);  // Moon ellipse at bottom
}

function drawEarth() {
  fill(0, 100, 255);
  ellipse(width - 300, 200, 150, 150);  // Earth in the distance
  fill(34, 139, 34);
  ellipse(width - 290, 180, 50, 50);  // Adding a green patch as a simple landmass representation
}

function drawDogAstronaut() {
  let x = width / 2;
  let y = height - 200;

  // Helmet
  stroke(255);
  noFill();
  ellipse(x, y, 150, 150);  // Helmet circle

  // Dog’s head
  fill(160, 82, 45);
  noStroke();
  ellipse(x, y, 100, 100);  // Basic head shape

  // Ears
  triangle(x - 40, y - 20, x - 70, y - 70, x - 30, y - 60);  // Left ear
  triangle(x + 40, y - 20, x + 70, y - 70, x + 30, y - 60);  // Right ear

  // Eyes
  fill(0);
  ellipse(x - 20, y - 10, 20, 30);  // Left eye
  ellipse(x + 20, y - 10, 20, 30);  // Right eye

  // Nose
  fill(0);
  triangle(x, y + 10, x - 10, y + 30, x + 10, y + 30);  // Triangle nose

  // Body
  fill(255);
  rect(x - 30, y + 80, 60, 200, 20);  // Suit body

  // Legs
  rect(x - 30, y + 280, 20, 100, 10);  // Left leg
  rect(x + 10, y + 280, 20, 100, 10);  // Right leg

  // Arms
  rect(x - 90, y + 90, 60, 20, 10);  // Left arm
  rect(x + 30, y + 90, 60, 20, 10);  // Right arm
}