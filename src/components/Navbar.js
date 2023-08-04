import React, { useState } from 'react';
import {
  NavLink, useLocation,
} from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const detailPage = location.pathname.includes('/details/');
  const searchPage = location.pathname.includes('/search/');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`flex md:flex ${detailPage || searchPage ? '' : 'flex-row'} md:flex-row justify-between px-2 md:px-10 py-5 items-center border-b-2 bg-sky-600`}>
      <ul className="m-10 header">
        <li className="my-5 text-4xl"><NavLink to="/" onClick={() => setToggle(!toggle)}>Home</NavLink></li>
        <li className="my-5 text-4xl">
          <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">
            Weather API
          </a>
        </li>
        <li className="my-5 text-4xl">
          <a href="https://openweathermap.org/api/geocoding-api" target="_blank" rel="noopener noreferrer">
            City API
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
