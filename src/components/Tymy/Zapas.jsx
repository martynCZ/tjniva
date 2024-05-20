import React from 'react'

const Zapas = ({hoste, domaci }) => {
  return (
    <>
    <div className='flex justify-between items-center py-4 border-b'>
        <img src={domaci} alt="" width={64}/>
        <p className='text-4xl font-bold'></p>
        <img src={hoste} alt="" width={64} />
    </div>
    
    </>
  )
}

export default Zapas