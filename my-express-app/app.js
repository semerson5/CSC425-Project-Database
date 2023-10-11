const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://Database-Access:TheRogueSlayer@csc425-project-database.obdl3wj.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Use task routes
app.use('/api', taskRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});