/*
This p5.js sketch will draw a cute, happy rabbit with basic shapes like ellipses and rectangles.
The rabbit has big ears, eyes, a cute nose, whiskers, and a smiling mouth.
The setup function initializes the canvas, and the draw function creates the rabbit using various p5.js drawing functions.*/

function setup() { 
  createCanvas(windowWidth, windowHeight); 
  noLoop(); 
  background(255); 
} 

function draw() { 
  noStroke(); 

  // Draw rabbit ears 
  fill(200, 150, 150); 
  ellipse(width / 2 - 50, height / 2 - 150, 40, 100); 
  ellipse(width / 2 + 50, height / 2 - 150, 40, 100); 

  // Draw rabbit's head 
  fill(255); 
  ellipse(width / 2, height / 2, 150, 150); 

  // Draw rabbit's eyes 
  fill(0); 
  ellipse(width / 2 - 30, height / 2 - 20, 20, 30); 
  ellipse(width / 2 + 30, height / 2 - 20, 20, 30); 

  // Draw rabbit's nose 
  fill(255, 150, 150); 
  ellipse(width / 2, height / 2 + 20, 20, 20); 

  // Draw rabbit's mouth 
  noFill(); 
  stroke(0); 
  strokeWeight(2); 
  arc(width / 2, height / 2 + 35, 50, 30, 0, PI); 

  // Draw rabbit's whiskers 
  line(width / 2 - 40, height / 2 + 20, width / 2 - 80, height / 2 + 10); 
  line(width / 2 - 40, height / 2 + 25, width / 2 - 80, height / 2 + 20); 
  line(width / 2 + 40, height / 2 + 20, width / 2 + 80, height / 2 + 10); 
  line(width / 2 + 40, height / 2 + 25, width / 2 + 80, height / 2 + 20); 
}