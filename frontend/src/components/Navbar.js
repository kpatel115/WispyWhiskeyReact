// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'
import urlFor from '../utility-function/urlFor'


const Navbar = ({isLoggedIn, loadData }) => {
  return (
    <nav className="navbar navbar-expand bg-light navbar-light py-3 fixed-top">
      <Link to={urlFor('site.home')} className="navbar-brand">
        Whiskey Collection
      </Link>
      {/* ... (rest of your navigation code) */}
      {isLoggedIn ? (
        <li className="nav-item">
          <Link to={urlFor('auth.logout')} className="nav-link">
            Logout
          </Link>
        </li>
      ) : (
        <>
          <li className="nav-item">
            <Link to={urlFor('auth.signin')} className="nav-link">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link to={urlFor('auth.signup')} className="nav-link">
              Sign Up
            </Link>
          </li>
          <li>
                <Button onClick={loadData} className="mr-4">Load Data</Button>
            </li>
        </>
      )}
      {/* ... (rest of your navigation code) */}
    </nav>
  );
};

export default Navbar;