
import React from 'react';
import "./Simmer.css";

const Simmer = () => {
    const arr = Array(10).fill(1);
  return (
    <div className="container">
        <div className="row simmer">
            {arr.map((item,i)=> <div key={i+"a"} className='col-3 simmer-item'></div>)}
        </div>
    </div>
  )
}

export default Simmer