const express = require('express');
const router = express.Router();
const multer = require('multer');
const Gazetted = require('../models/Gazetted');

// Storage configuration (optional: you can store in memory or disk)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Accept form-data with files
router.post('/register', upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'signature', maxCount: 1 },
  { name: 'hindiName', maxCount: 1 },
  { name: 'hindiDesignation', maxCount: 1 }
]), async (req, res) => {
  const { body, files } = req;

  try {
    // Generate unique applicationId
    const applicationId = 'GZ' + Date.now() + Math.floor(Math.random() * 1000);
    // Log for debugging
    console.log('Received Gazetted body:', body);
    console.log('Received Gazetted files:', files);
    // Save to database
    const newApp = new Gazetted({
      applicationId,
      dob: body.dob,
      status: 'Pending',
      // Save all other fields as needed
      // You can add more fields to the schema and here if you want to persist them
    });
    await newApp.save();

    // TODO: Save other fields and files if needed

    res.status(200).json({ message: 'Gazetted employee registered successfully', applicationId });
  } catch (error) {
    console.error('Error while saving gazetted data:', error);
    res.status(500).json({ message: 'Failed to register gazetted employee', error: error.message });
  }
});

module.exports = router; 