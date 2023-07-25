import React from 'react'
import TopBar from "./TopBar"

const Layout = ({children}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1400px] w-[100%]">
        <TopBar />
        {children}
      </div>
    </div>
  )
}

export default Layout