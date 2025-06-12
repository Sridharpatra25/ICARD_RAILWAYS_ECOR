import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl px-8 py-10 w-full max-w-2xl mt-20">
        <h1 className="text-3xl font-bold text-center text-emerald-700 mb-6">Admin Dashboard</h1>
        <p className="text-center text-gray-700 mb-4">Welcome, Admin! Here you can manage users, view applications, and perform administrative tasks.</p>
        {/* Add admin management features here */}
      </div>
    </div>
  );
};

export default AdminDashboard; 