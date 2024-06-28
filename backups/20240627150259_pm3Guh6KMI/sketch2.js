/*
This sketch creates an endless herd of sheep that continuously jump over a fence.
Each sheep is represented by an ellipse and they jump over a rectangle which represents the fence.
The sheep reset their position when they move off the screen, creating a looping animation.*/

let sheepCount = 10;  // Number of sheep in the herd
let sheep = [];
let speed = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < sheepCount; i++) {
    sheep.push(new Sheep(i * (width / sheepCount)));
  }
}

function draw() {
  background(135, 206, 250); // Sky color
  drawGrass();
  drawFence();
  for (let s of sheep) {
    s.update();
    s.display();
  }
}

function drawGrass() {
  fill(34, 139, 34); // Grass color
  noStroke();
  rect(0, height * 0.75, width, height * 0.25);
}

function drawFence() {
  fill(139, 69, 19); // Fence color
  rect(width / 2 - 50, height * 0.75 - 20, 100, 20);
  rect(width / 2 - 5, height * 0.75 - 120, 10, 100);
}

class Sheep {
  constructor(x) {
    this.x = x;
    this.y = height * 0.75 - 20;
    this.size = 40;
    this.jumpHeight = 0;
    this.isJumping = false;
  }

  update() {
    if (!this.isJumping && this.x > width / 2 - 150 && this.x < width / 2 + 50) {
      this.isJumping = true;
      this.jumpHeight = -15;
    }

    if (this.isJumping) {
      this.y += this.jumpHeight;
      this.jumpHeight += 1;
      if (this.y >= height * 0.75 - 20) {
        this.y = height * 0.75 - 20;
        this.isJumping = false;
      }
    }

    this.x += speed; 
    if (this.x > width) {
      this.x = -this.size;
    }
  }

  display() {
    fill(255); // Sheep color
    noStroke();
    ellipse(this.x, this.y, this.size * 1.5, this.size); // Body
    ellipse(this.x, this.y - this.size * 0.6, this.size * 0.9, this.size * 0.9); // Head
  }
}