import React from 'react';
import './style.css';
import Card from '../card';

export default ({ data = [] }) => {
  return (
    <ul className='list'>
      {data.map(item => (
        <a key={item.id} href={`film/${item.id}`}>
          <li className='listItem'>
            <Card {...item} />
          </li>
        </a>
      ))}
    </ul>
  )
}
