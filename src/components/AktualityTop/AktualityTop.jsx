import React from 'react'
import AktualitaTop from './AktualitaTop'

const AktualityTop = () => {
  return (
    <>
    <div className='sm:flex hidden justify-center border-b-2 border-gray-300'>
        <AktualitaTop nadpis={"TUTO SOBOTU LIGA MALÝCH MISTRŮ"} />
        <AktualitaTop nadpis={"ÚSPĚŠNÝ START DO JARNÍ ČÁSTI"} />
        <AktualitaTop nadpis={"PRVNÍ TRÉNINK MALÝCH TALENTŮ"} />
    </div>
    <div className='sm:hidden border-b-2 border-gray-300'>
        <AktualitaTop nadpis={"TUTO SOBOTU LIGA MALÝCH MISTRŮ"} />
    </div>
    </>
    
    
  )
}

export default AktualityTop