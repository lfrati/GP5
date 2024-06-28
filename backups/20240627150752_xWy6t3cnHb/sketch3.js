/*
In this p5.js sketch, I'll depict an alternate history where sentient dogs performed the moon landing.
I'll create a simple scene with a rocket on the moon's surface, a few dog astronauts, and the Earth in the background.
The canvas will adjust to the window size using windowWidth and windowHeight.*/

let dogAstronauts = [];
let rocket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rocket = new Rocket(windowWidth / 2, windowHeight / 2);
  for (let i = 0; i < 3; i++) {
    dogAstronauts.push(new DogAstronaut(windowWidth / 2 + i * 50 - 50, windowHeight / 2 + 100));
  }
}

function draw() {
  background(0);
  drawMoonSurface();
  rocket.display();
  for (let astronaut of dogAstronauts) {
    astronaut.display();
  }
  drawEarth();
}

function drawMoonSurface() {
  fill(100);
  ellipse(windowWidth / 2, windowHeight, windowWidth * 1.5, windowHeight * 0.5);
}

function drawEarth() {
  fill(0, 0, 255);
  ellipse(windowWidth * 0.8, windowHeight * 0.2, 100, 100);
}

class Rocket {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    fill(200);
    rect(this.x - 25, this.y - 100, 50, 100);
    fill(255, 0, 0);
    triangle(this.x - 25, this.y - 100, this.x, this.y - 150, this.x + 25, this.y - 100);
  }
}

class DogAstronaut {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    fill(150, 75, 0);
    ellipse(this.x, this.y, 30, 30); // Head
    fill(255);
    ellipse(this.x, this.y + 20, 20, 40); // Body
    fill(0);
    ellipse(this.x - 5, this.y - 5, 5, 5); // Left Eye
    ellipse(this.x + 5, this.y - 5, 5, 5); // Right Eye
  }
}