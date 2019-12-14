import React, { useState } from 'react';
import './style.css';
import Button from '../button';

export default (props) => {
  const { value1, value2, selected, onClick } = props;
  const [active, setActive] = useState(true);
  const handleClick = (e) => {
    console.dir(e.target)
    setActive(!active)

  }

  return (
    <div className='searchFilter' onClick={onClick}>
      {/* <Button onClick={handleClick} value={value1} left active={active} /> */}
      {/* <Button onClick={handleClick} value={value2} right active={!active} /> */}
      <Button value={value1} left active={selected === value1} />
      <Button value={value2} right active={selected === value2} />
    </div>
  )
}
