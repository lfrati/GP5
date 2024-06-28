/*
This sketch envisions a moon-landing scenario where dogs achieved sentience before humans.
It depicts a dog in a spacesuit standing proudly on the moon's surface with a paw-flag planted on the ground.
The Earth is visible in the background.
The canvas size is determined by the window's width and height, and the draw loop updates the positions in a simple animated sketch.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drawMoon();
  drawEarth();
  drawDog();
  drawFlag();
}

function drawMoon() {
  fill(120);
  noStroke();
  ellipse(width / 2, height, width * 2, height);
}

function drawEarth() {
  fill(50, 150, 250);
  noStroke();
  ellipse(width * 0.8, height * 0.2, 100, 100);
  fill(35, 105, 170);
  ellipse(width * 0.8, height * 0.2, 80, 80);
}

function drawDog() {
  fill(200, 150, 100);
  ellipse(width / 2 - 50, height / 2 + 100, 50, 80); // body
  ellipse(width / 2 - 50, height / 2 + 60, 40, 40); // head
  rect(width / 2 - 55, height / 2 + 150, 10, 50); // left leg
  rect(width / 2 - 45, height / 2 + 150, 10, 50); // right leg
  rect(width / 2 - 70, height / 2 + 80, 15, 10); // left arm
  rect(width / 2 - 30, height / 2 + 80, 15, 10); // right arm
  fill(255);
  ellipse(width / 2 - 50, height / 2 + 40, 60, 60); // helmet
}

function drawFlag() {
  fill(150);
  rect(width / 2 + 20, height / 2 + 40, 5, 100); // flagpole
  fill(200, 0, 0);
  beginShape();
  vertex(width / 2 + 25, height / 2 + 40);
  vertex(width / 2 + 25, height / 2 + 80);
  vertex(width / 2 + 65, height / 2 + 60);
  endShape(CLOSE); // flag
}