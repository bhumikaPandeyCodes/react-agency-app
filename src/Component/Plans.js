import React from 'react'
import SingleUser from '../assets/single.png'
import Partnership from '../assets/double.png'
import GroupAccount from '../assets/triple.png'
const Plans = () => {
  return (
    <div className='bg-white w-full p-[4rem] '>
      <div className='max-w-[1240px]  text-black mx-auto grid grid-cols-1 md:grid-cols-3 gap-12'>
        <div className='w-full shadow-xl  p-5 rounded-md flex flex-col items-center hover:bg-[#F0F2F4] hover:scale-105 duration-300 '>
            <img src={SingleUser} className='w-20 mt-[-3rem]'/>
            <h2 className='font-bold text-3xl py-4'>Single User</h2>
            <h1 className='font-bold text-5xl py-2'>$149</h1>
            <p className='border-b font-medium py-3 '>500 GB Storage</p>
            <p className='border-b font-medium py-3'>1 User Allowed</p>
            <p className='border-b font-medium py-3'>Send up to 2 GB</p>
            <button className='w-[150px] my-4 py-3 mx-auto bg-nav-blue text-black rounded-md hover:bg-black hover:text-nav-blue'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl  p-5 rounded-md flex flex-col items-center hover:bg-[#F0F2F4] hover:scale-105 duration-300'>
            <img src={Partnership} className='w-20 mt-[-3rem]'/>
            <h2 className='font-bold text-3xl py-4'>Partnership</h2>
            <h1 className='font-bold text-5xl py-2'>$199</h1>
            <p className='border-b font-medium py-3 '>1 TB Storage</p>
            <p className='border-b font-medium py-3'>3 User Allowed</p>
            <p className='border-b font-medium py-3'>Send up to 10 GB</p>
            <button className='w-[150px] my-4 py-3 mx-auto bg-nav-blue text-black rounded-md hover:bg-black hover:text-nav-blue'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl  p-5 rounded-md flex flex-col items-center hover:bg-[#F0F2F4] hover:scale-105 duration-300'>
            <img src={GroupAccount} className='w-20 mt-[-3rem]'/>
            <h2 className='font-bold text-3xl py-4'>Group Account</h2>
            <h1 className='font-bold text-5xl py-2'>$299</h1>
            <p className='border-b font-medium py-3 '>5 TB Storage</p>
            <p className='border-b font-medium py-3'>10 User Allowed</p>
            <p className='border-b font-medium py-3'>Send up to 20 GB</p>
            <button className='w-[150px] my-6 py-3 mx-auto bg-nav-blue text-black rounded-md hover:bg-black hover:text-nav-blue'>Start Trial</button>
        </div>
        
      </div>
    </div>
  )
}

export default Plans
