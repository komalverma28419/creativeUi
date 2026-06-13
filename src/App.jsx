import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Empowered from './components/Empowered'

const App = () => {
  const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme"):"light")
  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <Empowered/>
    </div>
  )
}



export default App
