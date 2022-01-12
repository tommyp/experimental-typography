let font;
let graphic;

function preload() {
  font = loadFont("./assets/spacegrotesk-medium.otf");
}

function setup() {
  createCanvas(500, 500);
  graphic = createGraphics(500, 500);

  graphic.textSize(400);
  graphic.textFont(font);
  graphic.fill("#ef5236");
  graphic.textAlign(CENTER, CENTER);
  graphic.text("01", width / 2, height / 2);
}

function draw() {
  background("#ecf072");

  let val = sin(frameCount * 0.01) * 250;

  copy(graphic, 0, 0, 500, 500, 0, 0, 250 + val, 500);
  copy(graphic, 0, 0, 500, 500, 250 + val, 0, 250 - val, 500);
}
