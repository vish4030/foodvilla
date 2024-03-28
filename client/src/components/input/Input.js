import React from 'react'

const Input = ({type,inputName,inputValue,onChange}) => {
  return (
    <input type={type}
        name={inputName}
        value={inputValue}
        onChange={onChange}
     />
  )
}

export default Input;