import React, { useEffect, useState } from 'react'
import Sketch from "react-p5"

const SketchContainer = ({trigger, setup, draw}) => {
  const [dummy, setDummy] = useState(0)
  useEffect(() => {
    setDummy(d => d + 1)
  }, [trigger])
  return <Sketch setup={setup} draw={draw} />
}

export default SketchContainer