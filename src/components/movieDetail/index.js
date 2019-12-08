import React from 'react';
import './style.css';

export default ({ poster_path = '', title = '', release_date = Date, genres, vote_average = 0, runtime, overview = '' }) => {
  return (
    <figure className='movieDetail'>
      <img src={poster_path} className='poster' alt='' />
      <figcaption className='caption'>
        <div>
          <span className='title'>{title}</span>
          <span className='raiting'>{vote_average.toFixed(1)}</span>
        </div>
        <div className='genres'>{genres && genres.join(' & ')}</div>
        <div className='time'>
          <span className='date'>{new Date(release_date).getFullYear()}</span><span> year</span>
          <span className='duration'>{runtime || 0}</span><span> min</span>
        </div>
        <div className='description'>{overview}</div>
      </figcaption>
    </figure>
  )
}
