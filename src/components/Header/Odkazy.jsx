import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiMenuAlt1 } from "react-icons/hi";

import SocialLink from '../SocialLink/SocialLink';
const Odkazy = () => {
  
  return (
    <div className="bg-white text-2xl lg:border-2 lg:border-gray-300 border-b-[2.5px] border-main flex justify-between items-center h-24 px-8 relative z-10">
      <div className='lg:hidden block w-[70px]'>
        <HiMenuAlt1 />
      </div>
      <div className="text-white flex items-center">
        <img src="/logo.svg" alt="Logo" className="lg:absolute lg:top-10 mx-auto max-w-20 lg:max-w-28 2xl:max-w-32" />
        <span className='lg:block hidden'>LOGO</span>
      </div>
      <h1 className="font-bold w-1/4 md:w-1/5 sm:text-2xl text-xl flex lg:justify-center justify-end">TJ NIVA</h1>
      <div className="flex flex-1 justify-around lg:flex hidden">
        <span className='hover:text-main'><SocialLink icon={<FaFacebookF />} label="Facebook" odkaz={"https://www.facebook.com/tjniva"} /></span>
        <span className='hover:text-main'><SocialLink icon={<FaInstagram />} label="Instagram" odkaz={"https://www.instagram.com/tjniva/"} /></span>
        <span className='hover:text-main'><SocialLink icon={<FaYoutube />} label="YouTube" odkaz={"https://www.youtube.com/results?search_query=tj+niva+hladk%C3%A9+%C5%BEivotice"}/></span>
      </div>
    </div>
  );
};


export default Odkazy;
