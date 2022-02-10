import React, { useState, useContext } from "react";
import PropTypes from 'prop-types';
import Navbar from "../Navbar/";
import { UserContext, ThemeColors, ThemeContext } from '../App';

const Header = ({ company }) => {
  const { user } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    theme == 'dark' ? setTheme('light'): setTheme('dark')
  }

  return (
    <header style={ ThemeColors[theme] }>
      <span id="company-name" style={ ThemeColors[theme] }>{company}</span>
      <span className="flex"></span>
      <button onClick={ () => toggleTheme() }>Theme Toggle</button>
      <span className="flex"></span>
      { user.token ? <span>{ user.name } { user.surname }</span> : <span>Not an admin!</span>}
      <Navbar />
    </header>
  );
}

Header.propTypes = {
  company: PropTypes.string
}

Header.defaultProps = {
  company: 'Default Company'
}

export default Header;