import React, { useState } from 'react'
import { FaPlusSquare } from "react-icons/fa";


const Info = () => {
    const [open, setOpen] = useState(0);
    const handleOpen = () => {
      setOpen(!open);
    }
      
  return (
    <div className='px-4 py-8 flex flex-col items-center justify-center mx-auto text-center leading-8 sm:px-0 sm:w-2/3 w-full text-[19px]'>
        <p>
        Jsme amatérský fotbalový klub ze Severní Moravy s dlouholetou tradicí, založen roku 1950. 
        Po 3-leté pauze, kdy klub přestal fungovat, jsme se v roce 2018 vrátili opět na fotbalovou 
        mapu Novojičínska!
        </p>
        <p className='hidden md:block'>Nejdříve mužstvo žáků a to od sezóny 2018/2019 hrající OS starších žáků.
            Poté se přihlásilo do IV. třídy i mužstvo mužů a to od sezóny 2019/2020, kterou v sezoně 2022/23 vyhrálo!
            Nyní hraje tým mužů III. třídu OFS Nový Jičín
        </p> 
       <div className='md:hidden'>
        <div onClick={handleOpen} className='flex items-center gap-4 font-bold hover:text-main transition duration-500'>
          <FaPlusSquare className={open ? 'text-2xl text-main' : 'text-2xl'}/>
          <button >
            Zobrazit více
          </button>
        </div>
          {open ? 
          <p>Nejdříve mužstvo žáků a to od sezóny 2018/2019 hrající OS starších žáků.
            Poté se přihlásilo do IV. třídy i mužstvo mužů a to od sezóny 2019/2020, kterou v sezoně 2022/23 vyhrálo!
            Nyní hraje tým mužů III. třídu OFS Nový Jičín
          </p> 
          : null}
      </div>
    </div>
  )
}

export default Info