import React from 'react'
import TopBar from "./TopBar"

const Layout = ({children}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1400px] px-4 md:px-0 w-[100vw] overflow-hidden">
        <TopBar />
        {children}
      </div>
    </div>
  )
}

export default Layout