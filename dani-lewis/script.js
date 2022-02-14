let font;
let points;

function preload() {
  font = loadFont('./assets/inconsolata-bold.ttf');
}

function setup() {
  createCanvas(1200, 600);

  points = font.textToPoints('Dani Lewis', 130, 330, 180, {
    sampleFactor: 0.1,
    simplifyThreshold: 0,
  });
}

function draw() {
  background('#e84e3c');

  noStroke();
  fill('#f3c043');

  points.forEach((point) => {
    circle(point.x, point.y, 5);
  });

  noFill();
  stroke('#f3c043');

  beginShape();
  points.forEach((point) => {
    vertex(point.x, point.y);
  });
  endShape();
}
