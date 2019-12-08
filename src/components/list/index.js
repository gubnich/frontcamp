import React from 'react';
import './style.css';
import Card from '../card';

export default ({ data = [] }) => {
  console.log('тута', data, typeof data)
  return (
    <ul className='list'>
      {data.map(item => (
        <a href={`film/${item.id}`}>
        <li key={item.id} className='listItem'>
          <Card {...item} />
        </li>
        </a>
      ))}
    </ul>
  )
}
