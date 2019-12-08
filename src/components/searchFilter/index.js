import React from 'react';
import './style.css';

export default ({ name, value1 = '', value2 = '' }) => {
  
  return (
    <span>
      <label>
        <input className='radioButton' type='radio' name={name} value={value1} defaultChecked />
        <span className='searchOption borderLeft'>{value1}</span>
      </label>
      <label>
        <input className='radioButton' type='radio' name={name} value={value2} />
        <span className='searchOption borderRight'>{value2}</span>
      </label>
    </span>
  )
}
