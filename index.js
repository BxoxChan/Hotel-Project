const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');
const db = require('./routes/db');
const tables = require('./model/tables');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = 3000;

// Middleware 
app.use(bodyParser.json());

// Use the routes defined in routes.js
app.use('/', routes);

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

// Socket.IO for real-time notifications
io.on('connection', (socket) => {
  console.log('User connected to Socket.IO');

  // Emit a custom event when a client connects
  io.emit('serverMessage', { message: 'A client has connected to the server' });

  // Handle order notifications
  // You need to emit events to the cook's panel when an order is placed

  socket.on('disconnect', () => {
    console.log('User disconnected from Socket.IO');
  });
});

// Initialize Database Tables
tables.createMenuTable();
tables.createCustomersTable();
tables.createPortalsTable();
tables.createRoomsTable();
tables.createTablesTable();
tables.createServicesTable();
tables.createRoomServiceTable();
tables.createFoodItemsTable();
tables.createOrdersTable();
tables.createOrderDetailsTable();
tables.createAddonsTable();

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  io.emit('serverMessage', { message: 'Server is now running' });
});
