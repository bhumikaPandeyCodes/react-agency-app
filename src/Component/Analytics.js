import React from 'react'
import laptop from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='bg-white w-full py-6 px-4 '>
    <div className='mx-auto  grid md:grid-cols-2 items-center'>
      <img src={laptop}
      alt='laptop-image'
      className='md:w-[500px] w-[400px] mx-auto ' />
      <div className='px-4'>

      <p className='text-nav-blue text-lg font-bold'>DATA ANALYTICS DASHBOARD</p>
      <h1 className='text-black font-bold md:text-3xl text-2xl py-1 '>Manage Data Analytics Centrally</h1>
      <p className='text-black font-normal py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
      <button className='w-[150px] my-2 py-3 mx-auto text-nav-blue bg-black rounded-md'>Get Started</button>
      </div>
      </div>
    </div>
  )
}

export default Analytics
