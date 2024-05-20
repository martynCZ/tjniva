import React from 'react'
import Kontakt from './Kontakt';

const Kontakty = () => {   
  return (
    <div className='big:px-48 lg:px-12 px-2 py-12 text-white'
      style={{ 
        backgroundImage: `url("/bg-zelene.png")`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        objectPosition: 'contain' }}
    >
        <h3 className='text-3xl font-bold mb-4'>
            <span className='border-t-[3px] pt-2 border-main'>
            KONTAKTY
            </span>
        </h3>
        <Kontakt />
    </div>
    
  )
}

export default Kontakty