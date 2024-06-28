/*
The moon landing scene will depict a dog astronaut in a space suit standing on the lunar surface with the Earth in the background.
It will include a spaceship shaped like a dog house and a paw print flag.
The p5.js sketch will create the canvas based on the window's dimensions.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drawMoon();
  drawEarth();
  drawSpaceship();
  drawDogAstronaut();
  drawFlag();
}

function drawMoon() {
  fill(100);
  ellipse(windowWidth/2, windowHeight, windowWidth, windowHeight/2);
}

function drawEarth() {
  fill(0, 0, 255);
  ellipse(windowWidth - 100, 100, 200, 200);
}

function drawSpaceship() {
  fill(139, 69, 19);
  rect(windowWidth/2 - 75, windowHeight/1.6, 150, 100);
  triangle(windowWidth/2 - 75, windowHeight/1.6, windowWidth/2, windowHeight/1.8, windowWidth/2 + 75, windowHeight/1.6);
}

function drawDogAstronaut() {
  fill(255);
  ellipse(windowWidth/2, windowHeight/1.4, 50, 50);
  rect(windowWidth/2 - 25, windowHeight/1.4, 50, 100);
  fill(240);
  ellipse(windowWidth/2, windowHeight/1.4 - 10, 40, 40);
}

function drawFlag() {
  stroke(255);
  line(windowWidth/1.5, windowHeight/1.2, windowWidth/1.5, windowHeight/1.5);
  fill(255, 0, 0);
  beginShape();
  vertex(windowWidth/1.5, windowHeight/1.5);
  vertex(windowWidth/1.5 - 50, windowHeight/1.5 - 10);
  vertex(windowWidth/1.5, windowHeight/1.5 - 20);
  endShape(CLOSE);
  noStroke();
  fill(0);
  ellipse(windowWidth/1.5 - 25, windowHeight/1.5 - 15, 20, 20);
}