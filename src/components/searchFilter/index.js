import React from 'react';
import Button from '../button';
import './style.css';

export default (props) => {
  const { caption1, caption2, value1, value2, selected, onChange } = props;

  return (
    <div className='searchFilter'>
      <Button onClick={() => onChange(value1)} caption={caption1} value={value1} left active={selected === value1} />
      <Button onClick={() => onChange(value2)} caption={caption2} value={value2} right active={selected === value2} />
    </div>
  )
}
