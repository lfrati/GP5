/*
This p5.js sketch draws a simplistic and cute rabbit.
The rabbit consists of basic shapes like ellipses and lines to create the head, ears, eyes, nose, whiskers, and mouth.
The canvas is created to fit the full window size using windowWidth and windowHeight.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
}

function draw() {
  background(220);
  fill(255);
  // Head
  ellipse(windowWidth / 2, windowHeight / 2, 200, 250);

  // Ears
  ellipse(windowWidth / 2 - 55, windowHeight / 2 - 150, 50, 100);
  ellipse(windowWidth / 2 + 55, windowHeight / 2 - 150, 50, 100);
  fill(255, 192, 203);
  ellipse(windowWidth / 2 - 55, windowHeight / 2 - 150, 30, 70);
  ellipse(windowWidth / 2 + 55, windowHeight / 2 - 150, 30, 70);

  fill(0);
  // Eyes
  ellipse(windowWidth / 2 - 35, windowHeight / 2 - 25, 20, 20);
  ellipse(windowWidth / 2 + 35, windowHeight / 2 - 25, 20, 20);

  // Nose
  fill(255, 105, 180);
  ellipse(windowWidth / 2, windowHeight / 2, 15, 10);

  // Mouth
  stroke(0);
  strokeWeight(2);
  line(windowWidth / 2, windowHeight / 2 + 5, windowWidth / 2, windowHeight / 2 + 20);
  noFill();
  arc(windowWidth / 2 - 10, windowHeight / 2 + 20, 20, 10, 0, PI);
  arc(windowWidth / 2 + 10, windowHeight / 2 + 20, 20, 10, 0, PI);
  noStroke();

  // Whiskers
  stroke(0);
  strokeWeight(1);
  line(windowWidth / 2 - 20, windowHeight / 2, windowWidth / 2 - 60, windowHeight / 2 - 10);
  line(windowWidth / 2 - 20, windowHeight / 2 + 10, windowWidth / 2 - 60, windowHeight / 2);
  line(windowWidth / 2 + 20, windowHeight / 2, windowWidth / 2 + 60, windowHeight / 2 - 10);
  line(windowWidth / 2 + 20, windowHeight / 2 + 10, windowWidth / 2 + 60, windowHeight / 2);
  noStroke();
}