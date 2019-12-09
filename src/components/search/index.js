import React from 'react';
import SearchFilter from '../searchFilter';
import './style.css';

export default ({id, onSubmit}) => {
  return (
    <form id={id} onSubmit={onSubmit}>
      <div className='searchBar'>
        <input className='searchInput' type='text' />
        <button className='searchButton' type='submit'>SEARCH</button>
      </div>
      <div className='searchOptions'>
        <span className='searchCaption'>SEARCH BY</span>
        <SearchFilter name='searchBy' value1='title' value2='genres' />
      </div>
    </form>
  )
}
