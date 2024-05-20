import React from 'react'

const AktualitaTop = ({nadpis}) => {
  return (
        <div className='flex justify-center w-full h-[60vh] relative bg-gray-400'>         
            <div className='px-8 absolute bottom-0 bg-gradient-to-t from-white h-36 w-full'></div>
            <h2 className='text-3xl font-bold text-center px-8 absolute bottom-10'>{nadpis}</h2>
        </div>
  )
}

export default AktualitaTop