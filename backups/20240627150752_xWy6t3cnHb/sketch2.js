/*
This sketch represents a whimsical scene of the moon landing with dogs instead of humans.
It includes a dog in a space helmet, planting a flag with a paw print on it, and a cratered moon surface.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drawMoon();
  drawFlag();
  drawDogAstronaut();
}

function drawMoon() {
  fill(150);
  ellipse(width / 2, height * 1.5, width * 2, height);
  fill(120);
  for (let i = 0; i < 10; i++) {
    ellipse(random(width), random(height * 0.5, height), random(50, 100), random(20, 50));
  }
}

function drawFlag() {
  stroke(255);
  strokeWeight(5);
  line(width / 2 - 50, height / 2, width / 2 - 50, height / 2 - 200);
  fill(255, 0, 0);
  noStroke();
  rect(width / 2 - 50, height / 2 - 200, 100, 60);
  fill(255);
  ellipse(width / 2 + 10, height / 2 - 170, 20, 20);
  noFill();
  stroke(255);
  strokeWeight(3);
  beginShape();
  for (let i = 0; i < 6; i++) {
    vertex(width / 2 + cos(TWO_PI * i / 6) * 10, height / 2 - 170 + sin(TWO_PI * i / 6) * 10);
  }
  endShape(CLOSE);
}

function drawDogAstronaut() {
  fill(255);
  ellipse(width / 2 + 100, height / 2 - 50, 80, 80);
  fill(139, 69, 19);
  ellipse(width / 2 + 100, height / 2 - 70, 50, 50);
  fill(255);
  ellipse(width / 2 + 90, height / 2 - 75, 10, 10);
  ellipse(width / 2 + 110, height / 2 - 75, 10, 10);
  stroke(255);
  strokeWeight(2);
  noFill();
  arc(width / 2 + 100, height / 2 - 65, 20, 20, 0, PI);
  fill(255);
  noStroke();
  beginShape();
  vertex(width / 2 + 90, height / 2 - 110);
  vertex(width / 2 + 100, height / 2 - 90);
  vertex(width / 2 + 110, height / 2 - 110);
  endShape(CLOSE);
}