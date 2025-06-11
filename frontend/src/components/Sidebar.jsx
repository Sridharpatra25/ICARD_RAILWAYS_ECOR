import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 bg-white text-gray-900 z-40">
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
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
