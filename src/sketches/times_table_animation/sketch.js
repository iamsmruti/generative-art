let factor = 2
let totalPoints = 200
let radius

const setup = (p5, canvasParentRef) => {
  p5.createCanvas(500, 500).parent(canvasParentRef);
  radius = p5.width/2 - 20
};

function getVector(index, p5){
  let angle = p5.map(index % totalPoints, 0, totalPoints, 0, p5.TWO_PI)
  
  let v = {
    x: p5.cos(angle + p5.PI)*radius,
    y: p5.sin(angle + p5.PI)*radius
  }

  return v
}

const draw = (p5) => {
  p5.background(255);

  p5.translate(p5.width/2, p5.height/2)
  p5.circle(0, 0, radius*2)

  if(factor < 350)
  factor += 0.01

  for(let i = 0; i < totalPoints; i++){
    p5.circle(getVector(i, p5).x, getVector(i, p5).y, 5)
    p5.line(getVector(i, p5).x, getVector(i, p5).y, getVector(i * factor, p5).x, getVector(i*factor, p5).y)
  }
}

const sketch = {
  setup, draw
}

export default sketch