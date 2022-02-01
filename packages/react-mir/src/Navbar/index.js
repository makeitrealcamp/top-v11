import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CountContext } from '../App';

const Navbar = ({routes}) => {
  const context = useContext(CountContext);

  return (
    <>
      <p className="context-count">Count: {context.count}</p>
      <button
        type='button'
        onClick={() => context.setCount(context.count +1)}>
        +1
      </button>
      <nav className='navbar'>
        <ul>
          { routes.map((route, index) => (
            <li key={index}>
              <Link to={route.url}>{route.name}</Link>
            </li>
          )) }
        </ul>
      </nav>
    </>
  );
}

export default Navbar;