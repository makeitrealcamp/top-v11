import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    const routes = this.props.routes;
    return (
      <nav className='navbar'>
        <ul>
          { routes.map((route, index) => (
            <li key={index}>
              <Link to={route.url}>{route.name}</Link>
            </li>
          )) }
        </ul>
      </nav>
    );
  }
}

export default Navbar;