import React from 'react'
import Logo from "./Logo"
import { Link, useLocation } from 'react-router-dom'

const TopBar = () => {
  const pathname = useLocation().pathname

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
              <Link to={item.path}>
                <p className="text-xl text-red-300 underline font-light px-2 hover:underline">{item.name}</p>
              </Link>
            )
          } else {
            return (
              <Link to={item.path}>
                <p className="text-xl font-light px-2 hover:underline">{item.name}</p>
              </Link>
            )
          }
        })}
      </div>
    </div>
  )
}

export default TopBar