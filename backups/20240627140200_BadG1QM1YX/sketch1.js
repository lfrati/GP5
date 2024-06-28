/*
This sketch will draw a sea urchin-like creature lifting weights.
To represent the sea urchin, we'll use a circular body with several spikes.
We'll add dumbbells to give the appearance that it is lifting weights.
The sketch will attempt to animate the lifting motion to show the urchin getting 'jacked'.*/


let angle = 0; // Starting angle for lifting animation

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 150, 255); // Blue background to represent the sea
  translate(width / 2, height / 2);
  noStroke();

  // Draw the sea urchin body
  fill(100, 100, 100);
  ellipse(0, 0, 100, 100);
  
  // Draw the spikes
  for (let i = 0; i < 16; i++) {
    let x = cos(TWO_PI / 16 * i) * 70;
    let y = sin(TWO_PI / 16 * i) * 70;
    push();
    translate(x, y);
    fill(50, 50, 50);
    triangle(-5, -5, 5, -5, 0, -50);
    pop();
  }
  
  // Draw the dumbbells
  fill(150);
  let dumbbellLength = 100;
  let dumbbellHeight = 10;
  let liftingHeight = sin(angle) * 20; // Generate lifting motion

  // Left dumbbell
  push();
  translate(-70, liftingHeight);
  rect(-dumbbellLength / 2, -dumbbellHeight / 2, dumbbellLength, dumbbellHeight);
  pop();
  
  // Right dumbbell
  push();
  translate(70, liftingHeight);
  rect(-dumbbellLength / 2, -dumbbellHeight / 2, dumbbellLength, dumbbellHeight);
  pop();

  // Update angle for the animation
  angle += 0.05;
}
