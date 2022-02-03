import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Navbar from "../Navbar/";
import { UserContext } from '../App';

const Header = ({ company }) => {
  const context = useContext(UserContext);

  return (
    <header>
      <span id="company-name">{company}</span>
      <span className="flex"></span>
      { context.isAdmin ? <span>{ context.username }</span> : <span>Not an admin!</span>}
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
