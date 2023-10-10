const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Define an API route
app.get('/api/data', (req, res) => {
    const data = { message: 'This is an API endpoint.' };
    res.json(data);
  });