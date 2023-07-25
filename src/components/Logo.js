import { Link, useNavigate } from "react-router-dom"
import React from 'react'

const Logo = () => {
  const navigate = useNavigate()
  return (
    <div onClick={() => {
      navigate('/')
      navigate(0)
    }}>
      <div className="px-2 py-1 relative flex justify-center w-fit items-center">
        <p className="text-[80px] absolute top-[-20px] opacity-45 z-[-1] text-red-200">Art</p>
        <p className="text-2xl font-thin mt-10">GENERATIVE</p>
      </div>
    </div>
  )
}

export default Logo