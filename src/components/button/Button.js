import React from 'react'

const Button = ({handleClick, btnName}) => {
  return (
    <button className='btn'
        onClick={(e)=>handleClick(e)}
    >
        {btnName}
    </button>
  )
}

export default Button