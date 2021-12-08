import React from "react";
import Navbar from "./Navbar";

class Header extends React.Component {
  render() {
    const routes = this.props.routes;
    return (
      <header>
          <span id='company-name'>Make It Real</span>
          <span className='flex'></span>
          <Navbar routes={routes} />
        </header>
    );
  }
}

export default Header;