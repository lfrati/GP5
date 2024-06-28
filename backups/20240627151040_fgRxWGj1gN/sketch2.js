/*
In this p5.js sketch, we will visually represent the FizzBuzz challenge.
The challenge involves iterating through numbers and printing 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, and 'FizzBuzz' for multiples of both.
The visual representation will use colored circles; one color for 'Fizz', another for 'Buzz', and a third for 'FizzBuzz'.
Numbers that are neither will be shown as plain circles.*/

let fizzColor, buzzColor, fizzBuzzColor, otherColor;
let xPos, yPos;
let diameter = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fizzColor = color(255, 0, 0); // Red for Fizz
  buzzColor = color(0, 255, 0); // Green for Buzz
  fizzBuzzColor = color(0, 0, 255); // Blue for FizzBuzz
  otherColor = color(200); // Grey for others
  xPos = diameter;
  yPos = diameter;
}

function draw() {
  background(255);
  xPos = diameter;
  yPos = diameter;
  for (let i = 1; i <= 100; i++) {
    let col;
    if (i % 3 === 0 && i % 5 === 0) {
      col = fizzBuzzColor;
    } else if (i % 3 === 0) {
      col = fizzColor;
    } else if (i % 5 === 0) {
      col = buzzColor;
    } else {
      col = otherColor;
    }
    fill(col);
    ellipse(xPos, yPos, diameter, diameter);
    xPos += diameter + 5;
    if (xPos > width - diameter) {
      xPos = diameter;
      yPos += diameter + 5;
    }
  }
}