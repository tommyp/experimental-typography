let font;
let graphic;

const color = '#2fe4c2';
const bgColor = '#293752';

function preload() {
  font = loadFont('./assets/spacegrotesk-medium.otf');
}

function setup() {
  createCanvas(1200, 600);

  graphic = createGraphics(width, height);

  graphic.fill(color);
  graphic.textFont(font);
  graphic.textSize(300);
  graphic.textLeading(300);
  graphic.textAlign(CENTER, CENTER);
  graphic.text('Good\nMorning', 600, 250);
}

function draw() {
  background(bgColor);

  const tileSize = 10;

  for (let x = 0; x < 120; x++) {
    for (let y = 0; y < 60; y++) {
      const wave = 0.05;
      const distortionX = sin(frameCount * wave + x * 0.5 + y * 0.3) * 10;
      const distortionY = sin(frameCount * wave + x * 0.5 + y * 0.5) * 5;

      const sx = x * tileSize + distortionX;
      const sy = y * tileSize + distortionY;
      const sw = tileSize;
      const sh = tileSize;

      const dx = x * tileSize;
      const dy = y * tileSize;
      const dw = tileSize;
      const dh = tileSize;

      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}
