import React from 'react';
import SearchFilter from '../searchFilter';
import Button from '../button';
import './style.css';

export default (props) => {
  const { searchBy, onSubmit } = props
  const handleFilterChange = () => {
    onSubmit
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    console.log(e.target[0].value)
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
