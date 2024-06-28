/*
This p5.js sketch visualizes the FizzBuzz problem.
Numbers are displayed in a grid.
Each number follows the FizzBuzz rules: if divisible by 3, the number is replaced by 'Fizz'; if divisible by 5, it is replaced by 'Buzz'; if divisible by both 3 and 5, it is replaced by 'FizzBuzz'.
The colors are used to differentiate between these cases: numbers are colored white, 'Fizz' is colored green, 'Buzz' is colored blue, and 'FizzBuzz' is colored purple.*/

let cols, rows;
let cellSize;
let fizzbuzzArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  cellSize = 50;
  cols = floor(width / cellSize);
  rows = floor(height / cellSize);
  fizzbuzzArray = generateFizzBuzzArray(cols * rows);
}

function draw() {
  background(0);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      let value = fizzbuzzArray[index];
      let displayText = value;
      let color = color(255); // White for numbers

      if (value % 3 === 0 && value % 5 === 0) {
        displayText = 'FizzBuzz';
        color = color(128, 0, 128); // Purple for FizzBuzz
      } else if (value % 3 === 0) {
        displayText = 'Fizz';
        color = color(0, 255, 0); // Green for Fizz
      } else if (value % 5 === 0) {
        displayText = 'Buzz';
        color = color(0, 0, 255); // Blue for Buzz
      }

      fill(color);
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      fill(0);
      textSize(16);
      text(displayText, x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
    }
  }
}

function generateFizzBuzzArray(len) {
  let arr = [];
  for (let i = 1; i <= len; i++) {
    arr.push(i);
  }
  return arr;
}