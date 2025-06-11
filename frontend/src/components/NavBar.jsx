import React from 'react';
import railwayLogo from '../assets/raillogo.png'; // replace with your image path

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 text-gray-800 shadow-md z-50 backdrop-blur-sm bg-opacity-70">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        
        {/* Left Section */}
        <div className="flex items-center space-x-4 cursor-pointer">
          <img 
            src={railwayLogo} 
            alt="Railway Logo" 
            className="h-14 w-14 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-lg md:text-2xl font-semibold tracking-wide select-none">
            East Coast Railway
          </h1>
        </div>

        {/* Center Title */}
        <h2 className="hidden md:block text-2xl font-bold text-gray-700 tracking-wide select-none">
          Online Form for I-Cards
        </h2>

        {/* Right Section */}
        <div className="flex items-center space-x-4 cursor-default">
          <p className="text-sm md:text-base italic select-none">
            Developed by IT Centre
          </p>
          <img 
            src={railwayLogo} 
            alt="IT Centre Logo" 
            className="h-12 w-12 rounded-full object-contain shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
