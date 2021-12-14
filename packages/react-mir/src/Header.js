import React from "react";
import Navbar from "./Navbar";

function Header({ company = 'Company', routes = [] }) {
  return (
    <header>
      <span id="company-name">{company}</span>
      <span className="flex"></span>
      <Navbar routes={routes} />
    </header>
  );
}

export default Header;
