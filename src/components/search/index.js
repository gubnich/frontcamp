import React from 'react';
import SearchFilter from '../searchFilter2';
import Button from '../button';
import './style.css';

export default ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className='searchBar'>
        <input className='searchInput' type='text' />
        <Button type='submit' value='search' className='searchButton' />
      </div>
      <div className='searchOptions'>
        <span className='searchCaption uppercase'>search by</span>
        <SearchFilter name='searchBy' value1='title' value2='genres' />
      </div>
    </form>
  )
}
