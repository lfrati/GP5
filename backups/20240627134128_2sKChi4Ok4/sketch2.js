/*
The p5.js sketch represents an imaginative scene where sentient dogs have landed on the moon.
The scene includes a lunar landscape, an Earth visible in the sky, and a spaceship with a flag showing a paw print to symbolize the dogs' presence.
The use of windowWidth and windowHeight ensures that the canvas resizes dynamically to the browser window.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  // Draw the moon surface
  fill(200);
  ellipse(width / 2, height, width * 1.5, height / 2);
  
  // Draw Earth in the sky
  noStroke();
  fill(100, 150, 255);
  ellipse(width / 1.2, height / 4, 100, 100);
  fill(0, 100, 0);
  ellipse(width / 1.2, height / 4, 40, 40);
  ellipse(width / 1.18, height / 4.2, 30, 20);
  
  // Draw spaceship
  fill(150);
  rect(width / 2.5, height / 2, 100, 150);
  fill(100);
  triangle(width / 2.5, height / 2, width / 2.5 + 50, height / 2 - 60, width / 2.5 + 100, height / 2);
  
  // Draw flag with paw print
  fill(255);
  rect(width / 1.8, height / 2.5, 50, 30);
  fill(0);
  ellipse(width / 1.76, height / 2.4, 10, 10);
  ellipse(width / 1.74, height / 2.41, 7, 7);
  ellipse(width / 1.78, height / 2.41, 7, 7);
  ellipse(width / 1.765, height / 2.36, 7, 7);
  ellipse(width / 1.765, height / 2.455, 7, 7);
}