import React from 'react';
import Odkazy from './Odkazy';
import Menu from './Menu';

const Header = () => {
  return (
    <div className=''>
      <div>
        <Odkazy />
      </div>
      <div className='lg:block hidden'>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
