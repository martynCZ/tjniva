import React from 'react'
import Strelci from './Strelci'
import Tabulka from './Tabulka'

const Statistiky = () => {
  return (
    <div id="tabulka" className='big:mx-48 mx-12 my-12 flex gap-16'>
      
        <Strelci />
      
        <div className='w-full'>
          <Tabulka />
        </div>
    </div>
  )
}

export default Statistiky