/*
The sketch draws a cute and happy rabbit using basic shapes.
The rabbit's face is composed of ellipses for the head and ears, circles for the eyes, and a semi-circle for the mouth.
The canvas is created to fit the window dimensions using windowWidth and windowHeight.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Static drawing, so no need to loop
}

function draw() {
  background(255);

  // Rabbit's face
  let centerX = windowWidth / 2;
  let centerY = windowHeight / 2;
  let faceSize = min(windowWidth, windowHeight) / 4; // Face size relative to the canvas

  // Ears
  let earWidth = faceSize / 3;
  let earHeight = faceSize * 1.5;
  fill(250, 230, 210);
  ellipse(centerX - faceSize / 3, centerY - earHeight / 2, earWidth, earHeight);
  ellipse(centerX + faceSize / 3, centerY - earHeight / 2, earWidth, earHeight);

  // Head
  fill(255, 240, 220);
  ellipse(centerX, centerY, faceSize, faceSize);

  // Eyes
  fill(0);
  let eyeSize = faceSize / 10;
  ellipse(centerX - faceSize / 6, centerY - faceSize / 8, eyeSize, eyeSize);
  ellipse(centerX + faceSize / 6, centerY - faceSize / 8, eyeSize, eyeSize);

  // Mouth
  fill(255, 140, 140);
  arc(centerX, centerY + faceSize / 8, faceSize / 4, faceSize / 4, 0, PI);

  // Nose
  fill(255, 100, 100);
  triangle(centerX, centerY - faceSize / 20, centerX - eyeSize / 2, centerY + eyeSize / 2, centerX + eyeSize / 2, centerY + eyeSize / 2);
}