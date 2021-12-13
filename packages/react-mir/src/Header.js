import React from "react";
import Navbar from "./Navbar";

function Header(props) {
  return (
    <header>
      <span id="company-name">Make It Real</span>
      <span className="flex"></span>
      <Navbar routes={props.routes} />
    </header>
  );
}

export default Header;
