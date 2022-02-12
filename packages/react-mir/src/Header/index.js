import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { UserContext, ThemeColors, ThemeContext } from '../App';
import Navbar from '../Navbar/';
import ToggleButton from '../ToggleButton/'

const Header = ({ company }) => {
  const { user } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header style={ ThemeColors[theme] }>
      <span id="company-name" style={ ThemeColors[theme] }>{company}</span>
      <span className="flex"></span>
      <Navbar />
      <span className="flex"></span>
      { user.token ? <span>{ user.name } { user.surname }</span> : <span>Not an admin!</span>}
      <ToggleButton />
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