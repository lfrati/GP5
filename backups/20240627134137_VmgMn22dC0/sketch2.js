/*
This sketch illustrates an alternate history scene where sentient dogs have landed on the moon before humans.
The sketch will show a space-landing site on the moon, with a lunar module, a dog astronaut planting a flag, and Earth's blue glow in the background.
The canvas is set to the size of the browser window, ensuring full visibility on any device.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drawMoonSurface();
  drawEarth();
  drawLunarModule();
  drawDogAstronaut();
}

function drawMoonSurface() {
  fill(169, 169, 169);
  noStroke();
  beginShape();
  vertex(0, windowHeight);
  vertex(windowWidth, windowHeight);
  vertex(windowWidth, windowHeight * 0.6);
  vertex(0, windowHeight * 0.6);
  endShape(CLOSE);
}

function drawEarth() {
  fill(0, 0, 255);
  ellipse(windowWidth * 0.75, windowHeight * 0.2, 100, 100);
}

function drawLunarModule() {
  fill(200);
  rect(windowWidth * 0.4, windowHeight * 0.65, 80, 100);
  fill(150);
  ellipse(windowWidth * 0.44, windowHeight * 0.65, 40, 20);
  ellipse(windowWidth * 0.56, windowHeight * 0.65, 40, 20);
  fill(100);
  ellipse(windowWidth * 0.5, windowHeight * 0.7, 80, 40);
}

function drawDogAstronaut() {
  fill(139, 69, 19);
  ellipse(windowWidth * 0.6, windowHeight * 0.6, 30, 50); // body
  fill(255);
  ellipse(windowWidth * 0.6, windowHeight * 0.55, 30, 30); // helmet
  fill(0);
  ellipse(windowWidth * 0.595, windowHeight * 0.55, 5, 5); // eye
  fill(255, 0, 0);
  rect(windowWidth * 0.61, windowHeight * 0.58, 2, 30); // flag pole
  fill(0);
  rect(windowWidth * 0.612, windowHeight * 0.58, 20, 10); // flag
}