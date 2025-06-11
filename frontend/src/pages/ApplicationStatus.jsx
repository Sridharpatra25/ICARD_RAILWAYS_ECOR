import React, { useState, useEffect } from 'react';

const ApplicationStatus = () => {
  const [gazStatus, setGazStatus] = useState({ applicationId: '', dob: '' });
  const [ngStatus, setNgStatus] = useState({ applicationId: '', dob: '' });

  const handleGazChange = (e) => {
    const { name, value } = e.target;
    setGazStatus(prev => ({ ...prev, [name]: value }));
  };

  const handleNgChange = (e) => {
    const { name, value } = e.target;
    setNgStatus(prev => ({ ...prev, [name]: value }));
  };

  const handleGazSubmit = (e) => {
    e.preventDefault();
    console.log("GAZ status submitted:", gazStatus);
  };

  const handleNgSubmit = (e) => {
    e.preventDefault();
    console.log("NG status submitted:", ngStatus);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="flex flex-1 items-center justify-center px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl justify-center mt-28">
        {/* Gazetted Section */}
        <form
          onSubmit={handleGazSubmit}
          className="bg-green-50 border border-green-300 p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-xl font-semibold text-green-800 mb-4">Application Status (Gaz)</h2>
          <input
            type="text"
            name="applicationId"
            value={gazStatus.applicationId}
            onChange={handleGazChange}
            placeholder="Enter Application ID"
            className="input mb-4"
            required
          />
          <input
            type="date"
            name="dob"
            value={gazStatus.dob}
            onChange={handleGazChange}
            className="input mb-6"
            required
          />
          <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white w-full">
            Submit
          </button>
        </form>

        {/* Non-Gazetted Section */}
        <form
          onSubmit={handleNgSubmit}
          className="bg-red-50 border border-red-300 p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-xl font-semibold text-red-800 mb-4">Application Status (Non Gaz)</h2>
          <input
            type="text"
            name="applicationId"
            value={ngStatus.applicationId}
            onChange={handleNgChange}
            placeholder="Enter Application ID"
            className="input mb-4"
            required
          />
          <input
            type="date"
            name="dob"
            value={ngStatus.dob}
            onChange={handleNgChange}
            className="input mb-6"
            required
          />
          <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationStatus;
