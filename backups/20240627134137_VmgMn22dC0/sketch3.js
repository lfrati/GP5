/*
To depict a moon landing where sentient dogs reached the moon before humans, I'll create a visual scenario.
The scene will include a spacecraft, a banner with paw prints, an astronaut dog, and a backdrop of the moon's surface with a distant Earth in the sky.
I'll use different p5.js shapes and images to build this scene for better storytelling.*/

function preload() {
  dogImg = loadImage('https://i.imgur.com/U1ZIE1X.png');  // Placeholder image URL: needs to be replaced with an actual astronaut dog image
  pawPrintFlag = loadImage('https://i.imgur.com/vVHT7NAP.png');  // Placeholder image URL: needs to be replaced with an actual paw print flag image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drawMoonSurface();
  drawSpacecraft();
  drawDogAstronaut();
  drawPawPrintFlag();
  drawEarth();
}

function drawMoonSurface() {
  noStroke();
  fill(100);
  rect(0, height * 0.75, width, height * 0.25);  // Draw moon surface
}

function drawSpacecraft() {
  fill(200);
  ellipse(width * 0.25, height * 0.75, 150, 300);  // Draw spacecraft body
  fill(150);
  ellipse(width * 0.25, height * 0.60, 100, 200);  // Draw spacecraft window
}

function drawDogAstronaut() {
  image(dogImg, width * 0.5 - 50, height * 0.75 - 100, 100, 100);  // Draw dog astronaut
}

function drawPawPrintFlag() {
  fill(255);
  rect(width * 0.75 - 5, height * 0.75 - 150, 10, 150);  // Draw flagpole
  image(pawPrintFlag, width * 0.75 - 50, height * 0.75 - 225, 100, 75);  // Draw flag with paw prints
}

function drawEarth() {
  fill(0, 0, 255);
  ellipse(width * 0.8, height * 0.2, 80, 80);  // Draw distant Earth
}