/*
In this sketch, I'll draw a scene where a sea urchin is cooking a pancake.
The sea urchin will be represented by a central shape with spikes protruding outwards.
The pancake will be placed on a small stovetop or skillet to depict the cooking action.
The setup function initializes the canvas, and the draw function will create the visuals for the sea urchin and the pancake.*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // to prevent continuous drawing
}

function draw() {
  background(220);
  // Draw a stove
  fill(105, 105, 105);
  rect(windowWidth / 2 - 50, windowHeight / 2 + 50, 100, 20);
  fill(80, 80, 80);
  ellipse(windowWidth / 2, windowHeight / 2 + 50, 70, 70);

  // Draw a pancake
  fill(255, 204, 153);
  ellipse(windowWidth / 2, windowHeight / 2 + 50, 60, 60);

  // Draw a sea urchin
  fill(0);
  let urSize = 40;
  ellipse(windowWidth / 2, windowHeight / 2 - 50, urSize, urSize);
  for (let i = 0; i < 360; i += 15) {
    let angle = radians(i);
    let x1 = windowWidth / 2 + cos(angle) * urSize / 2;
    let y1 = windowHeight / 2 - 50 + sin(angle) * urSize / 2;
    let x2 = windowWidth / 2 + cos(angle) * (urSize);
    let y2 = windowHeight / 2 - 50 + sin(angle) * (urSize);
    stroke(0);
    line(x1, y1, x2, y2);
  }
}