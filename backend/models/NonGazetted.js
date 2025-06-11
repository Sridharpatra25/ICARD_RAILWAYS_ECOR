const mongoose = require('mongoose');

const nonGazettedSchema = new mongoose.Schema({
  applicationId: { type: String, required: true, unique: true },
  dob: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  // Add other fields like name, department, etc., if needed
});

module.exports = mongoose.model('NonGazetted', nonGazettedSchema);

