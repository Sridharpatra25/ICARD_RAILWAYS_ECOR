// routes/ngRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const NonGazetted = require('../models/NonGazetted');

// Storage configuration (optional: you can store in memory or disk)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Accept form-data with files
router.post('/register', upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'signature', maxCount: 1 }
]), async (req, res) => {
  const { body, files } = req;

  try {
    // Generate unique applicationId
    const applicationId = 'NG' + Date.now() + Math.floor(Math.random() * 1000);
    // Save to database
    const newApp = new NonGazetted({
      applicationId,
      dob: body.dob,
      status: 'Pending',
      // You can add more fields here as needed
    });
    await newApp.save();

    // TODO: Save other fields and files if needed

    res.status(200).json({ message: 'Employee registered successfully', applicationId });
  } catch (error) {
    console.error('Error while saving data:', error);
    res.status(500).json({ message: 'Failed to register employee' });
  }
});

module.exports = router;
