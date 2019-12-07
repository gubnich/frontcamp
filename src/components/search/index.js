import React from 'react';
import './style.css';

export default () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input className='searchInput' type='text' />
      <button type='submit'>SEARCH</button>
      <div>
        <span>SEARCH BY</span>
        <label>
          <span>TITLE</span>
          <input type='radio' name='searchBy' value='title' defaultChecked />
        </label>
        <label>
          <span>GENRE</span>
          <input type='radio' name='searchBy' value='genre' />
        </label>
      </div>
    </form>
  )
}
