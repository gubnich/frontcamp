import React from 'react';
import './style.css';

const Button = (props) => {
  const { type = 'button', caption, value, className, active, left, right, onClick } = props;
  const preparedClassName =
    `button`
    + ` ${className || ''}`
    + `${active ? 'active ' : ''}`
    + `${left ? 'left ' : ''}`
    + `${right ? 'right' : ''}`

  return (
    <button onClick={onClick} className={preparedClassName} type={type} value={value}>{caption}</button>
  )
}

export default Button;
