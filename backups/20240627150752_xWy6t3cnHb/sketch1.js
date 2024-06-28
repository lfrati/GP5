/*
This sketch will depict a moon landing scene imagining that dogs had achieved sentience before humans.
It will feature a dog astronaut planting a flag on the moon, with the Earth visible in the background.
We'll utilize p5.js shapes and images to create the scene.
The canvas size will adjust to the window dimensions using windowWidth and windowHeight.*/

let dogImg; let flagImg;

function preload() {
  dogImg = loadImage('https://example.com/dog-astronaut.png'); // Placeholder URL for the dog astronaut image
  flagImg = loadImage('https://example.com/dog-flag.png'); // Placeholder URL for the flag image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); // space background
  drawMoon();
  drawEarth();
  drawDogAstronaut();
  drawFlag();
}

function drawMoon() {
  fill(120);
  ellipse(width / 2, height, width, height / 2);
}

function drawEarth() {
  fill(0, 0, 255);
  ellipse(width - 150, 150, 100, 100);
  fill(0, 255, 0);
  ellipse(width - 150, 150, 75, 75);
}

function drawDogAstronaut() {
  image(dogImg, width / 2 - 50, height - 200, 100, 150);
}

function drawFlag() {
  image(flagImg, width / 2 + 50, height - 250, 50, 100);
}