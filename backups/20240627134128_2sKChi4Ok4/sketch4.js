/*
This p5.js sketch illustrates an imaginary scenario of dogs landing on the moon.
The sketch will show a lunar surface with craters and a spacecraft adjacent to it.
There will also be a dog astronaut flag planted on the moon.
The canvas is set to the window dimensions for a proper view regardless of screen size.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(0);
  drawMoonSurface();
  drawSpacecraft();
  drawDogAstronautFlag();
}

function drawMoonSurface() {
  fill(100);
  ellipse(width/2, height, width * 1.5, height * 0.5); // moon surface ellipse
  fill(80);
  for (let i = 0; i < 5; i++) {
    let craterX = width/2 + random(-width/2, width/2);
    let craterY = height - random(height/10, height/5);
    ellipse(craterX, craterY, random(50, 100), random(20, 75)); // random craters
  }
}

function drawSpacecraft() {
  fill(150);
  rect(width/3, height/1.5, width/6, height/12); // body of the spacecraft
  fill(100);
  triangle(width/3, height/1.5, width/2.7, height/1.3, width/2.55, height/1.5); // left wing
  triangle(width/1.66, height/1.5, width/1.52, height/1.3, width/1.45, height/1.5); // right wing
  fill(255);
  ellipse(width/2, height/1.5 - 20, width/100, height/25); // top circular hatch
}

function drawDogAstronautFlag() {
  fill(255);
  rect(width/1.5, height/1.5, width/80, height/4); // flag pole
  fill(200, 0, 0); // red for the main flag color
  rect(width/1.5 + width/80, height/1.5, width/10, height/17);
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text('🐾', width/1.5 + width/20 + width/80, height/1.5 + height/34); // paw print symbol
}