const express = require('express');
const routes = require('./routes/routes');

const app = express();
const PORT = 3000;

// QR Routes
// Hotel portal route
app.get('/hotel', (req, res) => {
    res.send('Welcome to the Hotel Portal! Please enter your Room Number.');
  });
  
  // Cafe portal route
  app.get('/cafe', (req, res) => {
    res.send('Welcome to the Cafe Portal! Please enter your Table Number.');
  });
  
  // Restaurant portal route
  app.get('/restaurant', (req, res) => {
    res.send('Welcome to the Restaurant Portal! Please enter your Table Number.');
  });

// Middleware to parse JSON requests
app.use(express.json());

// Use the routes defined in routes.js
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
