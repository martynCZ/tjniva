import React from 'react'
import Fotka from './Fotka'

const Fotogalerie = () => {
  return (
    <div id="fotogalerie" className='big:px-48 px-12 my-12 text-white py-8' 
    style=
      {{ 
        backgroundImage: `url("/bg-zelene.png")`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        objectPosition: 'contain' 
      }}>
        <h3 className='text-3xl font-bold my-1'>
          <span className='border-t-[3px] pt-2 border-main'>
            FOTOGALERIE
          </span>
        </h3>
        <div className='flex md:flex-row flex-col justify-between gap-12'>
            <Fotka link="/foto1.webp"/>
            <Fotka link="/foto1.webp"/>
            <Fotka link="/foto1.webp"/>
        </div>
        <div className='text-center mt-8'>
          <a href="https://eu.zonerama.com/mmvj/Album/6260063?secret=2VPXo5X4rta00r6FNIrl0c65j">
          <button className='bg-main text-white px-6 py-2 text-lg hover:bg-dark-gray transition duration-500'>
            Zobrazit více fotografií
            </button>
          </a>
        </div>
    </div>
  )
}

export default Fotogalerie