const mongoose = require('mongoose');

const gazettedSchema = new mongoose.Schema({
  applicationId: { type: String, required: true, unique: true },
  dob: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  // Add other fields like name, department, etc., if needed
});

module.exports = mongoose.model('Gazetted', gazettedSchema);
