import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';

import './Header.css';
import Filter from '../Inputs/Filter/Filter';

function Header() {
  return (
    <>
      <header>
        <div className="brand">
          <Link to="/">
            <span>CountryData</span>
          </Link>
        </div>
        <div className="icons">
          <Filter />
          <FontAwesomeIcon icon={faGear} />
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
