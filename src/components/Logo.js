import { Link } from "react-router-dom"
import React from 'react'

const Logo = () => {
  return (
    <Link to="/">
      <div className="px-2 py-1 relative flex justify-center w-fit items-center">
        <p className="text-[80px] absolute top-[-20px] opacity-45 z-[-1] text-red-200">Art</p>
        <p className="text-2xl font-thin mt-10">GENERATIVE</p>
      </div>
    </Link>
  )
}

export default Logo