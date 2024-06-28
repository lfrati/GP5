/*
In this sketch, we will illustrate a sea urchin lifting a dumbbell in a scene designed to give the impression that it's getting jacked.
We'll use basic shapes to represent the sea urchin and the dumbbell.
We'll animate the 'lifting' motion by rotating the arm holding the dumbbell.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220, 240, 255);
  let centerX = windowWidth / 2;
  let centerY = windowHeight / 2;
  let radius = 50;
  let armLength = 100;
  let liftAngle = sin(frameCount * 2) * 45;

  // Draw sea urchin body
  fill(100, 50, 150);
  ellipse(centerX, centerY, radius * 2);

  // Draw sea urchin spikes
  for (let angle = 0; angle < 360; angle += 30) {
    let x1 = centerX + cos(angle) * radius;
    let y1 = centerY + sin(angle) * radius;
    let x2 = centerX + cos(angle) * (radius + 20);
    let y2 = centerY + sin(angle) * (radius + 20);
    stroke(100, 50, 150);
    line(x1, y1, x2, y2);
  }

  // Draw sea urchin's arm
  let armX = centerX + cos(270) * radius;
  let armY = centerY + sin(270) * radius;
  push();
  translate(armX, armY);
  rotate(liftAngle);
  stroke(50, 25, 75);
  strokeWeight(10);
  line(0, 0, 0, -armLength);

  // Draw dumbbell
  fill(0);
  rect(-10, -armLength - 10, 20, 20);
  pop();
}