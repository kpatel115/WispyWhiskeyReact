// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


// stuck on how to render the login and logoout and correct pages for react
const Navbar = () => {
  return (
    <nav className="bg-slate-500">
      <Link to='/' className='bg-slate-400'>
        Whiskey
      </Link>
      <div>
        <ul>
          <li>Info</li>
          <li>Contact</li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;