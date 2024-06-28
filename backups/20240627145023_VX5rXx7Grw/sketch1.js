/*
This code will draw a simple and cute rabbit by creating various shapes.
The shapes include ellipses for the body, head, ears, and eyes, as well as lines for whiskers.
The setup function creates a canvas that uses the full window size, and the draw function creates the rabbit using these shapes.*/

function setup() { 
  createCanvas(windowWidth, windowHeight); 
  noLoop(); 
} 

function draw() { 
  background(220); 

  let centerX = width / 2; 
  let centerY = height / 2; 

  // Body 
  fill(245, 245, 245); 
  ellipse(centerX, centerY + 50, 100, 150); 

  // Head 
  ellipse(centerX, centerY, 100, 100); 

  // Ears 
  ellipse(centerX - 30, centerY - 80, 40, 100); 
  ellipse(centerX + 30, centerY - 80, 40, 100); 

  // Eyes 
  fill(0); 
  ellipse(centerX - 20, centerY - 10, 10, 20); 
  ellipse(centerX + 20, centerY - 10, 10, 20); 

  // Nose 
  fill(255, 192, 203); 
  ellipse(centerX, centerY + 10, 10, 10); 

  // Mouth 
  line(centerX - 5, centerY + 20, centerX + 5, centerY + 20); 
  line(centerX - 5, centerY + 20, centerX - 10, centerY + 30); 
  line(centerX + 5, centerY + 20, centerX + 10, centerY + 30); 

  // Whiskers 
  line(centerX - 15, centerY + 10, centerX - 50, centerY + 5); 
  line(centerX - 15, centerY + 20, centerX - 50, centerY + 25); 
  line(centerX + 15, centerY + 10, centerX + 50, centerY + 5); 
  line(centerX + 15, centerY + 20, centerX + 50, centerY + 25); 
}