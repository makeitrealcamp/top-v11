import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RouteContext } from '../App';

const Navbar = () => {
  const context = useContext(RouteContext);

  return (
    <>
      <nav className='navbar'>
        <ul>
      {context.routes.map((route, i) => (
        <li>
        <Link to={route.url }>{route.name}</Link>
        </li>
        ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;