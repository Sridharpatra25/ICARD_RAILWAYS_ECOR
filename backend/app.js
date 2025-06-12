const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const statusRoutes = require('./routes/statusRoutes');
const gazettedRoutes = require('./routes/gazettedRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/status', statusRoutes);
const ngRoutes = require('./routes/ngRoutes');
app.use('/api/ng', ngRoutes);
app.use('/api/gazetted', gazettedRoutes);
app.use('/api/user', userRoutes);


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
