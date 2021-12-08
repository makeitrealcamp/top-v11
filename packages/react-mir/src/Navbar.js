import React from "react";

class Navbar extends React.Component {
  render() {
    const routes = this.props.routes;
    return (
      <nav className='navbar'>
        <ul>
          { routes.map((route, index) => (
            <li key={index}>
              <a href={route.url}>
                {route.name}
              </a>
            </li>
          )) }
        </ul>
      </nav>
    );
  }
}

export default Navbar;