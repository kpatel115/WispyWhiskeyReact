// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom'
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../auth/firebase';


// stuck on how to render the login and logoout and correct pages for react
const Navbar = () => {
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      
      const provider = new GoogleAuthProvider();
      try {
        // Sign in with Google Popup
        await signInWithPopup(auth, provider);
        // User is logged in, redirect to the dashboard
        navigate('/collection');
      } catch (error) {
        // Handle authentication error
        console.error('Authentication error:', error);
      }
    };
  
    const handleLogout = async () => {
  
      try {
        // Sign out the user
        await signOut(auth);
        // User is logged out, redirect to the login page
        navigate('/');
      } catch (error) {
        // Handle logout error
        console.error('Logout error:', error);
      }
    };
  return (
    <nav className="bg-amber-800 text-white sticky top-0 z-10">
      <div className='max-w-4x1 ,x-auto p-4 flex justify-between items-center'>
      <h2 className="text-white font-bold text-xl" >Enter the Wispy Whiskeys</h2>
      <ul className="hidden md:flex space-x-4">
           {
            !auth.currentUser ? 

            <button className="text-white hover:text-gray-300">
              <div>
                <Link to='/' onClick={handleLogin}>
                  Login
                </Link>
              </div>
            </button>

            : 
            <button className="text-white hover:text-gray-300">
              <div>
                <Link to='/' onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            </button>

           }
        </ul>
      {/* <Link to='/' className='text-3x1 font-medium'>
        Whiskey
      </Link>
      <div>
        <ul>
          <li>Info</li>
          <li>Contact</li>
        </ul>
      </div> */}
      </div>
      

    </nav>
  );
};

export default Navbar;