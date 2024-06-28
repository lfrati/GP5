/*
To illustrate a sea urchin pumping iron and getting super jacked, I will create a simple animated sketch.
The sea urchin will be represented by a circle with spikes, and it will have anthropomorphic arms lifting dumbbells.
The dumbbells will move up and down to simulate lifting.
The sea urchin will also gradually 'puff up' to look more muscular over time.*/

let timer = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220, 230, 250);
  drawSeaUrchin(width/2, height/2, 100 + sin(timer) * 10); // Sea urchin grows and shrinks
  drawDumbbells(width/2, height/2);
  timer += 0.05;
}

function drawSeaUrchin(x, y, size) {
  stroke(0);
  fill(100, 150, 200);
  ellipse(x, y, size);
  for (let i = 0; i < TWO_PI; i += PI/8) {
    let xOffset = cos(i) * size * 1.2;
    let yOffset = sin(i) * size * 1.2;
    line(x, y, x + xOffset, y + yOffset);
  }
}

function drawDumbbells(x, y) {
  let delta = sin(timer * 3) * 20; // Movement of the dumbbells
  let armLength = 100;
  let handSize = 20;
  let dumbbellSize = 40;
  stroke(0);
  fill(150);
  // Left arm
  line(x - 60, y, x - 60 - armLength, y - delta);
  ellipse(x - 60 - armLength, y - delta, handSize);
  rect(x - 60 - armLength - dumbbellSize/2, y - delta - 10, dumbbellSize, 20);
  // Right arm
  line(x + 60, y, x + 60 + armLength, y - delta);
  ellipse(x + 60 + armLength, y - delta, handSize);
  rect(x + 60 + armLength - dumbbellSize/2, y - delta - 10, dumbbellSize, 20);
}