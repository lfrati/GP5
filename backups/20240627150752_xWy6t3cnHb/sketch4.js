/*
This sketch represents a whimsical scene of a dog astronaut landing on the moon.
The canvas is set to windowWidth and windowHeight to fill the browser window.
A simple dog with a space helmet is drawn on a moon-like surface, with stars in the background to signify space.
The setup() function defines the canvas size and background setup, while draw() handles the scene rendering.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
  // Draw stars in the background
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 3);
    fill('white');
    noStroke();
    ellipse(x, y, size, size);
  }
  
  // Draw the moon surface
  fill(200);
  noStroke();
  ellipse(width / 2, height, width, height / 2);
}

function draw() {
  // Draw the dog astronaut
  let dogX = width / 2;
  let dogY = height - 150;
  
  // Draw the body
  fill('brown');
  rect(dogX - 20, dogY, 40, 50);
  
  // Draw the legs
  rect(dogX - 20, dogY + 50, 10, 30);
  rect(dogX + 10, dogY + 50, 10, 30);
  
  // Draw the head
  fill('brown');
  ellipse(dogX, dogY - 30, 40, 40);
  
  // Draw the ears
  triangle(dogX - 20, dogY - 40, dogX - 10, dogY - 50, dogX - 5, dogY - 30);
  triangle(dogX + 20, dogY - 40, dogX + 10, dogY - 50, dogX + 5, dogY - 30);
  
  // Draw the helmet
  noFill();
  stroke('white');
  strokeWeight(4);
  arc(dogX, dogY - 30, 60, 60, PI, 0);
  
  // Draw the tail
  noStroke();
  fill('brown');
  beginShape();
  vertex(dogX - 25, dogY + 30);
  bezierVertex(dogX - 35, dogY + 20, dogX - 40, dogY + 40, dogX - 25, dogY + 40);
  endShape();
}