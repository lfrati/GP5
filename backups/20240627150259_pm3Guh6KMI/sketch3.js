/*
In this p5.js sketch, I will create an endless animation of sheep jumping over a fence.
I'll use looping behavior to simulate the continuous motion of sheep, reset their positions once they go off-screen, and use simple ellipses and rectangles to represent the sheep and the fence.
The sheep will jump over a static fence repeatedly, moving from the left side to the right side of the canvas.*/

let sheep = []; // Array to store multiple sheep objects

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 5; i++) { // Create 5 sheep objects at start
    sheep.push(new Sheep(i * 150)); // Spacing them out initially
  }
}

function draw() {
  background(135, 206, 235); // Light blue sky background
  drawFence();
  for (let i = 0; i < sheep.length; i++) {
    sheep[i].move();
    sheep[i].display();
  }
}

function drawFence() {
  stroke(139, 69, 19); // Brown color for fence
  strokeWeight(10);
  line(width / 2, height / 2 + 100, width / 2, height); // Vertical post
  line(width / 2 - 50, height / 2 + 100, width / 2 + 50, height / 2 + 100); // Horizontal bar
}

class Sheep {
  constructor(x) {
    this.x = x;
    this.y = height / 2 + 100;
    this.size = 50;
    this.speed = 2;
  }

  move() {
    this.x += this.speed;
    this.y = height / 2 + 100 - Math.sin((this.x / 50) % PI) * 100;
    if (this.x > width + this.size) { // Reset position after moving off screen
      this.x = -this.size;
    }
  }

  display() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.size); // Body
    ellipse(this.x - this.size / 2, this.y - this.size / 2, this.size / 2); // Head
  }
}