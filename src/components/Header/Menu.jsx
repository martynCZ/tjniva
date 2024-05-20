import React from 'react'
import Odkaz from './Odkaz'

const Menu = () => {
  return (
    <div >
        <div className='flex bg-white text-2xl px-6 border-b-4 border-main justify-between items-center'>
            <div className='flex ml-[11vw]'>
                <Odkaz nazev="AKTUALITY" odkaz="/#aktuality" border="border-r-2"/>
                <Odkaz nazev="TABULKA" odkaz="/#tabulka" border="border-r-2"/>
                <Odkaz nazev="FOTOGALERIE" odkaz="/#fotogalerie" border="border-r-2"/>
                <Odkaz nazev="TÝMY" odkaz="/#tymy" border="border-r-2"/>
                <Odkaz nazev="KONTAKTY" odkaz="/#fotogalerie" />
            </div>
        </div>
    </div>
  )
}

export default Menu