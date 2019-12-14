import React from 'react';
import './style.css';

export default (props) => {
  const { type = 'button', value, className, active, left, right, onClick } = props;
  const preparedClassName = 
    `button`
    +` ${className || ''}`
    +`${active ? 'active ' : ''}`
    +`${left ? 'left ' : ''}`
    +`${right ? 'right' : ''}`

  return (
    <input onClick={onClick} className={preparedClassName} type={type} value={value} />
  )
}
