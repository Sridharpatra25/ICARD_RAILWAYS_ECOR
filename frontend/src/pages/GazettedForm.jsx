import React, { useState } from 'react';

const GazettedForm = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    designation: '',
    ruidNo: '',
    dob: '',
    department: '',
    billUnit: '',
    station: 'BHUBANESWAR',
    residentialAddress: '',
    rlyContactNumber: '',
    mobileNumber: '',
    reason: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    photo: null,
    signature: null,
    hindiName: null,
    hindiDesignation: null,
  });

  const [familyMembers, setFamilyMembers] = useState([]);
  const [newFamily, setNewFamily] = useState({
    name: '',
    bloodGroup: '',
    relationship: 'SELF',
    dob: '',
    identificationMark: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [applicationId, setApplicationId] = useState('');

  const departments = ["ACCOUNTS", "COMMERCIAL", "ELECTRICAL", "ENGINEERING", "GA", "MECHANICAL", "MEDICAL", "OPERATING", "PERSONNEL", "RRB", "S&T", "SAFETY", "SECURITY", "STORES"];
  const billUnits = ["3101001", "3101002", "3101003", "3101004", "3101010", "3101023", "3101024", "3101025", "3101026", "3101027", "3101065", "3101066", "3101165", "3101166", "3101285", "3101286", "3101287", "3101288", "3101470"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files[0] }));
  };

  const handleFamilyChange = (e) => {
    const { name, value } = e.target;
    setNewFamily(prev => ({ ...prev, [name]: value }));
  };

  const addFamilyMember = () => {
    if (newFamily.name.trim()) {
      setFamilyMembers([...familyMembers, newFamily]);
      setNewFamily({ name: '', bloodGroup: '', relationship: 'SELF', dob: '', identificationMark: '' });
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

    // Append form fields
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    // Append family members as JSON string
    data.append('familyMembers', JSON.stringify(familyMembers));

    const response = await fetch('https://icard-railways-ecor.onrender.com/api/gazetted/register', {
      method: 'POST',
      body: data
    });

    const result = await response.json();

    if (response.ok) {
      setApplicationId(result.applicationId);
      setSubmittedData({ ...formData, familyMembers });
      setShowModal(true);
    } else {
      alert(`Error: ${result.message}`);
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert('Failed to submit form.');
  }
};

  return (
    <>
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-xl space-y-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-800">Employee Registration Form (Gazetted)</h2>

        {/* Employee Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="employeeName" value={formData.employeeName} onChange={handleChange} placeholder="Employee Name *" className="input" />
          <input name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation *" className="input" />
          <input name="ruidNo" value={formData.ruidNo} onChange={handleChange} placeholder="RUID No. *" className="input" />
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="input" />
          <select name="department" value={formData.department} onChange={handleChange} className="input">
            <option>[SELECT DEPARTMENT]</option>
            {departments.map(dep => <option key={dep}>{dep}</option>)}
          </select>
          <input name="station" value={formData.station} onChange={handleChange} placeholder="Station *" className="input" />
          <select name="billUnit" value={formData.billUnit} onChange={handleChange} className="input">
            <option>[SELECT BILL UNIT]</option>
            {billUnits.map(unit => <option key={unit}>{unit}</option>)}
          </select>
          <input name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Mobile Number *" className="input" />
          <input name="rlyContactNumber" value={formData.rlyContactNumber} onChange={handleChange} placeholder="Railway Contact No." className="input" />
          <textarea name="residentialAddress" value={formData.residentialAddress} onChange={handleChange} placeholder="Residential Address *" className="input col-span-2" />
          <input name="reason" value={formData.reason} onChange={handleChange} placeholder="Reason for Application *" className="input" />
        </div>

        {/* Family Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Family Members (As per Pass Rule)</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-pink-50 p-4 rounded-lg">
            <input name="name" value={newFamily.name} onChange={handleFamilyChange} placeholder="Name" className="input" />
            <input name="bloodGroup" value={newFamily.bloodGroup} onChange={handleFamilyChange} placeholder="Blood Group" className="input" />
            <input name="relationship" value={newFamily.relationship} onChange={handleFamilyChange} placeholder="Relationship" className="input" />
            <input type="date" name="dob" value={newFamily.dob} onChange={handleFamilyChange} className="input" />
            <input name="identificationMark" value={newFamily.identificationMark} onChange={handleFamilyChange} placeholder="Identification Mark" className="input" />
          </div>
          <button type="button" onClick={addFamilyMember} className="btn bg-blue-600 hover:bg-blue-700 text-white">Add Family Member</button>

          <table className="w-full table-auto mt-4 border">
            <thead className="bg-blue-100">
              <tr>
                <th>Sl. No</th><th>Name</th><th>Blood Group</th><th>Relationship</th><th>DOB</th><th>Identification Mark</th>
              </tr>
            </thead>
            <tbody>
              {familyMembers.map((fm, i) => (
                <tr key={i} className="text-center border-t">
                  <td>{i + 1}</td>
                  <td>{fm.name}</td>
                  <td>{fm.bloodGroup}</td>
                  <td>{fm.relationship}</td>
                  <td>{fm.dob}</td>
                  <td>{fm.identificationMark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Uploads and Emergency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-50 p-4 rounded-lg">
          <input name="emergencyContactName" value={formData.emergencyContactName} onChange={handleChange} placeholder="Emergency Contact Name *" className="input" />
          <input name="emergencyContactNumber" value={formData.emergencyContactNumber} onChange={handleChange} placeholder="Emergency Contact Number *" className="input" />
          {[
            ['photo', 'Upload Photo *'],
            ['signature', 'Upload Signature *'],
            ['hindiName', 'Upload Hindi Name *'],
            ['hindiDesignation', 'Upload Hindi Designation *'],
          ].map(([name, label]) => (
            <div key={name}>
              <label className="block mb-1 font-medium">{label}</label>
              <input type="file" name={name} accept=".jpg,.jpeg,.png" onChange={handleFileChange} className="file-input" />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button type="reset" onClick={() => window.location.reload()} className="btn bg-gray-300 hover:bg-gray-400">Clear</button>
          <button type="submit" className="btn bg-green-700 hover:bg-green-800 text-white">Submit</button>
        </div>
      </form>
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full border-2 border-blue-600 relative animate-fadeIn">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold" onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-3xl font-extrabold text-blue-700 mb-2 text-center tracking-wide">Application Submitted!</h2>
            <div className="flex flex-col items-center mb-4">
              <span className="text-lg font-semibold text-gray-700">Your Application ID:</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-mono text-xl text-green-700 bg-green-50 px-3 py-1 rounded-lg border border-green-200 select-all">{applicationId}</span>
                <button
                  className="ml-2 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  onClick={() => {navigator.clipboard.writeText(applicationId)}}
                  title="Copy Application ID"
                >Copy</button>
              </div>
            </div>
            <h3 className="font-semibold mt-4 mb-2 text-blue-700 text-center">Submitted Information (JSON):</h3>
            <div className="bg-gray-100 rounded-lg p-4 max-h-64 overflow-y-auto border border-gray-200">
              <pre className="whitespace-pre-wrap break-words text-xs text-gray-800 font-mono">{JSON.stringify(submittedData, null, 2)}</pre>
            </div>
            <button className="mt-6 w-full btn bg-blue-600 hover:bg-blue-700 text-white shadow-lg text-lg" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default GazettedForm;
