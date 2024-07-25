import React from 'react'
import { FaInstagram,FaTwitterSquare,FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='bg-black w-full'>
        <div className='max-w-[1240px] mx-auto p-6 grid lg:grid-cols-3'>
            <div className='lg:col-span-1'>

        <h3 className='md:text-2xl text-xl nav-logo bodoni-moda-sc text-[#4ce1ff] '>
      REACT.
        </h3>
        <p className='my-2'>Consectetur incididunt culpa ex eu officia elit do cillum irure voluptate eiusmod adipisicing pariatur. </p>
        <div className='my-4 flex gap-3 md:justify-normal justify-between'>

            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaTwitterSquare size={24} />
        </div>
            </div>
            <div className='lg:ml-6 grid  grid-cols-3 lg:col-span-2'>

        <div>
            <h3 className='text-slate-400 font-medium text-lg'>Solutions</h3>
            <p>Analytics</p>
            <p>Marketing</p>
            <p>Commerce</p>
            <p>Insights</p>
        </div>
        <div>
            <h3 className='text-slate-400 font-medium text-lg'>Support</h3>
            <p>Pricing</p>
            <p>Documentation</p>
            <p>Guides</p>
            <p>API Status</p>
        </div>
        <div>
            <h3 className='text-slate-400 font-medium text-lg'>Company</h3>
            <p>About</p>
            <p>Blog</p>
            <p>Jobs</p>
            <p>Partners</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
