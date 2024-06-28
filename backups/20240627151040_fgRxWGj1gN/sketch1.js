/*
This p5.js sketch visually represents the FizzBuzz challenge.
The rules are simple: it iterates through a range of numbers, printing 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, and 'FizzBuzz' for multiples of both 3 and 5.
In this visual representation, each number is displayed as a circle.
The circles are colored according to the FizzBuzz rules: 'Fizz' multiples are colored red, 'Buzz' multiples are colored blue, and 'FizzBuzz' multiples are colored purple.*/

let fizzColor, buzzColor, fizzBuzzColor, normalColor;
let rows = 20;
let cols = 20;
let spacingX, spacingY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fizzColor = color(255, 0, 0);  // Red for Fizz
  buzzColor = color(0, 0, 255);  // Blue for Buzz
  fizzBuzzColor = color(128, 0, 128);  // Purple for FizzBuzz
  normalColor = color(0, 0, 0);  // Black for normal
  spacingX = windowWidth / cols;
  spacingY = windowHeight / rows;
  textAlign(CENTER, CENTER);
  textSize(16);
}

function draw() {
  background(255);
  let num = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * spacingX + spacingX / 2;
      let y = i * spacingY + spacingY / 2;
      if (num % 3 == 0 && num % 5 == 0) {
        fill(fizzBuzzColor);
        ellipse(x, y, spacingX / 2, spacingY / 2);
        fill(255);
        text('FizzBuzz', x, y);
      } else if (num % 3 == 0) {
        fill(fizzColor);
        ellipse(x, y, spacingX / 2, spacingY / 2);
        fill(255);
        text('Fizz', x, y);
      } else if (num % 5 == 0) {
        fill(buzzColor);
        ellipse(x, y, spacingX / 2, spacingY / 2);
        fill(255);
        text('Buzz', x, y);
      } else {
        fill(normalColor);
        ellipse(x, y, spacingX / 2, spacingY / 2);
        fill(255);
        text(num, x, y);
      }
      num++;
    }
  }
}