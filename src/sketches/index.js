import sierpiensky_triangle from "./sierpiensky_triangle/sketch"
import sierpienskyHeaderImage from '../assets/sierpiensky.png'

import cardiod from './cardiod/sketch'
import cardiodHeaderImage from '../assets/cardiod.png'

import nephroid from './nephroid/sketch'
import nephroidHeaderImage from '../assets/nephroid.png'

import timesTableAnimation from './times_table_animation/sketch'
import timesTableAnimationImage from '../assets/times_table_animation.png'


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
]

