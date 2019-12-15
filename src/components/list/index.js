import React from 'react';
import './style.css';
import Card from '../card';

const List = (props) => {
  const { data } = props;
  return (
    <ul className='list'>
      {data.map(item => (
        <li key={item.id} className='listItem'>
          <a href={`film/${item.id}`}>
            <Card {...item} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default List;
