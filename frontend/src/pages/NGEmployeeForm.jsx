import React, { useState } from 'react';

const NGEmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    designation: '',
    employeeNo: '',
    dob: '',
    department: '',
    station: 'BHUBANESWAR',
    billUnit: '',
    address: '',
    rlyContact: '',
    mobile: '',
    reason: '',
    emergencyName: '',
    emergencyNumber: '',
    photo: null,
    signature: null,
  });

  const [familyMembers, setFamilyMembers] = useState([]);
  const [newFamily, setNewFamily] = useState({
    name: '',
    bloodGroup: '',
    relationship: 'SELF',
    dob: '',
    identification: ''
  });

  const departments = ["ACCOUNTS", "COMMERCIAL", "ELECTRICAL", "ENGINEERING", "GA", "MECHANICAL", "MEDICAL", "OPERATING", "PERSONNEL", "RRB", "S&T", "SAFETY", "SECURITY", "STORES"];
  const billUnits = ["3101001", "3101002", "3101003", "3101004", "3101010", "3101023", "3101024", "3101025", "3101026", "3101027", "3101065", "3101066", "3101165", "3101166", "3101285", "3101286", "3101287", "3101288", "3101470"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setEmployeeData(prev => ({ ...prev, [name]: files[0] }));
  };

  const handleFamilyChange = (e) => {
    const { name, value } = e.target;
    setNewFamily(prev => ({ ...prev, [name]: value }));
  };

  const addFamilyMember = () => {
    if (newFamily.name.trim()) {
      setFamilyMembers([...familyMembers, newFamily]);
      setNewFamily({ name: '', bloodGroup: '', relationship: 'SELF', dob: '', identification: '' });
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

    // Append employee data fields
    for (const key in employeeData) {
      data.append(key, employeeData[key]);
    }

    // Append family members as a JSON string
    data.append('familyMembers', JSON.stringify(familyMembers));

    const response = await fetch('http://localhost:5000/api/ng/register', {
      method: 'POST',
      body: data
    });

    const result = await response.json();

    if (response.ok) {
      alert('Form submitted successfully!');
      console.log(result);
    } else {
      alert(`Error: ${result.message}`);
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert('Form submission failed!');
  }
};


  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-xl space-y-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-green-800">Employee Registration Form (Non-Gazetted)</h2>

      {/* Employee Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input name="name" value={employeeData.name} onChange={handleChange} placeholder="Employee Name *" className="input" />
        <input name="designation" value={employeeData.designation} onChange={handleChange} placeholder="Designation *" className="input" />
        <input name="employeeNo" value={employeeData.employeeNo} onChange={handleChange} placeholder="Employee No. *" className="input" />
        <input type="date" name="dob" value={employeeData.dob} onChange={handleChange} placeholder="Date of Birth *" className="input" />
        <select name="department" value={employeeData.department} onChange={handleChange} className="input">
          <option>[SELECT DEPARTMENT]</option>
          {departments.map(dep => <option key={dep}>{dep}</option>)}
        </select>
        <input name="station" value={employeeData.station} onChange={handleChange} placeholder="Station *" className="input" />
        <select name="billUnit" value={employeeData.billUnit} onChange={handleChange} className="input">
          <option>[SELECT BILL UNIT]</option>
          {billUnits.map(unit => <option key={unit}>{unit}</option>)}
        </select>
        <input name="mobile" value={employeeData.mobile} onChange={handleChange} placeholder="Mobile Number *" className="input" />
        <input name="rlyContact" value={employeeData.rlyContact} onChange={handleChange} placeholder="Railway Contact No." className="input" />
        <textarea name="address" value={employeeData.address} onChange={handleChange} placeholder="Residential Address *" className="input col-span-2" />
        <input name="reason" value={employeeData.reason} onChange={handleChange} placeholder="Reason for Application *" className="input" />
      </div>

      {/* Family Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Family Members (As per Pass Rule)</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-red-50 p-4 rounded-lg">
          <input name="name" value={newFamily.name} onChange={handleFamilyChange} placeholder="Name" className="input" />
          <input name="bloodGroup" value={newFamily.bloodGroup} onChange={handleFamilyChange} placeholder="Blood Group" className="input" />
          <input name="relationship" value={newFamily.relationship} onChange={handleFamilyChange} placeholder="Relationship" className="input" />
          <input type="date" name="dob" value={newFamily.dob} onChange={handleFamilyChange} className="input" />
          <input name="identification" value={newFamily.identification} onChange={handleFamilyChange} placeholder="Identification Mark(s)" className="input" />
        </div>
        <button type="button" onClick={addFamilyMember} className="btn bg-blue-600 hover:bg-blue-700 text-white">Add Family Member</button>

        <table className="w-full table-auto mt-4 border">
          <thead className="bg-green-100">
            <tr>
              <th>Sl. No</th><th>Name</th><th>Blood Group</th><th>Relationship</th><th>DOB</th><th>Identification</th>
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
                <td>{fm.identification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Additional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-50 p-4 rounded-lg">
        <input name="emergencyName" value={employeeData.emergencyName} onChange={handleChange} placeholder="Emergency Contact Name *" className="input" />
        <input name="emergencyNumber" value={employeeData.emergencyNumber} onChange={handleChange} placeholder="Emergency Contact Number *" className="input" />
        <div>
          <label className="block mb-1 font-medium">Upload Photo *</label>
          <input type="file" name="photo" accept=".jpg,.jpeg,.png" onChange={handleFileChange} className="file-input" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Upload Signature *</label>
          <input type="file" name="signature" accept=".jpg,.jpeg,.png" onChange={handleFileChange} className="file-input" />
        </div>
      </div>

      {/* Submit / Clear */}
      <div className="flex justify-end gap-4">
        <button type="reset" onClick={() => window.location.reload()} className="btn bg-gray-300 hover:bg-gray-400">Clear</button>
        <button type="submit" className="btn bg-green-700 hover:bg-green-800 text-white">Submit</button>
      </div>
    </form>
  );
};

export default NGEmployeeForm;
