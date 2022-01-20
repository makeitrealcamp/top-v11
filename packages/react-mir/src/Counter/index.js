import React, { useState, useEffect } from 'react';
import './style.scss';

const Counter = ({ name }) => {
  const [color, setColor] = useState('white');
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.document.title = `Count is currently ${count}`;
  }, [count])

  return (
    <div className='counter'>
      <h3 className='title'>
        counter: 
        <span style={ { color: color } }>{name}</span>
      </h3>
      <span id='value'>{count}</span>
      <div className='button-container'>
        <button className='btn' onClick={() => setCount(count+1)}>+</button>
        <button className='btn' id='reset' onClick={() => setCount(0)}>Reset</button>
        <button className='btn' onClick={() => setCount(count-1)}>-</button>
      </div>
    </div>
  );
}

export default Counter;
