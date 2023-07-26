let angle = 0;
let slider;

const setup = (p5, canvasParentRef) => {
  if(p5.displayWidth < 500){
    p5.createCanvas(350, 350).parent(canvasParentRef);
  } else {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  }

  const sliderContainer = document.getElementById('slider')
  slider = p5.createSlider(0, p5.TWO_PI, p5.PI / 4, 0.01).parent(sliderContainer);
};

const branch = (len, thick, p5) => {
  p5.strokeWeight(thick);
  p5.line(0, 0, 0, -len);
  p5.translate(0, -len);
  if (len > 4) {
    p5.push();
    p5.rotate(angle);
    branch(len * 0.67, thick * 0.8, p5);
    p5.pop();
    
    p5.push();
    p5.rotate(-angle);
    branch(len * 0.67, thick * 0.8, p5);
    p5.pop();
  }
}

const draw = (p5) => {
  p5.background(0);
  angle = slider.value();
  p5.stroke(255);
  const thick = 10;
  const len = 120;
  p5.translate(p5.width * 0.5, p5.height);
  branch(len, thick ,p5);
}

const sketch = {
  setup, draw
}

export default sketch