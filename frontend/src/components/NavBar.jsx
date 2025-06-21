import React from 'react';
import railwayLogo from '../assets/raillogo.png';

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-blue-50 shadow z-50 flex items-center border-b border-blue-100">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6">
        {/* Left: Logo and Title */}
        <div className="flex items-center gap-3">
          <img 
            src={railwayLogo} 
            alt="Railway Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold text-gray-800 tracking-wide select-none">
            East Coast Railway
          </span>
        </div>
        {/* Center: Page Title */}
        <span
          className="hidden md:block text-xl font-bold text-blue-800 tracking-wide select-none"
        >
          Online Form for I-Cards
        </span>
        {/* Right: IT Centre + Logo */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-blue-700 italic select-none font-medium">
            Developed by IT Centre
          </span>
          <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-blue-100 border border-blue-300">
            <img 
              src={railwayLogo} 
              alt="IT Centre Logo" 
              className="h-7 w-7 object-contain"
            />
          </span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
