import React from 'react'
import Navbar from '../components/Navbar'

export const Signin = () => {
    return (
        
      <div 
      className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')"}}>
        <Navbar/>
        <div className=" bg-cover bg-amber-950 flex items-center justify-center h-full text-white text-center">
          <div className="my-8 max-w-md mx-auto p-8 bg-opacity-75 bg-black rounded-lg">
            <h1 className="text-4xl font-bold mb-4">Enter the Wispy Whiskey</h1>
            <p className="text-lg mb-8">Explore and discover new flavors of your favorite drank bro boss!</p>
          </div>
  
        </div>
      </div>
    )
  }
  
  export default Signin