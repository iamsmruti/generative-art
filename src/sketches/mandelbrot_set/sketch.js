let minval = -2.0;
let maxval = 1.5;

const setup = (p5, canvasParentRef) => {
  if(p5.displayWidth < 500){
    p5.createCanvas(350, 350).parent(canvasParentRef);
  } else {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  }
  
  p5.pixelDensity(1);
};

const draw = (p5) => {
  let maxiterations = 50;

  p5.loadPixels();
  for (let x = 0; x < p5.width; x++) {
    for (let y = 0; y < p5.height; y++) {

      let a = p5.map(x, 0, p5.width, minval, maxval);
      let b = p5.map(y, 0, p5.height, minval, maxval);

      let ca = a;
      let cb = b;

      let n = 0;

      while (n < maxiterations) {
        let aa = a * a - b * b;
        let bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;
        if (a * a + b * b > 16) {
          break;
        }
        n++;
      }

      let bright = p5.map(n, 0, maxiterations, 0, 1);
      bright = p5.map(p5.sqrt(bright), 0, 1, 0, 255);

      if (n == maxiterations) {
        bright = 0;
      }

      let pix = (x + y * p5.width) * 4;
      p5.pixels[pix + 0] = bright;
      p5.pixels[pix + 1] = bright;
      p5.pixels[pix + 2] = bright;
      p5.pixels[pix + 3] = 255;
    }
  }
  p5.updatePixels();
}

const sketch = {
  setup, draw
}

export default sketch