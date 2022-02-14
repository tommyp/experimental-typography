let font;

function preload() {
  font = loadFont('./assets/inconsolata-bold.ttf');
}

function setup() {
  createCanvas(1200, 600);
}

function draw() {
  background('#e84e3c');
  textFont(font);
  textSize(32);
  text('Dani Lewis', 100, 100);
}
