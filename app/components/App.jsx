import React from 'react'
import SideBar from './Sidebar Section/SideBar'
import Body from './bodySection/Body'

const App = () => {
  return (
    <div className=' bg-gray-300 w-screen h-screen flex'>
      <SideBar  />
      <Body  />
    </div>
  )
}

export default App
