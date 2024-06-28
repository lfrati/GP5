/*
In this sketch, an endless herd of sheep will be jumping over a fence to create a soothing and repetitive visual.
We will draw sheep as simple white ellipses and animate them to move from the left side of the screen to the right, jumping over a horizontal line representing the fence.
We'll use an array to manage multiple sheep and have them loop back to the start once they are off-screen.*/

let sheep = []; // Array to hold sheep objects
let numSheep = 10; // Number of sheep
let fenceHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fenceHeight = windowHeight / 2;
  for (let i = 0; i < numSheep; i++) {
    sheep.push(new Sheep(i * (windowWidth / numSheep), fenceHeight));
  }
}

function draw() {
  background(100, 150, 200); // Light blue background
  drawFence();
  for (let s of sheep) {
    s.move();
    s.display();
  }
}

function drawFence() {
  stroke(0);
  strokeWeight(4);
  line(0, fenceHeight, windowWidth, fenceHeight); // Draw the fence
}

class Sheep {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.jumpHeight = 100;
    this.speed = 3;
    this.jumpSpeed = 0.1;
    this.angle = 0;
  }

  move() {
    this.x += this.speed;
    this.angle += this.jumpSpeed;
    this.y = fenceHeight + sin(this.angle) * this.jumpHeight / 2;
    if (this.x > windowWidth) {
      this.x = -this.size;
    }
  }

  display() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.size * 2, this.size); // Sheep body
    fill(0);
    ellipse(this.x + this.size / 2, this.y - this.size / 4, 10, 10); // Sheep eye
  }
}