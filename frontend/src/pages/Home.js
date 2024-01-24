// Base.js
import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path accordingly
import Dashboard from '../components/Dashboard'


export const Home = () => {

  return (
    <div className="h-full w-full bg-cover bg-center flex-column items-center justify-center" style={{ backgroundImage: "url('/background4.jpg')"}} >
      <Navbar className="flex-row justify-between items-center"/>
      <Dashboard className="flex-column items-center justify-center"/>
    </div>
  );
};

export default Home;