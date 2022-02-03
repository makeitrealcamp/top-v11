import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RouteContext } from '../App';

const Navbar = () => {
  const routes = useContext(RouteContext);

  return (
    <nav className='navbar'>
      <ul>
        {routes.map((route, i) => (
          <li key={i}>
          <Link to={route.url }>{route.name}</Link>
          </li>
          ))}
      </ul>
    </nav>
  );
}

export default Navbar;