/*
This sketch creates a scene where a sea urchin is cooking a pancake.
The sea urchin will have several spines radiating from its body, and it will be holding a frying pan with a pancake in it.
The background will be a simple blue gradient to evoke an underwater setting slightly.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 150, 200); // Blue gradient background for underwater feel
  drawUrchin(width / 2, height / 2);
  drawFryingPan(width / 2 + 100, height / 2);
  drawPancake(width / 2 + 100, height / 2 - 10);
}

// Function to draw a sea urchin
function drawUrchin(x, y) {
  let bodyRadius = 50;
  let spineLength = 60;
  stroke(0);
  fill(50);
  ellipse(x, y, bodyRadius * 2, bodyRadius * 2); // Urchin body
  for (let angle = 0; angle < TWO_PI; angle += PI / 8) {
    let x1 = x + cos(angle) * bodyRadius;
    let y1 = y + sin(angle) * bodyRadius;
    let x2 = x + cos(angle) * (bodyRadius + spineLength);
    let y2 = y + sin(angle) * (bodyRadius + spineLength);
    line(x1, y1, x2, y2); // Urchin spines
  }
}

// Function to draw a frying pan
function drawFryingPan(x, y) {
  fill(100);
  noStroke();
  ellipse(x, y, 120, 20); // Pan
  stroke(100);
  strokeWeight(10);
  line(x + 60, y, x + 150, y + 20); // Pan handle
}

// Function to draw a pancake
function drawPancake(x, y) {
  fill(255, 204, 0);
  noStroke();
  ellipse(x, y, 80, 20); // Pancake
}
