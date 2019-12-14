import React from 'react';
import './style.css';

export default (props) => {
  const { type = 'button', value, className, active, left, right } = props;
  const preparedClassName = `
    button
    ${className}
    ${active ? 'active' : ''}
    ${left ? 'left' : ''}
    ${right ? 'right' : ''}
  `

  return (
    <input className={preparedClassName} type={type} value={value} />
  )
}
