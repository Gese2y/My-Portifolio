import React from 'react';
import Logo from '../assets/logo.svg'
import { scroller } from 'react-scroll';
const Header = () => {
  const handleScroll = () => {
    scroller.scrollTo('contact', {
      smooth: true,
      duration: 500,
      offset: -70, // Adjust offset if needed
    });
  };
  return <header className=' py-8'>
    <div className='container mx-auto'>
<div className='flex justify-between items-center'>
  <a href='#'>
<img src={Logo} alt='' />
  </a>
  
  <button 
            onClick={handleScroll} 
            className='btn btn-sm'>
            Work With Me
          </button>
</div>
    </div>
  </header>;
};

export default Header;
