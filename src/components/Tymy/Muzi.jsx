import React from 'react'
import Zapas from './Zapas'
import Vysledky from '../../pages/Vysledky/Vysledky'
const Muzi = () => {
  return (
    <div className='flex flex-col md:flex-row big:mx-48 lg:mx-12 mx-2 my-12 text-center text-lg'>
        <div className='flex flex-1 justify-center'>
            <div>
                <div className='mb-8'>
                    <h3 className='text-3xl font-bold mb-4'>
                        <span className='pt-2 border-t-[3px] border-main'>
                            VEDOUCÍ
                        </span>
                    </h3>
                    <p>Petr Balhárek</p>
                </div>
                <h3 className='text-3xl font-bold mb-4'>
                    <span className='border-t-[3px] pt-2 border-main'>
                        ZÁPASY III. TŘÍDY
                    </span>
                </h3>
                <div>
                    <Vysledky />
                </div>               
            </div>
        </div>
        <div className='flex flex-1 justify-center'>
            <h3 className='text-3xl font-bold mb-4'>
                <span className='border-t-[3px] pt-2 border-main'>
                    SOUPISKA
                </span>
            </h3>           
        </div>
    </div>
  )
}

export default Muzi