import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import './style.scss';

const ToggleButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);

  const toggleTheme = () => {
    setChecked(!checked);
    theme == 'dark' ? setTheme('light'): setTheme('dark')
  }

  return (
    <label className='switch'>
      <input 
        type='checkbox'
        checked={checked}
        onChange={toggleTheme} />
      <div className='indicator left'></div>
      <div className='indicator right'></div>
      <div className='button'></div>
  </label>
  );
}

export default ToggleButton;