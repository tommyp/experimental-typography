let font;

function preload() {
  font = loadFont('./assets/spacegrotesk-medium.otf');
}

function setup() {
  createCanvas(1200, 600);

  fill('#ff0000');
  textFont(font);
  textSize(300);
  textLeading(200);
  textAlign(CENTER, CENTER);
  text('Good\nMorning', 600, 300);
}

function draw() {}
