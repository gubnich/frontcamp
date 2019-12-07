import React from 'react';
import './style.css';
import Logo from '../logo';
import Search from '../search';

export default () => {
  return (
    <header className='header'>
      <div className='promo'></div>
      <div className='headerContent'>
        <Logo />
        <div className='headerContentInner'>
          <h1 className='slogan'>Find your movie</h1>
          <Search />
        </div>
      </div>
    </header>
  )
}
