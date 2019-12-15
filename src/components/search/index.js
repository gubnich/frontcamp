import React from 'react';
import Button from '../button';
import './style.css';

const Search = (props) => {
  const { onSubmit } = props

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    onSubmit(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='searchBar'>
        <input className='searchInput' type='text' />
        <Button type='submit' caption='search' className='searchButton' />
      </div>
    </form>
  )
}

export default Search;
