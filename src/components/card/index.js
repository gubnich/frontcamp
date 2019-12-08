import React from 'react';
import './style.css';

export default ({ poster_path, title, release_date, genres }) => {
  return (
    <figure className='card'>
      <div className='posterWrapper'>
        <img src={poster_path} alt='' className='poster' />
      </div>
      <figcaption className='caption'>
        <span className='cardTitle'>{title}</span>
        <span className='cardDate'>{new Date(release_date).getFullYear()}</span>
        <div className='cardGenres'>{genres.join(' & ')}</div>
      </figcaption>
    </figure>
  )
}
