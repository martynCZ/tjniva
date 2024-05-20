import React from 'react';

const strelci = [
  {
    jmeno: "Tomáš",
    prijmeni: "Růčka",
    goly: "8",
  },
  {
    jmeno: "Martin",
    prijmeni: "Rulíšek",
    goly: "8",
  },
  {
    jmeno: "Martin",
    prijmeni: "Kozar",
    goly: "8",
  }
];

const Strelci = () => {
  return (
    <div className='w-[380px] lg:block hidden'>
      <h3 className='text-3xl font-bold mb-12'>
        <span className='border-t-[3px] pt-2 border-main'>
          STATISTIKY HRÁČŮ
        </span>
      </h3>
      <table className='w-full'>
        <tbody>
          {strelci.map(({ jmeno, goly, prijmeni }, index) => {
            index++;
            return (
              <tr key={index} className='flex w-full border-y text-[18px] items-center text-center'>
                <td className='bg-black p-4 text-white w-10 border-none'>{index}.</td>
                <td className='ml-2 mr-10 border-none'>{jmeno} <span className='font-bold'>{prijmeni}</span></td>
                <td className='text-xl font-bold text-main flex-1 text-right border-none'>{goly}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Strelci;
