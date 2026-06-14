import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Empowered from './components/Empowered'
import Services from './components/Services'
import OurWork from './components/OurWork'
import OurTeam from './components/OurTeam'
import ContactUs from './components/ContactUs'
import {Toaster} from 'react-hot-toast'

const App = () => {
  const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme"):"light")
  return (
    <div className='dark:bg-black relative'>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <Empowered/>
      <Services/>
      <OurWork/>
      <OurTeam/>
      <ContactUs/>
    </div>
  )
}



export default App
