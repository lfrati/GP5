/*
This sketch draws a cute, happy rabbit.
The rabbit consists of several shapes including ellipses for the body and head, circles for the eyes, and curves for the mouth and ears.
The use of different colors and stroke weights helps define the features of the rabbit.
The canvas is created using windowWidth and windowHeight to be responsive to the window size.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  background(220); // To clear previous drawings and avoid trails

  // Translate to center
  translate(width / 2, height / 2);

  // Draw body
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, 50, 100, 150);

  // Draw head
  ellipse(0, -40, 100, 100);

  // Draw ears
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(-30, -90, 30, 80);
  ellipse(30, -90, 30, 80);

  // Inner ears
  fill(255, 192, 203);
  noStroke();
  ellipse(-30, -90, 20, 60);
  ellipse(30, -90, 20, 60);

  // Draw eyes
  fill(0);
  ellipse(-20, -50, 10, 10);
  ellipse(20, -50, 10, 10);

  // Draw nose
  fill(255, 0, 0);
  ellipse(0, -40, 10, 10);

  // Draw mouth
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(-10, -30, 20, 20, 0, PI); // Left part of mouth
  arc(10, -30, 20, 20, 0, PI); // Right part of mouth

  // Draw whiskers
  stroke(0);
  strokeWeight(1);
  line(-20, -30, -40, -25);
  line(-20, -35, -40, -35);
  line(-20, -40, -40, -45);
  line(20, -30, 40, -25);
  line(20, -35, 40, -35);
  line(20, -40, 40, -45);

  // Draw cheeks
  fill(255, 182, 193);
  noStroke();
  ellipse(-25, -35, 10, 10);
  ellipse(25, -35, 10, 10);

  noLoop(); // Stop the draw loop
}