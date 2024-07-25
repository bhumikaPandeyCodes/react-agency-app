import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div id='Home'>
    <div className='max-w-[1000px] h-screen mt-48 mx-auto text-center flex flex-col'>
      <p className='md:text-xl sm:text-md text-sm bodoni-moda-sc text-nav-blue font-bold'>GROWING WITH DATA ANALYTICS</p>
      <h1 className='md:text-8xl text-6xl  py-2 font-bold'>Grow with data</h1>
      <div className='flex justify-center items-center'>
      <p className='md:text-4xl py-3 sm:text-2xl text-xl font-semibold' >Fast, flexible financing for</p>
      <ReactTyped 
      className='md:text-4xl py-3 sm:text-2xl text-xl font-semibold pl-3'
      strings={["BTB","BTC","SASS"]}
      typeSpeed={150}
      backSpeed={100}
      loop
      />
      </div>
      <p className='py-2 md:text-xl sm:text-lg text-base  text-[#9d9d9d]'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platform</p>
      <button className='py-3 mt-5 text-[#141414] bg-nav-blue w-[200px] mx-auto font-medium rounded-md'>Get Started</button>
    </div>
    </div>
  )
}

export default Hero
