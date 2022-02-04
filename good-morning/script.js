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
  graphic.text('fuck the\ntories', 600, 300);
}

function draw() {
  background(bgColor);

  const tileSize = 10;

  for (let x = 0; x < width / tileSize; x++) {
    for (let y = 0; y < height / tileSize; y++) {
      let distortion = sin(frameCount * 0.05 + x * 0.3) * 50;

      if (x % 2 == 0) {
        distortion = cos(frameCount * 0.05 + x * 0.3) * -50;
      }

      const sx = x * tileSize;
      const sy = y * tileSize;
      const sw = Math.max(tileSize + distortion, tileSize);
      const sh = Math.max(tileSize + distortion, tileSize);

      const dx = x * tileSize;
      const dy = y * tileSize;
      const dw = Math.max(tileSize + distortion, tileSize);
      const dh = tileSize;

      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}
