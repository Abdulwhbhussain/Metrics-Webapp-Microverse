import React, { useState } from 'react';
import {
  NavLink, useNavigate, Link, useLocation,
} from 'react-router-dom';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import '../styles/Navbar.css';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

const Navbar = () => {
  const location = useLocation();
  const detailPage = location.pathname.includes('/details/');
  const searchPage = location.pathname.includes('/search/');
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <nav className={`flex md:flex ${detailPage || searchPage ? '' : 'flex-row'} md:flex-row justify-between px-2 md:px-10 py-5 items-center border-b-2 bg-sky-600`}>
      <Link to="/" className={`logo-container ${detailPage || searchPage ? 'hidden' : 'flex'}`}>
        <TiWeatherPartlySunny className="text-7xl text-white" />
      </Link>
      {detailPage || searchPage ? (
        <>
          <IoMdArrowRoundBack onClick={handleClick} className="text-4xl font-semibold text-white ms-10 border cursor-pointer border-white" />
          <div className="menu-container md:hidden block">
            <AiOutlineMenu className="text-white text-6xl pe-4" onClick={() => { setToggle(!toggle); }} />
          </div>
        </>
      ) : (
        <div className="menu-container md:hidden block">
          <AiOutlineMenu className="text-white text-6xl pe-4" onClick={() => { setToggle(!toggle); }} />
        </div>
      )}

      <ul className="md:flex  hidden">
        <li className="me-3"><NavLink to="/">Home</NavLink></li>
        <li className="me-3">
          <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">
            Weather API
          </a>
        </li>
        <li className="me-3">
          <a href="https://openweathermap.org/api/geocoding-api" target="_blank" rel="noopener noreferrer">
            City API
          </a>
        </li>
      </ul>
      <div className={`flex mobile-list-container absolute slide-in ${toggle ? 'left-0 top-0' : 'left-[-100%] top-0'} bg-sky-300 z-20 `}>
        <ul className="m-10">
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
        <RxCross1 className="text-4xl text-white my-7" onClick={() => setToggle(!toggle)} />
      </div>

    </nav>
  );
};

export default Navbar;
