/*
This p5.js sketch depicts a simple representation of a cute koala climbing a mountain.
The mountain is drawn as a large triangle, and the koala is represented with basic shapes, primarily ellipses and circles, to give it a cute appearance.
I will use the window's dimensions to set the size of the canvas and ensure the sketch is responsive.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(135, 206, 235); // Light blue for the sky
  drawMountain();
  drawKoala();
}

function drawMountain() {
  fill(139, 69, 19); // Brown color for the mountain
  triangle(0, windowHeight, windowWidth/2, windowHeight/4, windowWidth, windowHeight); 
}

function drawKoala() {
  // Koala's body
  fill(128, 128, 128); // Grey color
  ellipse(windowWidth*0.5, windowHeight*0.5, 100, 150); 
  
  // Koala's ears
  ellipse(windowWidth*0.5 - 50, windowHeight*0.4, 50, 50);
  ellipse(windowWidth*0.5 + 50, windowHeight*0.4, 50, 50);
  
  // Koala's face
  ellipse(windowWidth*0.5, windowHeight*0.45, 80, 80); 

  // Koala's eyes
  fill(0); // Black color for the eyes
  ellipse(windowWidth*0.5 - 20, windowHeight*0.45, 10, 10);
  ellipse(windowWidth*0.5 + 20, windowHeight*0.45, 10, 10);

  // Koala's nose
  fill(0); // Black color for the nose
  ellipse(windowWidth*0.5, windowHeight*0.5, 20, 30); 

  // Koala's arms
  ellipse(windowWidth*0.5 - 50, windowHeight*0.5 + 40, 30, 10);
  ellipse(windowWidth*0.5 + 50, windowHeight*0.5 + 40, 30, 10);
}
