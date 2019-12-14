import React from 'react';
import './style.css';
import Button from '../button';

export default (props) => {
  const { value1, value2 } = props;
  return (
    <div>
      <Button value={value1} left active />
      <Button value={value2} right />
    </div>
  )
}
