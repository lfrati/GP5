/*
This p5.js sketch aims to illustrate a whimsical scene where sentient dogs are experiencing a moon landing.
The sketch includes the moon's surface with a dog astronaut planting a flag.
The setup() function creates a canvas of the same size as the window.
The draw() function depicts the moon's surface, a dog astronaut, a flag, and some stars in the sky to complete the scene.
This artistic representation assumes a cartoonish style for simplicity.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); // Space is black
  drawMoonSurface();
  drawDogAstronaut();
  drawFlag();
  drawStars();
}

function drawMoonSurface() {
  fill(200);
  noStroke();
  ellipse(windowWidth / 2, windowHeight, windowWidth * 1.5, windowHeight / 2);
}

function drawDogAstronaut() {
  // Body
  fill(150);
  ellipse(windowWidth / 2, windowHeight - 150, 80, 100);
  // Head
  fill(255);
  ellipse(windowWidth / 2, windowHeight - 220, 60, 60);
  // Helmet
  noFill();
  stroke(255);
  ellipse(windowWidth / 2, windowHeight - 220, 70, 70);
  // Eyes
  fill(0);
  ellipse(windowWidth / 2 - 15, windowHeight - 230, 10, 10);
  ellipse(windowWidth / 2 + 15, windowHeight - 230, 10, 10);
  // Ears
  fill(150);
  triangle(windowWidth / 2 - 30, windowHeight - 240, windowWidth / 2 - 40, windowHeight - 260, windowWidth / 2 - 25, windowHeight - 250);
  triangle(windowWidth / 2 + 30, windowHeight - 240, windowWidth / 2 + 40, windowHeight - 260, windowWidth / 2 + 25, windowHeight - 250);
  // Legs
  fill(150);
  rect(windowWidth / 2 - 30, windowHeight - 100, 15, 50);
  rect(windowWidth / 2 + 15, windowHeight - 100, 15, 50);
}

function drawFlag() {
  // Pole
  stroke(255);
  line(windowWidth / 2 + 60, windowHeight - 150, windowWidth / 2 + 60, windowHeight - 250);
  // Flag
  fill(255, 0, 0);
  rect(windowWidth / 2 + 60, windowHeight - 250, 50, 30);
  // Paw print on the flag
  fill(255);
  ellipse(windowWidth / 2 + 85, windowHeight - 235, 10, 10);
  ellipse(windowWidth / 2 + 80, windowHeight - 240, 5, 5);
  ellipse(windowWidth / 2 + 90, windowHeight - 240, 5, 5);
  ellipse(windowWidth / 2 + 75, windowHeight - 235, 5, 5);
  ellipse(windowWidth / 2 + 95, windowHeight - 235, 5, 5);
}

function drawStars() {
  fill(255);
  noStroke();
  for (let i = 0; i < 100; i++) {
    ellipse(random(windowWidth), random(windowHeight / 2), 2, 2);
  }
}
