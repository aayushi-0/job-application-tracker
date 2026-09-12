const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const applicationRoutes = require('./routes/applicationRoutes');


const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use('/api/applications', applicationRoutes);

app.get('/', (req, res) => {
  res.send('JobTrack backend is running!');
});

mongoose
  .connect(process.env.MONGO_URI, {
    family: 4,
  })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});