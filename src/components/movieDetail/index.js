import React from 'react';
import './style.css';

const MovieDetail = (props) => {
  const { poster_path = '', title = '', release_date, genres, vote_average = 0, runtime, overview = '' } = props;
  const date = release_date && new Date(release_date).getFullYear();
  const rating = vote_average.toFixed(1);
  const genresString = genres && genres.join(' & ');

  return (
    <article className='movieDetail'>
      <img src={poster_path} className='poster' alt={`Poster of ${title}`} title={title} />
      <div className='details'>
        <div>
          <span className='title'>{title}</span>
          <span className='raiting'>{rating}</span>
        </div>
        <div className='genres'>{genresString}</div>
        <div className='time'>
          <span className='date'>{date}</span><span> year</span>
          <span className='duration'>{runtime || 0}</span><span> min</span>
        </div>
        <p className='description'>{overview}</p>
      </div>
    </article>
  )
}

export default MovieDetail;
