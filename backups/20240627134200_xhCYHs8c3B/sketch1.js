/*
To create a p5.js sketch depicting the moon landing with sentient dogs, we will design an image that includes a lunar surface, a dog astronaut, and a dog paw print flag.
We'll set up the canvas to fit the window size and draw these elements creatively.
Here the dog astronaut is depicted as a cartoonish character with a visible helmet and suit.
The flag will be a simple dog paw print to signify their presence on the moon.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); // Space background
  drawMoonSurface();
  drawDogAstronaut(width / 2, height / 2);
  drawFlag(width / 2 + 200, height / 2);
}

function drawMoonSurface() {
  fill(169, 169, 169); // Moon-grey color
  arc(width / 2, height, width, height / 2, PI, TWO_PI);
}

function drawDogAstronaut(x, y) {
  fill(255); // Spacesuit white
  ellipse(x, y, 100, 150); // Body

  fill(160, 160, 160); // Helmet grey
  ellipse(x, y - 70, 90, 90); // Helmet

  fill(255, 192, 203); // Dog's face color (light pink)
  ellipse(x, y - 70, 60, 60); // Face

  fill(0); // Black for eyes and nose
  ellipse(x - 10, y - 75, 8, 8); // Left eye
  ellipse(x + 10, y - 75, 8, 8); // Right eye
  ellipse(x, y - 60, 10, 10); // Nose
  line(x, y - 55, x, y - 45); // Mouth (vertical)
  line(x - 5, y - 48, x + 5, y - 48); // Mouth (horizontal)
}

function drawFlag(x, y) {
  fill(255); // White flag color
  rect(x, y - 100, 60, 40); 

  fill(0); // Black for paw print
  ellipse(x + 30, y - 80, 10, 10); // Paw center
  ellipse(x + 25, y - 85, 7, 7); // Paw top left
  ellipse(x + 35, y - 85, 7, 7); // Paw top right
  ellipse(x + 30, y - 75, 7, 7); // Paw bottom
  rect(x, y - 100, 5, 100); // Flag pole
}
