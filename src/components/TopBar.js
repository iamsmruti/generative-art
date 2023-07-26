import React from 'react'
import Logo from "./Logo"
import { useLocation, useNavigate } from 'react-router-dom'

const TopBar = () => {
  const pathname = useLocation().pathname
  const navigate = useNavigate()

  const menuItems = [
    {
      name: 'Gallery',
      path: '/gallery'
    },
    {
      name: 'About',
      path: '/about'
    }
  ]

  return (
    <div className="flex justify-between py-1 border-b-[1px] mb-5">
      <Logo />

      <div className="flex items-center">
        {menuItems.map((item) => {
          if(item.path === pathname){
            return (
              <div className="cursor-pointer" onClick={() => {
                navigate(item.path)
                navigate(0)
              }}>
                <p className="text-xl text-red-300 underline font-light px-2 hover:underline">{item.name}</p>
              </div>
            )
          } else {
            return (
              <div className="cursor-pointer" onClick={() => {
                navigate(item.path)
                navigate(0)
              }}>
                <p className="text-xl font-light px-2 hover:underline">{item.name}</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default TopBar