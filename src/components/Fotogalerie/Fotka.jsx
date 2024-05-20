import React from 'react'

const Fotka = ({link}) => {
  return (
    <div >
        <img src={link} alt="foto" className='object-cover hover:scale-105 transition duration-300'/>
    </div>
  )
}

export default Fotka