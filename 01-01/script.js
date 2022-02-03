let one;
let two;

function preload() {
  font = loadFont('./assets/spacegrotesk-medium.otf');
}

function setup() {
  createCanvas(500, 500);
  one = createGraphics(500, 500);

  one.textSize(400);
  one.textFont(font);
  one.fill('#ef5236');
  one.textAlign(CENTER, CENTER);
  one.text('01', width / 2, height / 2);

  two = createGraphics(500, 500);

  two.textSize(400);
  two.textFont(font);
  two.fill('#ef5236');
  two.textAlign(CENTER, CENTER);
  two.text('23', width / 2, height / 2);
}

function draw() {
  background('#ecf072');

  let val = sin(frameCount * 0.05) * 250;

  copy(one, 0, 0, 250 + val, 500, 0, 0, 250 + val, 500);

  copy(two, 250 + val, 0, 250 - val, 500, 250 + val, 0, 250 - val, 500);
}
