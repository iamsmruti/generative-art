import React from 'react'
import timesTableAnimation from '../sketches/times_table_animation/sketchHome'
import Sketch from "react-p5"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <HeroSection />
    </div>
  )
}

export default Home

export const HeroSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] mb-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[60px] leading-[60px] text-red-300">What is Generative Art?</h2>
          
          <div className="w-[100%]">
            <div className="h-[2px] w-[200px] bg-red-400 mb-3"/>
          </div>

          <div className="md:hidden justify-center items-center flex">
            <Sketch setup={timesTableAnimation.setup} draw={timesTableAnimation.draw}/>
          </div>

          <p className="mt-4 font-light">"Generative art" often refers to algorithmic art (algorithmically determined computer generated artwork) and synthetic media (general term for any algorithmically generated media).</p>
          <p className="mt-4 font-light">Generative Art can include Music, Visual Art, Architecture, Literature, Coding and much more. Any form of art that is generated through a computer algorithm can be called as a generated art</p>
          <div className="w-[100%] mt-10">
            <Link to="/gallery">
              <div className="bg-red-300 w-fit px-2 py-1">
                <p>Explore</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="md:flex justify-center items-center hidden">
          <Sketch setup={timesTableAnimation.setup} draw={timesTableAnimation.draw}/>
        </div>
      </div>
    </div>
  )
}