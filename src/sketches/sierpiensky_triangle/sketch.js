let x = 50;
let y = 50;

const setup = (p5, canvasParentRef) => {
  p5.createCanvas(500, 500).parent(canvasParentRef);
  p5.background(255);
};

const drawRect = (p5,x,y,d) => {
  p5.noFill();
  p5.rectMode(p5.CENTER)
  p5.rect(x, y, d, d);
  p5.strokeWeight(0.5);
  
  if(d < 1) return;

  setTimeout(() => {
    drawRect(p5, x, y - d/2, d/2);
  }, 50)

  setTimeout(() => {
    drawRect(p5, x + d/2, y, d/2);
  }, 70)

  setTimeout(() => {
    drawRect(p5, x - d/2, y, d/2);
  }, 90)
}

const draw = (p5) => {
  drawRect(p5, p5.width/2, p5.height/2, 200)
}

const sketch = {
  setup, draw
}

export default sketch