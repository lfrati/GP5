/*
This p5.js sketch creates a cute rabbit face using simple shapes such as ellipses and circles.
The code uses the windowWidth and windowHeight to center the rabbit face on the canvas, ensuring it adapts to the window size.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(255);
  drawRabbit();
}

function drawRabbit() {
  let centerX = windowWidth / 2;
  let centerY = windowHeight / 2;
  let faceSize = min(windowWidth, windowHeight) / 3;
  let earWidth = faceSize / 3;
  let earHeight = faceSize * 1.5;
  let eyeSize = faceSize / 10;
  let noseSize = faceSize / 15;
  let mouthWidth = faceSize / 5;
  let mouthHeight = faceSize / 10;

  // Ears
  fill(255);
  ellipse(centerX - earWidth, centerY - earHeight * 1.2, earWidth, earHeight);
  ellipse(centerX + earWidth, centerY - earHeight * 1.2, earWidth, earHeight);
  fill(255, 192, 203);
  ellipse(centerX - earWidth, centerY - earHeight * 1.2, earWidth / 2, earHeight);
  ellipse(centerX + earWidth, centerY - earHeight * 1.2, earWidth / 2, earHeight);

  // Face
  fill(255);
  ellipse(centerX, centerY, faceSize, faceSize);

  // Eyes
  fill(0);
  ellipse(centerX - faceSize / 5, centerY - faceSize / 10, eyeSize, eyeSize);
  ellipse(centerX + faceSize / 5, centerY - faceSize / 10, eyeSize, eyeSize);

  // Nose
  fill(255, 105, 180);
  ellipse(centerX, centerY + eyeSize, noseSize, noseSize);

  // Mouth
  noFill();
  stroke(255, 105, 180);
  strokeWeight(2);
  arc(centerX - mouthWidth / 4, centerY + eyeSize * 1.5, mouthWidth / 2, mouthHeight, 0, PI);
  arc(centerX + mouthWidth / 4, centerY + eyeSize * 1.5, mouthWidth / 2, mouthHeight, 0, PI);
}