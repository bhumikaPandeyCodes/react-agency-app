import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-black w-full py-10 px-6 '>
        <div className='mx-auto grid lg:grid-cols-3'>
            <div className="lg:col-span-2 my-4">
            <h1 className='my-1 py-2 mx-auto text-white font-bold lg:text-3xl md:text-2xl text-2xl'>Want tips & tricks to optimize your flow?</h1>
            <p className='text-white font-normal text-base'>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='lg:col-span-1 my-8 flex flex-col'>
            <div className=' flex flex-col md:flex-row gap-4 w-full'>

            <input className='px-3 py-2  bg-white outline-none rounded-md text-black' placeholder='Enter you remail'/>
            <button className='w-[120px] py-2 bg-nav-blue text-black rounded-md'>Notify Me</button>
            </div>
            <p className='mt-3 lg:mt-1'>We care about the protection of your data.</p>
            <span className='text-nav-blue underline cursor-pointer'>Privacy Policy</span>
            </div>
        </div>

      
    </div>
  )
}

export default Newsletter
