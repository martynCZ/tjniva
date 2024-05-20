import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Muzi from "./Muzi";

const Tymy = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleActive = (value) => {
      setActiveTab(value);
    }

  return (
    <div className="border-b-[3px]">
        <h3 className='text-3xl font-bold mb-4 pb-2 text-center '>
            <span className='border-t-[3px] pt-2 px-16 border-main'>
                TÝMY
            </span>
        </h3>
        <div className='flex justify-center text-center w-full text-xl gap-8 border-y mb-10'>
          <div>
            <h4 onClick={() => handleActive(1)} className={activeTab === 1 ? 'text-main border-b-[3px] border-main py-2 cursor-pointer' : 'py-2 cursor-pointer'}>Muži</h4>            
          </div>
          <div>
            <h4 onClick={() => handleActive(2)} className={activeTab === 2 ? 'text-main border-b-[3px] border-main py-2 cursor-pointer' : 'py-2 cursor-pointer'}>Žáci</h4>            
          </div>
        </div>
        {activeTab === 1 ?
          <div>
            <Muzi />     
          </div> :
          <div className="flex justify-center text-center">
          test2      
        </div>}
    </div>
  );
}

export default Tymy;
