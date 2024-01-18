import React from 'react';

// import Button from './Button'
import { server_calls } from '../api/server';
import DataCard from './DataCard';

const Dashboard = () => {
  const getData = async () => {
    const result = await server_calls.get();
    console.log(result);
  }
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
            <button className='w-9 h-9 bg-slate-500 text-slate-300' onClick={getData}>Data</button>
            <DataCard className='m-9'/>
            
        </div>
    );
};

export default Dashboard;