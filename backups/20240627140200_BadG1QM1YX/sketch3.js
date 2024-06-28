/*
In this p5.js sketch, we will draw a sea urchin lifting weights.
The sea urchin will be represented by a central circle with spikes radiating outwards.
The weights will be represented by rectangles at the ends of a barbell held by stick-like arms extending from the sea urchin.
The 'pumping iron' motion will be shown by moving the barbell up and down repetitively.
The canvas will be sized to windowWidth and windowHeight.*/

let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220, 240, 255);
  translate(width/2, height/2);
  drawUrchin();
  drawArmsAndWeights();
  angle += 2;
}

function drawUrchin() {
  stroke(0);
  fill(100, 100, 255);
  ellipse(0, 0, 100, 100);
  for (let i = 0; i < 360; i += 15) {
    let x = cos(i) * 75;
    let y = sin(i) * 75;
    let x2 = cos(i) * 50;
    let y2 = sin(i) * 50;
    line(x2, y2, x, y);
  }
}

function drawArmsAndWeights() {
  let armLength = 100;
  let barbellY = sin(angle) * 30;

  strokeWeight(8);
  stroke(255, 200, 200);
  line(-50, 0, cos(angle) * armLength, barbellY);
  line(50, 0, cos(angle) * armLength, barbellY);

  strokeWeight(2);
  fill(200, 50, 50);
  rect(cos(angle) * armLength - 50, barbellY - 10, 20, 20);
  rect(cos(angle) * armLength + 30, barbellY - 10, 20, 20);
}