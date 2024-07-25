import {React, useState} from 'react'
import { MdOutlineMenu,MdOutlineClose } from "react-icons/md";
const Navbar = () => {

  const [nav,setNav] = useState(false)


  return (
    <div className='flex py-3 justify-between items-center px-4 max-w-[1240px] mx-auto '>
        <h3 className='md:text-2xl text-xl nav-logo bodoni-moda-sc text-[#4ce1ff] '>
      REACT.
        </h3>
        <ul className='hidden md:flex  titillium-web-regular'>
          <li className='px-4'><a href='/'>Home</a></li>
          <li className='px-4'>Company</li>
          <li className='px-4'>Resource</li>
          <li className='px-4'>About</li>
          <li className='px-4'>Contact</li>
        </ul>
        <div className='block md:hidden'>  
          <div className={`cursor-pointer transition-transform duration-500 transform ${nav ? 'rotate-180' : 'rotate-0'} ease-in-out text-[#4ce1ff]`} onClick={()=>setNav(!nav)}>
            {!nav?<MdOutlineMenu size={22}/>:<MdOutlineClose size={22}/>}
        </div> 
        <ul className={` fixed left-0 top-0 pt-6 px-4 w-[30%] h-full titillium-web-regular border-r border-x-[#2e2e2e] bg-[#181818]  ease-in-out duration-500 transform ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
        <h3 className='text-2xl nav-logo bodoni-moda-sc px-4'>
        REACT.
        </h3>
          <li className='mt-4 p-4 underline-nav'>Home</li>
          <li className='p-4 underline-nav'>Company</li>
          <li className='p-4 underline-nav'>Resource</li>
          <li className='p-4 underline-nav'>About</li>
          <li className='p-4 underline-nav'>Contact</li>
        </ul>
        
        </div>
    </div>
  )
}

export default Navbar
