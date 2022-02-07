let font;
let graphic;

const waveInput = document.querySelector('input.wave');
const waveXInput = document.querySelector('input.waveX');
const waveYInput = document.querySelector('input.waveY');
const line1Input = document.querySelector('input.line1');
const line2Input = document.querySelector('input.line2');

[line1Input, line2Input].forEach((input) => {
  input.addEventListener('input', () => {
    createCopy();
  });
});

const color = '#2fe4c2';
const bgColor = '#293752';

function preload() {
  font = loadFont('./assets/spacegrotesk-medium.otf');
}

function setup() {
  createCanvas(1200, 600);

  createCopy();
}

function draw() {
  background(bgColor);

  const tileSize = 10;

  for (let x = 0; x < 120; x++) {
    for (let y = 0; y < 60; y++) {
      const wave = waveInput.value;
      const distortionX =
        sin(frameCount * wave + x * 0.5 + y * 0.3) * waveXInput.value;
      const distortionY =
        sin(frameCount * wave + x * 0.5 + y * 1) * waveYInput.value;

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

function createCopy() {
  graphic = createGraphics(width, height);

  const text = line1Input.value + '\n' + line2Input.value;

  graphic.fill(color);
  graphic.textFont(font);
  graphic.textSize(300);
  graphic.textLeading(300);
  graphic.textAlign(CENTER, CENTER);
  graphic.text(text, 600, 250);
}
