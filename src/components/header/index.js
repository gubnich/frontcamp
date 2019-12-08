import React from 'react';
import './style.css';
import Logo from '../logo';

export default ({ children }) => {
  return (
    <header className='header'>
      <div className='promo'></div>
      <div className='headerContent'>
        <Logo />
        <div className='headerContentInner'>
          {children}
        </div>
      </div>
    </header>
  )
}
