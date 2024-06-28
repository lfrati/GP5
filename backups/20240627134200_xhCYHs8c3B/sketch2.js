/*
This code creates a sketch depicting a whimsical moon landing where dogs, rather than humans, have achieved sentience and are celebrating on the moon.
The sketch includes a lunar surface, a dog astronaut, a flag with a paw print planted on the moon, and stars in the background.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // No need to loop since it's a static scene
}

function draw() {
  background(0); // Space background
  drawStars();
  drawMoonSurface();
  drawDogAstronaut();
  drawFlag();
}

function drawStars() {
  // Draw random stars in the sky
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height / 2);
    fill(255);
    noStroke();
    ellipse(x, y, 2, 2);
  }
}

function drawMoonSurface() {
  // Draw the lunar surface
  fill(200);
  noStroke();
  rect(0, height * 0.75, width, height * 0.25);
}

function drawDogAstronaut() {
  // Draw a simple dog astronaut
  let x = width * 0.5;
  let y = height * 0.75;

  // Helmet
  fill(150);
  ellipse(x, y - 50, 70, 70);
  fill(255);
  ellipse(x, y - 50, 65, 65);

  // Dog face
  fill(139, 69, 19);
  ellipse(x, y - 50, 60, 60);
  fill(255);
  ellipse(x - 15, y - 60, 10, 10);
  ellipse(x + 15, y - 60, 10, 10);
  fill(0);
  ellipse(x - 15, y - 60, 5, 5);
  ellipse(x + 15, y - 60, 5, 5);
  ellipse(x, y - 50, 10, 10);
  noFill();
  arc(x, y - 40, 20, 10, 0, PI);

  // Body
  fill(150);
  rect(x - 20, y - 30, 40, 60);
}

function drawFlag() {
  // Draw a flag with a paw print
  let x = width * 0.6;
  let y = height * 0.65;

  // Flag pole
  stroke(150);
  strokeWeight(5);
  line(x, y, x, y - 100);

  // Flag
  fill(255);
  noStroke();
  rect(x, y - 100, 60, 40);
  fill(139, 69, 19);
  ellipse(x + 30, y - 80, 30, 30);
  ellipse(x + 20, y - 90, 10, 10);
  ellipse(x + 40, y - 90, 10, 10);
  ellipse(x + 20, y - 70, 10, 10);
  ellipse(x + 40, y - 70, 10, 10);
}