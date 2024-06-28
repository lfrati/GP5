/*
This sketch features an endless herd of sheep jumping over a fence to create a soothing visual.
The sheep move from the left to the right side of the screen, jump over a fence, and then reset to the starting position to continue the loop.
The sketch uses basic shapes to represent the sheep and fence.
It also utilizes sine waves to achieve a smooth jumping motion for the sheep.*/

let sheep = []; // Array to hold multiple sheep objects
let sheepCount = 5; // Number of sheep
let fenceHeight = 100; // The height of the fence

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60); // Ensure smooth animation
  for (let i = 0; i < sheepCount; i++) {
    sheep.push(new Sheep(-i * 200)); // Position the sheep with some initial gap
  }
}

function draw() {
  background(135, 206, 235); // Sky blue background
  drawGrass(); // Draw grass on the ground
  drawFence(); // Draw the fence
  for (let s of sheep) {
    s.update(); // Update position
    s.display(); // Display sheep
  }
}

function drawGrass() {
  fill(34, 139, 34); // Green color for grass
  rect(0, height - 50, width, 50); // Simple grass rectangle
}

function drawFence() {
  stroke(139, 69, 19); // Brown color for the fence
  strokeWeight(10);
  line(width / 2 - 50, height - 50 - fenceHeight, width / 2 + 50, height - 50 - fenceHeight); // Horizontal fence
  line(width / 2, height - 50 - fenceHeight, width / 2, height - 50); // Vertical fence post
}

class Sheep {
  constructor(startX) {
    this.x = startX;
    this.y = height - 75;
    this.size = 50;
    this.jumpHeight = 0;
  }

  update() {
    this.x += 3; // Move sheep to the right
    if (this.x > width + this.size) {
      this.x = -this.size; // Reset position once it moves out of view
    }
    // Calculate jumping motion using sine wave
    let distanceToFence = abs(this.x - width / 2);
    if (distanceToFence < 100) {
      this.jumpHeight = sin(map(distanceToFence, 0, 100, PI, TWO_PI)) * 100;
    } else {
      this.jumpHeight = 0;
    }
  }

  display() {
    fill(255); // White color for sheep
    noStroke();
    ellipse(this.x, this.y - this.jumpHeight, this.size, this.size * 0.6); // Body
    ellipse(this.x + this.size * 0.4, this.y - this.jumpHeight, this.size * 0.5, this.size * 0.5); // Head
    fill(0); // Black color for eyes
    ellipse(this.x + this.size * 0.45, this.y - this.jumpHeight - 10, this.size * 0.1, this.size * 0.1); // Left Eye
    ellipse(this.x + this.size * 0.55, this.y - this.jumpHeight - 10, this.size * 0.1, this.size * 0.1); // Right Eye
  }
}