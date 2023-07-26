import React from 'react'
import Sketch from "react-p5"

const SketchContainer = ({setup, draw}) => {
  return <Sketch setup={setup} draw={draw} />
}

export default SketchContainer