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
    const distance = createVector(point.x - mouseX, point.y - mouseY);
    const distortion = distance.mult(40 / distance.mag());

    circle(point.x + distortion.x, point.y + distortion.y, 5);
  });

  noFill();
  stroke('#f3c043');

  beginShape();
  points.forEach((point) => {
    const distance = createVector(point.x - mouseX, point.y - mouseY);
    const distortion = distance.mult(40 / distance.mag());

    vertex(point.x + distortion.x, point.y + distortion.y);
  });
  endShape();
}
