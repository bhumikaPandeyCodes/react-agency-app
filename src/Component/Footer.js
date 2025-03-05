import React from 'react'
import { FaInstagram,FaTwitterSquare,FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='bg-black w-full'>
        <div className='max-w-[1240px] mx-auto p-6 grid lg:grid-cols-3'>
            <div className='lg:col-span-1'>

        <h3 className='md:text-2xl text-xl nav-logo rajdhani-semibold font-bold text-[#4ce1ff] '>
      REACT.
        </h3>
        <p className='my-2'>Consectetur incididunt culpa ex eu officia elit do cillum irure voluptate eiusmod adipisicing pariatur. </p>
        <div className='my-4 flex gap-3 md:justify-normal justify-between'>

            <FaFacebook size={24} className='cursor-pointer'/>
            <FaInstagram size={24} className='cursor-pointer'/>
            <FaTwitterSquare size={24} className='cursor-pointer'/>
        </div>
            </div>
            <div className='lg:ml-6 grid  grid-cols-3 lg:col-span-2'>

        <div>
            <h3 className='text-slate-400 font-medium text-lg'>Solutions</h3>
            <p className='cursor-pointer'>Analytics</p>
            <p className='cursor-pointer'>Marketing</p>
            <p className='cursor-pointer'>Commerce</p>
            <p className='cursor-pointer'>Insights</p>
        </div>
        <div>
            <h3 className='text-slate-400 font-medium text-lg'>Support</h3>
            <p className='cursor-pointer'>Pricing</p>
            <p className='cursor-pointer'>Documentation</p>
            <p className='cursor-pointer'>Guides</p>
            <p className='cursor-pointer'>API Status</p>
        </div>
        <div>
            <h3 className='text-slate-400 font-medium text-lg'>Company</h3>
            <p className='cursor-pointer'>About</p>
            <p className='cursor-pointer'>Blog</p>
            <p className='cursor-pointer'>Jobs</p>
            <p className='cursor-pointer'>Partners</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
