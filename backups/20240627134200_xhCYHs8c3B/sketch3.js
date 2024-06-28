/*
In this p5.js sketch, I will illustrate an imaginative scene of the moon landing, imagining that sentient dogs accomplished this feat.
The scene will feature a lunar landscape, a spaceship with a paw print flag, and a suit-wearing dog stepping onto the moon.
I will ensure the canvas adapts to the size of the window using windowWidth and windowHeight.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);  // Space background.
  drawMoonLandscape();
  drawSpaceship();
  drawAstronautDog();
  drawFlag();
}

function drawMoonLandscape() {
  fill(169, 169, 169);  // Moon surface color.
  noStroke();
  ellipse(width/2, height * 1.1, width * 2, height * 0.6);
}

function drawSpaceship() {
  fill(192, 192, 192);  // Spaceship color
  rect(width * 0.7, height * 0.5, width * 0.1, height * 0.15);
}

function drawFlag() {
  stroke(255);
  strokeWeight(4);
  line(width * 0.75, height * 0.5, width * 0.75, height * 0.35);  // Flagpole
  fill(255, 0, 0);
  noStroke();
  rect(width * 0.75, height * 0.35, width * 0.05, height * 0.05);  // Flag
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text('🐾', width * 0.775, height * 0.375);  // Paw print symbol.
}

function drawAstronautDog() {
  fill(255);
  ellipse(width * 0.6, height * 0.6, width * 0.05, height * 0.1);  // Dog helmet.
  fill(139, 69, 19);
  ellipse(width * 0.6, height * 0.63, width * 0.045, height * 0.09);  // Head.
  fill(255);
  rect(width * 0.59, height * 0.68, width * 0.02, height * 0.04);  // Body.
  fill(139, 69, 19);
  ellipse(width * 0.595, height * 0.73, width * 0.01, height * 0.02);  // Front paw.
  ellipse(width * 0.605, height * 0.73, width * 0.01, height * 0.02);  // Back paw.
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}