let segments = []
let depth = 6
let currDepth = 0
let isMobile = false

const setup = (p5, canvasParentRef) => {
  let length
  if(p5.displayWidth < 500){
    p5.createCanvas(350, 350).parent(canvasParentRef);
    isMobile = true
    length = 260;
  } else {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    length = 300;
    isMobile = false
  }

  segments[0] = {
    start: {
      x: p5.width / 2 - length / 2,
      y: p5.height / 2 - p5.sqrt(3) * length / 4
    },
    end: {
      x: p5.width / 2 + length / 2,
      y: p5.height / 2 - p5.sqrt(3) * length / 4
    }
  }
  
  segments[1] = {
    start: {
      x: p5.width / 2 - length / 2,
      y: p5.height / 2 - p5.sqrt(3) * length / 4
    },
    end: {
      x: p5.width / 2,
      y: p5.height / 2 + p5.sqrt(3) * length / 4
    }
  }

  segments[2] = {
    start: {
      x: p5.width / 2,
      y: p5.height / 2 + p5.sqrt(3) * length / 4
    },
    end: {
      x: p5.width / 2 + length / 2,
      y: p5.height / 2 - p5.sqrt(3) * length / 4
    }
  }
};

const draw = (p5) => {
  if(!isMobile)
    p5.translate(0, 50)
  else 
    p5.translate(0, 40)

  p5.background(255)

  p5.frameRate(1)
  kochSnowflake(segments[0].start, segments[0].end, currDepth, p5);
  kochSnowflake(segments[1].end, segments[1].start, currDepth, p5);
  kochSnowflake(segments[2].end, segments[2].start, currDepth, p5);


  setTimeout(() => {
    if(currDepth <= depth){
      currDepth++
    }
  }, 500)
}

function kochSnowflake(start, end, depth, p5) {
  if (depth === 0) {
    drawLine(start, end, p5);
  } else {
    let a = { x: start.x, y: start.y };
    let b = { x: start.x + (end.x - start.x) / 3, y: start.y + (end.y - start.y) / 3 };
    let c = { x: start.x + 2 * (end.x - start.x) / 3, y: start.y + 2 * (end.y - start.y) / 3 };
    let d = { x: end.x, y: end.y };

    let v = rotateVector(subtractVector(c, b), -p5.PI / 3, p5);
    let e = addVector(b, v);

    kochSnowflake(a, b, depth - 1, p5);
    kochSnowflake(b, e, depth - 1, p5);
    kochSnowflake(e, c, depth - 1, p5);
    kochSnowflake(c, d, depth - 1, p5);
  }
}

function drawLine(start, end, p5) {
  p5.line(start.x, start.y, end.x, end.y);
}

function subtractVector(v1, v2) {
  return { x: v1.x - v2.x, y: v1.y - v2.y };
}

function addVector(v1, v2) {
  return { x: v1.x + v2.x, y: v1.y + v2.y };
}

function rotateVector(v, angle, p5) {
  let x = v.x * p5.cos(angle) - v.y * p5.sin(angle);
  let y = v.x * p5.sin(angle) + v.y * p5.cos(angle);
  return { x, y };
}


const sketch = {
  setup, draw
}

export default sketch