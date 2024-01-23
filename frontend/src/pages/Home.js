// Base.js
import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path accordingly
import Dashboard from '../components/Dashboard'


export const Home = () => {

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/background4.jpg')"}} >
      <Navbar/>
      <Dashboard className="flex items-center justify-center"/>
    </div>
  );
};

export default Home;