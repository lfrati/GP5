/*
In this sketch, I'm going to create a simple representation of the moon landing, but with dogs instead of humans.
The sketch will show the moon's surface, a dog astronaut with a flag, and some details like stars to give it a space vibe.
The canvas will be set to windowWidth and windowHeight to adapt to different screen sizes.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0); // Space background
  drawStars();
  drawMoonSurface();
  drawDogAstronaut();
}

function drawStars() {
  fill(255);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height * 0.8); // Limit stars to upper 80% of the canvas
    ellipse(x, y, 2, 2);
  }
}

function drawMoonSurface() {
  fill(150);
  noStroke();
  ellipse(width / 2, height * 1.2, width * 1.5, height * 0.5); // Big ellipse for the moon surface
}

function drawDogAstronaut() {
  // Dog body
  fill(139, 69, 19); // Brown color
  ellipse(width / 2, height * 0.7, 50, 80);

  // Dog head
  ellipse(width / 2, height * 0.63, 50, 50);
  fill(0);
  ellipse(width / 2 - 10, height * 0.63 - 10, 8, 8); // Left eye
  ellipse(width / 2 + 10, height * 0.63 - 10, 8, 8); // Right eye
  ellipse(width / 2, height * 0.63 + 10, 10, 5); // Nose

  // Dog ears
  fill(139, 69, 19); // Same brown color
  triangle(width / 2 - 25, height * 0.63 - 20, width / 2 - 15, height * 0.63, width / 2 - 35, height * 0.63);
  triangle(width / 2 + 25, height * 0.63 - 20, width / 2 + 15, height * 0.63, width / 2 + 35, height * 0.63);

  // Flag
  stroke(255);
  strokeWeight(5);
  line(width / 2 + 25, height * 0.7 - 40, width / 2 + 25, height * 0.7 - 100);
  fill(255, 0, 0);
  noStroke();
  rect(width / 2 + 25, height * 0.7 - 100, 30, 20);
}