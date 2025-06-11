import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import NGEmployeeForm from './pages/NGEmployeeForm';
import GazettedForm from './pages/GazettedForm';
import ApplicationStatus from './pages/ApplicationStatus';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <div className="h-16">
        <NavBar />
      </div>

      {/* Main layout: Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 text-white">
          <Sidebar />
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/apply-ng" element={<NGEmployeeForm />} />
            <Route path="/apply-gaz" element={<GazettedForm />} />
            <Route path="/status" element={<ApplicationStatus />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
