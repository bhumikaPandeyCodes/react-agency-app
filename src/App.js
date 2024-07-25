import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Analytics from './Component/Analytics'
import Newsletter from './Component/Newsletter'
import Plans from './Component/Plans'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Analytics/>
      <Newsletter/>
      <Plans />
      <Footer/>
    </div>
  )
}

export default App
