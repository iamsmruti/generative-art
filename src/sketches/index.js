import sierpiensky_triangle from "./sierpiensky_triangle/sketch"
import sierpienskyHeaderImage from '../assets/sierpiensky.png'

import cardiod from './cardiod/sketch'
import cardiodHeaderImage from '../assets/cardiod.png'

import nephroid from './nephroid/sketch'
import nephroidHeaderImage from '../assets/nephroid.png'

import timesTableAnimation from './times_table_animation/sketch'
import timesTableAnimationImage from '../assets/times_table_animation.png'

import mandelbrotSet from './mandelbrot_set/sketch'
import mandelbrotHeaderImage from '../assets/mandelbrot_set.png'

import kochCurve from './koch_curve/sketch'
import kochCurveHeaderImage from '../assets/koch_curve.png'

import kochSnowflake from './koch_snowflake/sketch'
import kochSnowflakeHeaderImage from '../assets/koch_snowflake.png'

export const sketchIndex = [
  {
    slug: 'sierpiensky_triangle',
    name: 'Sierpiensky Triangle',
    sketch: sierpiensky_triangle,
    description: 'The Sierpiński triangle, also called the Sierpiński gasket or Sierpiński sieve, is a fractal attractive fixed set with the overall shape of an equilateral triangle, subdivided recursively into smaller equilateral triangles. The Sierpiński triangle, also called the Sierpiński gasket or Sierpiński sieve, is a fractal attractive fixed set with the overall shape of an equilateral triangle, subdivided recursively into smaller equilateral triangles. ',
    category: 'art',
    tags: 'fractals, generative art, sierpiensky triangle',
    headerImg: sierpienskyHeaderImage,
    similar: []
  },
  {
    slug: 'cardiod',
    name: 'Cardiod',
    sketch: cardiod,
    description: 'A cardioid is a two-dimensional plane figure that has a heart-shaped curve. The word “cardioid” originated from a Greek word, which means “heart”. Hence, it is called a heart-shaped curve. The shape of a cardioid can be compared to the cross-section of an apple excluding its stalk.',
    category: 'art',
    tags: 'fractals, generative art, two times table, cardiod',
    headerImg: cardiodHeaderImage,
    similar: []
  },
  {
    slug: 'nephroid',
    name: 'Nephroid',
    sketch: nephroid,
    description: "In geometry, a nephroid (from Ancient Greek ὁ νεφρός (ho nephros) 'kidney-shaped') is a specific plane curve. It is a type of epicycloid in which the smaller circle's radius differs from the larger one by a factor of one-half.",
    category: 'art',
    tags: 'fractals, generative art, three times table, nephroid',
    headerImg: nephroidHeaderImage,
    similar: []
  },
  {
    slug: 'times_table_animation',
    name: 'Times Table Animation',
    sketch: timesTableAnimation,
    description: "This is the follow up of the Cardiod and Nephroid. This visualises what we get when we increase the factor from 2 to 200 and more. This creates really interesting patterns over the animation.",
    category: 'art',
    tags: 'fractals, generative art, three times table, animation',
    headerImg: timesTableAnimationImage,
    similar: []
  },
  {
    slug: 'mandelbrot_set',
    name: 'Mandelbrot Set',
    sketch: mandelbrotSet,
    description: "The Mandelbrot set is a mesmerizing fractal discovered by Benoît B. Mandelbrot in 1980. Defined through a simple iterative process in the complex plane, it showcases an intricate and infinitely detailed pattern. Points within the set remain bounded and are colored black, while those outside it escape to infinity and display vibrant colors. This self-replicating fractal reveals captivating shapes at all levels of magnification, making it a symbol of the exquisite beauty and complexity found in mathematics and nature. Its visual appeal has sparked artistic inspiration and a fascination with the endless wonders hidden within its depths.",
    category: 'art',
    tags: 'fractals, generative art, mandelbrot set, bounded complex plane',
    headerImg: mandelbrotHeaderImage,
    similar: []
  },
  {
    slug: 'koch_curve',
    name: 'Koch Curve',
    sketch: kochCurve,
    description: "The Koch curve, also known as the Koch snowflake curve, is a remarkable fractal that showcases the enchanting world of self-replicating patterns. It is derived from the Koch snowflake by considering only one of its sides. The construction process involves iteratively replacing each line segment with four smaller segments, forming a jagged, infinitely repeating curve. This process continually increases the curve's length while retaining its intricate self-similarity.",
    category: 'art',
    tags: 'fractals, generative art, koch curve',
    headerImg: kochCurveHeaderImage,
    similar: []
  },
  {
    slug: 'koch_snowflake',
    name: 'Koch Snowflake',
    sketch: kochSnowflake,
    description: "The Koch snowflake is a fascinating and iconic fractal pattern that showcases the beauty of self-similarity and infinite complexity. It is constructed by iteratively replacing each straight line segment of an equilateral triangle with smaller segments, forming a pattern that resembles a snowflake. Named after the Swedish mathematician Helge von Koch, this fractal exhibits an intricate, infinitely repeating geometric structure. Despite its simple initial shape, the Koch snowflake's boundary becomes increasingly jagged and intricate with each iteration, highlighting the remarkable nature of fractals in mathematics and the mesmerizing intricacy of nature's patterns.",
    category: 'art',
    tags: 'fractals, generative art, koch snowflake',
    headerImg: kochSnowflakeHeaderImage,
    similar: []
  },
]

