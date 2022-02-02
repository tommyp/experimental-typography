let sg;
let graphic;

function preload() {
  sg = loadFont('./assets/spacegrotesk-medium.otf');
}

function setup() {
  createCanvas(1000, 1000);

  graphic = createGraphics(1000, 1000);
  graphic.fill('#f3c043');
  graphic.textFont(sg);
  graphic.textSize(800);
  graphic.textAlign(CENTER, CENTER);
  graphic.text('X', width / 2, width / 2 - 60);
}

function draw() {
  background('#e84e3c');

  const tileSize = 50;
  for (let x = 0; x < width / tileSize; x++) {
    for (let y = 0; y < height / tileSize; y++) {
      const distortion = sin(frameCount * 0.05 + x * 0.5 + y * 0.3) * 50;

      // source
      const sx = x * tileSize;
      const sy = y * tileSize;
      const sw = tileSize + distortion;
      const sh = tileSize + distortion;

      // destination
      const dx = x * tileSize;
      const dy = y * tileSize;
      const dw = tileSize;
      const dh = tileSize;

      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}
