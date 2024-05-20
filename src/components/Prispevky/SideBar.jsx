import React from 'react'
import { IoIosFootball } from "react-icons/io";

const SideBar = () => {
  return (
    <div className='flex flex-col justify-between items-center w-2/3 big:w-1/2 md:block hidden'>
    <a href="https://www.fotbal.cz/souteze/turnaje/hlavni/58c71f20-c85c-4bc4-8e88-05bd2bb1423f">
      <div className="flex flex-col text-center px-12 big:px-16 items-center bg-gray-200 text-4xl py-12 h-auto">     
        <IoIosFootball className='w-36 h-36 text-main'/>    
        <h3 className='text-4xl hover:text-main transition-colors duration-300'>Aktuální výsledky</h3>         
      </div>
    </a>
    <div className='flex justify-center'>
      <img src="/facr.png" width={200} alt="" />
    </div>
    <div className='flex justify-center'>
      <img src="/ofs-novy-jicin.webp" width={200} alt="" />
    </div>
    <div className='flex justify-center'>
      <img src="/msk.gif" width={300} alt="" />
    </div>
  </div>
  
  )
}

export default SideBar