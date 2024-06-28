/*
This sketch depicts a playful yet monumental scene of the moon landing where dogs, instead of humans, first set foot on the moon.
The canvas is set to the window's dimensions.
The background is a starry sky, and there is a surface representing the moon.
We'll have a cartoonish dog astronaut and a flag with a paw print planted on the moon's surface.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0);
  drawStars();
  drawMoonSurface();
  drawDogAstronaut();
  drawFlag();
}

function drawStars() {
  for (let i = 0; i < 100; i++) {
    fill(255);
    let x = random(width);
    let y = random(height / 2);
    ellipse(x, y, 2, 2);
  }
}

function drawMoonSurface() {
  fill(169, 169, 169);
  rect(0, height * 0.6, width, height * 0.4); // Moon surface
}

function drawDogAstronaut() {
  fill(139, 69, 19);
  ellipse(width * 0.5, height * 0.55, 100, 100); // Dog's face
  fill(255);
  ellipse(width * 0.5, height * 0.45, 80, 80); // Helmet
  fill(0);
  ellipse(width * 0.48, height * 0.55, 15, 15); // Left eye
  ellipse(width * 0.52, height * 0.55, 15, 15); // Right eye
  stroke(139, 69, 19);
  strokeWeight(10);
  line(width * 0.5, height * 0.58, width * 0.5, height * 0.65); // Snout
  noStroke();
}

function drawFlag() {
  fill(255, 0, 0);
  rect(width * 0.7, height * 0.4, 70, 40); // Flag
  fill(255);
  ellipse(width * 0.735, height * 0.42, 30, 30); // Paw print white part
  fill(0);
  ellipse(width * 0.735, height * 0.42, 10, 10); // Paw print black part
  rect(width * 0.73, height * 0.45, 10, 10); // Paw print toe
  fill(255);
  rect(width * 0.698, height * 0.45, 2, 120); // Flagpole
}