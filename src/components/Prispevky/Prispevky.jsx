import React from 'react';
import Prispevek from './Prispevek';
import SideBar from './SideBar';

const Prispevky = () => {
  const postIds = [0, 1, 2, 3];

  return (
    <div id="aktuality"className='flex justify-between big:mx-48 lg:mx-12 mx-2 my-12 gap-8'>
      <div>
        {postIds.map(id => (
          <Prispevek key={id} test={id} />
        ))}
      </div>
      
      <SideBar />
      
    </div>
  );
}

export default Prispevky;
