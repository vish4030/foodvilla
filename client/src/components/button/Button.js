import React from 'react';
import './Button.css';

const Button = ({handleClick, btnName}) => {
  return (
    <button className='custom-btn' onClick={(e)=>handleClick(e)}>
        {btnName}
    </button>
  )
}

export default Button