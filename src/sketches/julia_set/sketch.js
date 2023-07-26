let angle = 0;

const maxiterations = 100;

const colorsRed = [];
const colorsGreen = [];
const colorsBlue = [];

function setup(p5, canvasParentRef) {
  p5.pixelDensity(1);

  if(p5.displayWidth < 500){
    p5.createCanvas(350, 350).parent(canvasParentRef);
  } else {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  }

  p5.colorMode(p5.HSB, 1);

  for (let n = 0; n < maxiterations; n++) {
    let hu = p5.sqrt(n / maxiterations);
    let col = p5.color(hu, 255, 150);
    colorsRed[n] = p5.red(col);
    colorsGreen[n] = p5.green(col);
    colorsBlue[n] = p5.blue(col);
  }
}

function draw(p5) {
  let ca = p5.cos(angle * 3.213);
  let cb = p5.sin(angle);

  angle += 0.001;

  p5.background(255);

  let w = 5;
  let h = (w * p5.height) / p5.width;

  let xmin = -w / 2;
  let ymin = -h / 2;

  p5.loadPixels();

  let xmax = xmin + w;
  let ymax = ymin + h;

  let dx = (xmax - xmin) / p5.width;
  let dy = (ymax - ymin) / p5.height;

  let y = ymin;
  for (let j = 0; j < p5.height; j++) {
    let x = xmin;
    for (let i = 0; i < p5.width; i++) {
      let a = x;
      let b = y;
      let n = 0;

      while (n < maxiterations) {
        let aa = a * a;
        let bb = b * b;
        
        if (aa + bb > 4.0) {
          break; 
        }
        let twoab = 2.0 * a * b;
        a = aa - bb + ca;
        b = twoab + cb;
        n++;
      }

      let pix = (i + j * p5.width) * 4;
      if (n == maxiterations) {
        p5.pixels[pix + 0] = 0;
        p5.pixels[pix + 1] = 0;
        p5.pixels[pix + 2] = 0;
      } else {
        p5.pixels[pix + 0] = colorsRed[n];
        p5.pixels[pix + 1] = colorsGreen[n];
        p5.pixels[pix + 2] = colorsBlue[n];
      }
      x += dx;
    }
    y += dy;
  }
  p5.updatePixels();
}

const sketch = {
  setup, draw
}

export default sketch