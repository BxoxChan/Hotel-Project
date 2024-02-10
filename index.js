const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');
const db = require('./routes/db');
const tables = require('./model/tables');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors()); 

// Middleware
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/dist')));

// Define API routes
app.use('/api', require('./routes/routes'));

// All other routes should serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
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
tables.createServiceTypeTable();
tables.createMenuItemTable();
tables.createMenuItemServiceTypeTable();
tables.createCustomerTable();
tables.createOrderTable();
tables.createCookTable();
tables.createAdminTable();
tables.createAdOnServiceTable();
tables.createCustomerAdServiceTable();
tables.createDailySalesTable();
tables.createWeeklySalesTable();
tables.createMonthlySalesTable();

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  io.emit('serverMessage', { message: 'Server is now running' });
});
