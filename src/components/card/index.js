import React from 'react';
import './style.css';

const Card = (props) => {
  const { poster_path, title, release_date, genres } = props;
  const date = new Date(release_date).getFullYear();
  const genresString = genres.join(' & ');

  return (
    <figure className='card'>
      <div className='posterWrapper'>
        <img src={poster_path} alt={`Poster of ${title}`} className='poster' title={title} />
      </div>
      <figcaption className='caption'>
        <span className='cardTitle'>{title}</span>
        <span className='cardDate'>{date}</span>
        <div className='cardGenres'>{genresString}</div>
      </figcaption>
    </figure>
  )
}

export default Card;
