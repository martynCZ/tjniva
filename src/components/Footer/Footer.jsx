import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'
import SocialLink from '../SocialLink/SocialLink'
const Footer = () => {
    const ikony = [
        {
            icon: <FaFacebookF />,
        },
        {
            icon: <FaInstagram />,
        },
        {
            icon: <FaYoutube />,
        },
        {
            icon: <FaEnvelope />,
        },
    ]
  return (
    <div className='md:flex bg-white text-[#747575] big:px-48 lg:px-12 px-2 py-4 md:text-left text-center'>
        <div className='flex-1'>
            <p className='mb-1'>© 2022-2024 TJ NIVA Hladké Životice & <a className="underline "href="https://webkozar.cz/">Tvorba webových stránek Nový Jičín</a></p>
            <p className='mb-2'>Používání veškerého obsahu je bez souhlasu zakázáno</p>
        </div>
        <div className='flex flex-1 justify-center items-center text-2xl gap-4'>
                {ikony.map((item, index) => (
                    <div key={index} className='bg-[#206B07] hover:bg-main transition duration-400 p-4 pr-0 text-white'>
                        <SocialLink icon={item.icon}/>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Footer