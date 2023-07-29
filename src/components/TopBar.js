import React, { useState } from 'react'
import Logo from "./Logo"
import { useLocation, useNavigate } from 'react-router-dom'
import { RiMenu3Line } from 'react-icons/ri'
import { GrClose } from 'react-icons/gr'
import { useLockBodyScroll } from "@uidotdev/usehooks";

const TopBar = () => {
  const pathname = useLocation().pathname
  const navigate = useNavigate()

  const [navOpen, setNavOpen] = useState(false)

  const handleToggleNav = () => {
    setNavOpen((p) => !p)
  }

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

      <div className="hidden md:flex items-center">
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

      <div className="flex md:hidden items-center">
        <RiMenu3Line onClick={handleToggleNav} className="text-2xl" />
      </div>
      
      {navOpen ? <BackDrop onClick={handleToggleNav} /> : <></>}

      {navOpen ? (
        <div className="translate-x-[0] h-[100vh] bg-white transition-all duration-200 ease-in-out absolute z-20 right-0 top-0">
          <MobileNav
            onClick={handleToggleNav} 
            menuItems={menuItems} 
            pathname={pathname} 
            navigate={navigate} 
          />
        </div>
      ) : (
        <div className="translate-x-[350px] h-[100vh] bg-white transition-all duration-200 ease-in-out absolute right-[-300px]">
          
        </div>
      )}
    </div>
  )
}

export default TopBar

export const MobileNav = ({ onClick, menuItems, pathname, navigate }) => {
  useLockBodyScroll();
  return (
    <div className="h-[100%] w-[250px] bg-white">
      <div className="flex justify-end p-4 pt-8">
        <GrClose onClick={onClick} className="text-2xl" />
      </div>

      <div className="pl-10">
        {menuItems.map((item) => {
            if(item.path === pathname){
              return (
                <div className="cursor-pointer my-2" onClick={() => {
                  onClick()
                  navigate(item.path)
                  navigate(0)
                }}>
                  <p className="text-xl text-red-300 underline font-light px-2 hover:underline">{item.name}</p>
                </div>
              )
            } else {
              return (
                <div className="cursor-pointer my-2" onClick={() => {
                  onClick()
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

export const BackDrop = ({ onClick }) => {
  return (
    <div onClick={onClick} className="bg-black md:hidden block w-[100vw] left-0 top-0 h-[100vh] absolute opacity-20 z-5" />
  )
}