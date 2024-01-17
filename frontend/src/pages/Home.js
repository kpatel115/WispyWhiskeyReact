// Base.js
import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path accordingly
import Dashboard from '../components/Dashboard'


export const Home = (props) => {

  return (
    <div>
      <Navbar urlFor={props.urlFor} isLoggedIn={props.isLoggedIn} />
      {props.children}
      <Dashboard/>
    </div>
  );
};

export default Home;