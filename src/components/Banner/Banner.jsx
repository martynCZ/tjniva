import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import SocialLink from '../SocialLink/SocialLink'

const Banner = () => {
  return (
    <div className='flex sm:flex-row sm:text-left text-center flex-col block items-center leading-10 big:px-48 px-12 py-12 text-white text-2xl w-full' 
        style={{ backgroundImage: `url("/bg-zelene.png")` 
      }}>
        <div className='flex-1 mb-4 sm:mb-0'>
            <p>Buďte stále v obraze v aktuálním dění v klubu!</p>
            <p>Sledujte nás na našem Facebooku!</p>
        </div>
        <div className='flex-1 text-4xl'>
            <SocialLink icon={<FaFacebookF />} label="Facebook" odkaz={"https://www.facebook.com/tjniva"} />
        </div>
    </div>
  )
}

export default Banner