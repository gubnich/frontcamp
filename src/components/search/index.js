import React from 'react';
import SearchFilter from '../searchFilter';
import './style.css';

export default () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='searchBar'>
        <input className='searchInput' type='text' />
        <button className='searchButton' type='submit'>SEARCH</button>
      </div>
      <div className='searchOptions'>
        <span className='searchCaption'>SEARCH BY</span>
        <SearchFilter name='searchBy' value1='title' value2='genre' />
      </div>
    </form>
  )
}
