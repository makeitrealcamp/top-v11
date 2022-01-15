import React from "react";
import PropTypes from 'prop-types';
import Navbar from "../Navbar/";

const Header = ({ company, routes }) => {
  return (
    <header>
      <span id="company-name">{company}</span>
      <span className="flex"></span>
      <Navbar routes={routes} />
    </header>
  );
}

Header.propTypes = {
  company: PropTypes.string,
  routes: PropTypes.array.isRequired
}

Header.defaultProps = {
  company: 'Default Company'
}

export default Header;
