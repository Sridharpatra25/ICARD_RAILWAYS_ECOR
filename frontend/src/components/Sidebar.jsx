import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check login state from localStorage
    setIsLoggedIn(!!localStorage.getItem('isLoggedIn'));
    // Listen for login/logout events (optional, for cross-tab sync)
    const handleStorage = () => setIsLoggedIn(!!localStorage.getItem('isLoggedIn'));
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 bg-blue-50 text-gray-900 z-40">
      <nav className="p-4">
        <h2 className="text-lg font-semibold mb-4 mt-5 text-center border-b pb-2">Menu</h2>
        <ul className="space-y-3 text-sm">
          <li>
            <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-200">Home</Link>
          </li>
          <li>
            <Link to="/apply-ng" className="block px-3 py-2 rounded hover:bg-gray-200">Apply New Cards (NG)</Link>
          </li>
          <li>
            <Link to="/apply-gaz" className="block px-3 py-2 rounded hover:bg-gray-200">Apply New Cards (GAZ)</Link>
          </li>
          <li>
            <Link to="/status" className="block px-3 py-2 rounded hover:bg-gray-200">Application Status</Link>
          </li>
          {isLoggedIn && (
            <>
              <li>
                <Link to="/admin" className="block px-3 py-2 rounded hover:bg-gray-200 font-semibold text-blue-700">Admin dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="block w-full text-left px-3 py-2 rounded hover:bg-red-100 text-red-600 font-semibold">Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
