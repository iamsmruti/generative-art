**The cardioid** is a captivating mathematical curve, admired for its heart-like shape. It belongs to the family of limaçons and is represented by the polar equation r = a(1 + cos(θ)), where 'r' denotes the distance from the origin, 'a' is a constant determining its size, and 'θ' represents the angle from the positive x-axis. With its aesthetic charm and intriguing properties, the cardioid finds applications in art, planetary orbits, acoustics, and engineering. Its self-duality and appearances in various geometric transformations make it a delightful and versatile figure in the world of mathematics.

#### How can we reproduce this pattern

```js
let factor = 2
let totalPoints = 10
let radius

const setup = () => {
  createCanvas(500, 500);
  radius = width/2 - 20
};

function getVector(index){
  let angle = map(index % totalPoints, 0, totalPoints, 0, TWO_PI)
  
  let v = {
    x: cos(angle + PI)*radius,
    y: sin(angle + PI)*radius
  }

  return v
}

const draw = () => {
  background(255);

  translate(width/2, height/2)
  circle(0, 0, radius*2)

  if(totalPoints < 350)
  totalPoints += 0.1

  for(let i = 0; i < totalPoints; i++){
    circle(getVector(i).x , getVector(i).y, 5)
    line(getVector(i).x , getVector(i).y , getVector(i * factor).x , getVector(i*factor).y)
  }
}
```

#### Some Facts about Cardiod

1. **Geometric Shape**: The cardioid is a plane curve, a type of limaçon, that resembles the shape of a heart with a pointed cusp at the top and a loop-like curve extending downwards.

2. **Polar Equation**: The cardioid can be represented in polar coordinates by the equation r = a(1 + cos(θ)), where 'r' is the distance from the origin, 'a' is a constant determining the size of the curve, and 'θ' is the angle from the positive x-axis.

3. **Duality**: The cardioid is self-dual, meaning that it remains unchanged under a specific geometric transformation. If you reflect the cardioid about a line through the origin at an angle of 45 degrees, the resulting curve is identical to the original one.

4. **Heart Symbol**: The cardioid's heart-like shape has made it a popular symbol of love and affection, and it is often used in various contexts, including romantic art, greeting cards, and Valentine's Day decorations.

5. **Planetary Orbits**: The cardioid appears in the parametric equations that describe the motion of planets around a star. It is related to the path of a planet under certain gravitational forces.

6. **Directional Microphones**: The cardioid pattern is widely used in directional microphones in audio engineering. This pattern is sensitive to sound sources from one direction while rejecting noise from other angles, making it ideal for recording specific sounds.

7. **Roulette Curve**: The cardioid is a special case of a roulette, a curve traced by a point on a fixed shape as it rolls without slipping around a circle. The cardioid is the result of a circle rolling around another circle of the same size.

8. **Circle Inversion**: The cardioid is one of the shapes that remain unchanged under a specific type of geometric transformation called circle inversion. When a circle is inverted through another circle, the cardioid is one of the curves that remain fixed.

9. **Acoustic Properties**: The cardioid shape has unique acoustic properties, making it useful in sound engineering and loudspeaker designs. It helps direct sound in specific directions, minimizing unwanted reflections and enhancing sound quality.

10. **Applications in Mathematics and Science**: The cardioid has applications in various fields, including physics, engineering, and computer graphics. It continues to be a subject of fascination and study in mathematics due to its intriguing properties and aesthetic appeal.

These major facts highlight the cardioid's significance and versatility, both as a mathematical curve and as an inspiration in various artistic and scientific endeavors.