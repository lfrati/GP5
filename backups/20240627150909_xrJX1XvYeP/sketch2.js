/*
In this sketch, I'll create a scene representing a moon landing, but with dogs as the astronauts.
The scene will show the moon surface with a dog astronaut stepping onto it and a spaceship in the background.
I will use simplified shapes and cartoon-like figures to represent the elements of the scene.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0); // Space

  // Moon surface
  fill(200);
  ellipse(width / 2, height, width * 1.5, height / 2);

  // Spaceship
  fill(150);
  rect(width * 0.7, height * 0.35, 100, 200);
  fill(255, 0, 0);
  triangle(width * 0.75, height * 0.35, width * 0.65, height * 0.55, width * 0.85, height * 0.55);

  // Dog astronaut
  fill(255, 230, 200); // Dog's body
  ellipse(width * 0.3, height * 0.7, 50, 70);
  fill(0); // Dog's eyes
  ellipse(width * 0.3 - 10, height * 0.7 - 10, 10, 10);
  ellipse(width * 0.3 + 10, height * 0.7 - 10, 10, 10);
  fill(200); // Astronaut helmet
  ellipse(width * 0.3, height * 0.7, 70, 90);

  // Flag
  fill(255, 0, 0);
  rect(width * 0.35, height * 0.55, 60, 40);
  fill(150);
  rect(width * 0.34, height * 0.55, 5, 100);
}