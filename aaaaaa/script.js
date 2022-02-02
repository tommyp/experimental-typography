let sg;
let graphic;

function preload() {
  sg = loadFont('./assets/spacegrotesk-medium.otf');
}

function setup() {
  createCanvas(600, 600);

  graphic = createGraphics(600, 600);
  graphic.fill('#f3c043');
  graphic.textFont(sg);
  graphic.textSize(800);
  graphic.textAlign(CENTER, CENTER);
  graphic.text('a', width / 2, width / 2 - 60);
}

function draw() {
  const tileSize = 50;
  for (let x = 0; x < width / tileSize; x++) {
    for (let y = 0; y < height / tileSize; y++) {
      // source
      const sx = tileSize * x;
      const sy = tileSize * y;
      const sw = tileSize + 40;
      const sh = tileSize + 40;

      // destination
      const dx = tileSize * x;
      const dy = tileSize * y;
      const dw = tileSize;
      const dh = tileSize;

      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}
