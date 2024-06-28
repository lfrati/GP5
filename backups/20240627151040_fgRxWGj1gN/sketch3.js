/*
This sketch visually represents the FizzBuzz challenge, where for numbers 1 to 100, fizz is represented by a red circle, buzz by a blue circle, and fizzbuzz by a purple circle.
Numbers that aren't divisible by 3 or 5 are represented by a white circle.
The circles are arranged in a grid format for clarity.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(0);
  let cols = 10;
  let rows = 10;
  let spacing = min(windowWidth, windowHeight) / 15;

  for (let i = 1; i <= 100; i++) {
    let row = floor((i - 1) / cols);
    let col = (i - 1) % cols;
    let x = spacing + col * spacing;
    let y = spacing + row * spacing;

    if (i % 3 == 0 && i % 5 == 0) {
      fill(128, 0, 128);  // Purple for FizzBuzz
    } else if (i % 3 == 0) {
      fill(255, 0, 0);  // Red for Fizz
    } else if (i % 5 == 0) {
      fill(0, 0, 255);  // Blue for Buzz
    } else {
      fill(255);  // White for others
    }

    ellipse(x, y, spacing * 0.6);
  }
}