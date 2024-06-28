/*
This sketch will depict a boat on a water background with a fish jumping over the boat.
The draw() loop will animate the fish's jumping motion over the boat.*/

let fishX, fishY, fishJumpHeight, boatY; 
let fishJumpingUp = true; 
 
function setup() { 
  createCanvas(windowWidth, windowHeight); 
  fishX = windowWidth * 0.5; 
  fishY = windowHeight * 0.75; 
  fishJumpHeight = windowHeight * 0.25; 
  boatY = windowHeight * 0.75; 
} 
 
function draw() { 
  background(135, 206, 235); // Sky blue background 
  drawWater(); 
  drawBoat(); 
  drawFish(); 
  animateFish(); 
} 
 
function drawWater() { 
  fill(64, 164, 223); 
  noStroke(); 
  rect(0, windowHeight * 0.5, windowWidth, windowHeight * 0.5); 
} 
 
function drawBoat() { 
  fill(139, 69, 19); // Brown color for boat 
  rect(windowWidth * 0.4, boatY, windowWidth * 0.2, windowHeight * 0.05); 
} 
 
function drawFish() { 
  fill(255, 0, 0); // Red color for fish 
  ellipse(fishX, fishY, windowWidth * 0.05, windowHeight * 0.03); 
  triangle(fishX - windowWidth * 0.025, fishY, 
           fishX - windowWidth * 0.05, fishY - windowHeight * 0.015, 
           fishX - windowWidth * 0.05, fishY + windowHeight * 0.015); // Fish tail 
} 
 
function animateFish() { 
  if (fishJumpingUp) { 
    fishY -= 5; 
    if (fishY <= windowHeight * 0.5 - fishJumpHeight) { 
      fishJumpingUp = false; 
    } 
  } else { 
    fishY += 5; 
    if (fishY >= windowHeight * 0.75) { 
      fishJumpingUp = true; 
    } 
  } 
}