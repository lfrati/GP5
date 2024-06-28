/*
This p5.js sketch depicts a sea urchin cooking a pancake.
A basic representation is created using simple shapes.
The sea urchin is drawn with a series of lines radiating from its center, and a face is added to give it character.
The pancake is represented by an ellipse, and the scene is set up to suggest the activity of cooking.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(255, 255, 204);
  let centerX = windowWidth / 2;
  let centerY = windowHeight / 2;
  let radius = 100;

  // Draw the sea urchin body
  fill(200, 100, 100);
  ellipse(centerX, centerY, radius * 2);

  // Draw the sea urchin spikes
  stroke(0);
  strokeWeight(2);
  for (let angle = 0; angle < 360; angle += 15) {
    let x = centerX + cos(angle) * radius;
    let y = centerY + sin(angle) * radius;
    let spikeLength = random(20, 50);
    let spikeX = centerX + cos(angle) * (radius + spikeLength);
    let spikeY = centerY + sin(angle) * (radius + spikeLength);
    line(centerX, centerY, spikeX, spikeY);
  }

  // Draw sea urchin eyes
  fill(0);
  let eyeOffset = 30;
  ellipse(centerX - eyeOffset, centerY - eyeOffset, 10);
  ellipse(centerX + eyeOffset, centerY - eyeOffset, 10);

  // Draw a smiling mouth
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(centerX, centerY + 25, 50, 20, 0, 180);

  // Draw the pancake in a pan
  fill(255, 204, 0);
  let pancakeX = centerX + 150;
  let pancakeY = centerY + 80;
  ellipse(pancakeX, pancakeY, 100, 20);

  // Draw the pan
  stroke(50);
  strokeWeight(5);
  noFill();
  ellipse(pancakeX, pancakeY, 120, 40);
  line(pancakeX + 60, pancakeY, pancakeX + 120, pancakeY + 20);

  // Draw the sea urchin's spike holding a spatula
  stroke(0);
  strokeWeight(2);
  let angle = -30;
  let spatulaX = centerX + cos(angle) * (radius + 60);
  let spatulaY = centerY + sin(angle) * (radius + 60);
  line(centerX, centerY, spatulaX, spatulaY);

  // Draw the spatula handle
  strokeWeight(5);
  line(spatulaX, spatulaY, pancakeX - 20, pancakeY - 40);

  // Draw the spatula head
  strokeWeight(2);
  fill(150);
  rect(pancakeX - 30, pancakeY - 45, 20, 5);
}