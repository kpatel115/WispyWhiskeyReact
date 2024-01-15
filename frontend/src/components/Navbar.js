import React from 'react';
import Button from './Button';

const Navbar = ({loadData}) => {
  return (
    <nav className='bg-gray-800 p-4'> 
        <ul>
            <li>
                <Button onClick={loadData} className="mr-4">Load Data</Button>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;