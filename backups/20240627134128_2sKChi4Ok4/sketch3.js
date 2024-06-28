/*
This sketch represents the moon landing, depicting dogs as the astronauts who have reached sentience before humans.
It shows a dog in a space suit on the moon’s surface, a lunar module, and Earth in the background.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0);
  drawMoonSurface();
  drawEarth();
  drawLunarModule();
  drawDogAstronaut();
}

function drawMoonSurface() {
  fill(100);
  noStroke();
  ellipse(width / 2, height * 0.85, width * 1.5, height * 0.3);
}

function drawEarth() {
  fill(100, 140, 240);
  noStroke();
  ellipse(width * 0.8, height * 0.2, width * 0.2, width * 0.2);
}

function drawLunarModule() {
  fill(150);
  rect(width * 0.5 - 50, height * 0.65, 100, 100);
  fill(100);
  rect(width * 0.5 - 60, height * 0.75, 20, 50);
  rect(width * 0.5 + 40, height * 0.75, 20, 50);
}

function drawDogAstronaut() {
  fill(255);
  ellipse(width * 0.5 - 20, height * 0.77 - 60, 60, 60); // Helmet
  fill(160);
  rect(width * 0.5 - 50, height * 0.75, 60, 80); // Suit
  fill(0);
  ellipse(width * 0.5 - 20, height * 0.77 - 60, 50, 50); // Face space
  fill(100);
  ellipse(width * 0.5 - 20, height * 0.77 - 60, 40, 40); // Dog face
  fill(0);
  ellipse(width * 0.5 - 30, height * 0.77 - 70, 10, 10); // Left eye
  ellipse(width * 0.5 - 10, height * 0.77 - 70, 10, 10); // Right eye
  ellipse(width * 0.5 - 20, height * 0.77 - 50, 10, 10); // Nose
}