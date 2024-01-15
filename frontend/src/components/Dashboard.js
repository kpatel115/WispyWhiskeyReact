import React from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
    const handleLoadData = async () => {
        try {
          const response = await fetch('/whiskeys');
          const data = await response.json();
          console.log('Data loaded:', data);
        } catch (error) {
          console.error('Error loading data:', error);
        }
      };
    return (
        <div className=''>
            <h1>Dashboard</h1>
            <Navbar loadData={handleLoadData} />
        </div>
    );
};

export default Dashboard;