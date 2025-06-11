const Gazetted = require('../models/Gazetted');
const NonGazetted = require('../models/NonGazetted');

exports.getGazStatus = async (req, res) => {
  const { applicationId, dob } = req.body;
  try {
    const record = await Gazetted.findOne({ applicationId, dob });
    if (!record) return res.status(404).json({ message: 'Application not found' });
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getNgStatus = async (req, res) => {
  const { applicationId, dob } = req.body;
  try {
    const record = await NonGazetted.findOne({ applicationId, dob });
    if (!record) return res.status(404).json({ message: 'Application not found' });
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
