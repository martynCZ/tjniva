import React, { useEffect, useState } from 'react';
import * as data from './tableData.json'

const Tabulka = () => {
  const tabulka = data.tableHTML.replace(/(<h3[^>]*>.*?<\/h3>)/g, '')
  .replace(/class=\"[^"]*\"/g, '')
  .replace("+","V")
  .replace("-","P")
  .replace("+","V")
  .replace("Záp.", "Zápasy")
  .replace("Penalty V", "Penalty +")
  .replace("Rk.", "#");

  return (
    <div className='w-full overflow-hidden'>
      <style>
      {`
      th{
        padding: 12px;
      }
      td{
        border-bottom: 1px solid #DFDFDF;
        padding: 6px 0 6px 0;
      }
      tr td:first-child{
        background-color: #141617;
        color: white;
      }
  `}
      </style>
      <h3 className='text-3xl font-bold'>
        <span className='border-t-[3px] pt-2 border-main'>
          TABULKA III. TŘÍDY
        </span>      
      </h3>
      <div className="text-lg text-center" dangerouslySetInnerHTML={{__html: tabulka.slice(0,2000)}} />
     
    </div>
  );
};

export default Tabulka;
