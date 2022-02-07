let font;
let graphic;

function preload() {
  font = loadFont('./assets/spacegrotesk-medium.otf');
}

function setup() {
  createCanvas(1200, 600);

  graphic = createGraphics(width, height);

  graphic.fill('#fff');
  graphic.textFont(font);
  graphic.textAlign(CENTER, CENTER);
  graphic.textSize(500);

  graphic.text('oas', 600, 260);
}

function draw() {
  background('#000');

  const rows = 12;
  const tileSize = 600 / rows;

  for (let y = 0; y < rows; y++) {
    const distortion = sin(frameCount * 0.05 + y) * 50;

    let position = winMouseX / windowWidth;
    position = easeInOutCubic(position);

    const sx = 0;
    const sy = y * tileSize * position;
    const sw = 1200;
    const sh = tileSize * position + (600 - tileSize) * (1 - position);

    const dx = 0;
    const dy = y * tileSize;
    const dw = 1200;
    const dh = tileSize;

    image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
  }
}
