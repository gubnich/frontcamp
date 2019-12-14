import React from 'react';
import SearchFilter from '../searchFilter';
import Button from '../button';
import './style.css';

export default ({id, onSubmit}) => {
  return (
    <form id={id} onSubmit={onSubmit}>
      <div className='searchBar'>
        <input className='searchInput' type='text' />
        {/* <button className='searchButton' type='submit'>SEARCH</button> */}
        <Button type='submit' value='search' className='searchButton' />
      </div>
      <div className='searchOptions'>
        <span className='searchCaption'>SEARCH BY</span>
        <SearchFilter name='searchBy' value1='title' value2='genres' />
      </div>
    </form>
  )
}
