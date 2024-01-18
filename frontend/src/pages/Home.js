// Base.js
import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path accordingly
import Dashboard from '../components/Dashboard'


export const Home = () => {

  return (
    <div>
      <Navbar/>
      <Dashboard/>
    </div>
  );
};

export default Home;