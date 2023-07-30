let len
let squares = []

class Squares {
  constructor(x, y, len) {
    this.x = x
    this.y = y
    this.len = len
  }

  show(p5) {
    p5.rectMode(p5.CENTER)
    p5.fill(255)
    p5.rect(this.x, this.y, this.len/3, this.len/3)
  }

  generateSquares() {
    let x = this.x
    let y = this.y
    let _len = this.len

    squares.push(new Squares(x - _len/3, y - _len/3, _len/3))
    squares.push(new Squares(x, y - _len/3, _len/3))
    squares.push(new Squares(x + _len/3, y - _len/3, _len/3))

    squares.push(new Squares(x - _len/3, y , _len/3))
    squares.push(new Squares(x + _len/3, y , _len/3))

    squares.push(new Squares(x - _len/3, y + _len/3, _len/3))
    squares.push(new Squares(x , y + _len/3, _len/3))
    squares.push(new Squares(x + _len/3, y + _len/3, _len/3))
  }

  returnLen () {
    return this.len
  }
}

const setup = (p5, canvasParentRef) => {
  if(p5.displayWidth < 500){
    p5.createCanvas(350, 350).parent(canvasParentRef);
    len = 350
  } else {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    len = 500
  }
  
  squares[0] = new Squares(p5.width/2, p5.height/2, len)
};

let stop = false

const draw = (p5) => {
  p5.background(0)

  for(let a of squares){
    
    a.show(p5)

    if(a.returnLen() < 10){
      stop = true
    } else {
      a.generateSquares()
    }
  }

  if(stop) {
    p5.noLoop()
  }
}

const sketch = {
  setup, draw
}

export default sketch