const express = require('express');
const router = express.Router();
const db = require('./db');


// Get all customers
router.get('/customers', (req, res) => {
  db.query('SELECT * FROM Customer', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Create Menu Route
router.post('/menu', (req, res) => {
  const { name, price, service_type_id } = req.body;

  const sql = 'INSERT INTO MenuItem (name, price, service_type_id) VALUES (?, ?, ?)';
  db.query(sql, [name, price, service_type_id], (err, result) => {
    if (err) {
      console.error('Error creating menu item:', err);
      res.status(500).send('Error creating menu item');
    } else {
      console.log('Menu item created successfully');
      res.status(201).send('Menu item created successfully');
    }
  });
});

// Get all menu items
router.get('/menu', (req, res) => {
  db.query('SELECT * FROM MenuItem', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Create Order Route
router.post('/orders', (req, res) => {
  const { customer_id, item_id, total_cost } = req.body;
  const status = 'New'; // Set the default status to "New"

  const sql = 'INSERT INTO OrderTable (customer_id, item_id, total_cost, status) VALUES (?, ?, ?, ?)';
  db.query(sql, [customer_id, item_id, total_cost, status], (err, result) => {
    if (err) {
      console.error('Error creating order:', err);
      res.status(500).send('Error creating order');
    } else {
      console.log('Order created successfully');
      // Set the response status to 201 Created
      res.status(201).send('Order created successfully');
    }
  });
});

// Fetch New Order
router.get('/orders/new', (req, res) => {
  const sql = 'SELECT * FROM OrderTable WHERE status = "New"';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching new orders:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Check if there are results
      if (results && results.length > 0) {
        res.status(200).json(results); // Return 200 OK with the results
      } else {
        res.status(404).json({ message: 'No new orders found' }); // Return 404 Not Found
      }
    }
  });
});

// Update the order status to Accepted
router.patch('/orders/accept/:orderId', (req, res) => {
  const orderId = req.params.orderId;

  const updateOrderSQL = 'UPDATE OrderTable SET status = "Accepted" WHERE order_id = ?';
  db.query(updateOrderSQL, [orderId], (err, result) => {
    if (err) {
      console.error('Error accepting order:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Order accepted successfully' });
    }
  });
});

// Update the order status to Completed
router.patch('/orders/complete/:orderId', (req, res) => {
  const orderId = req.params.orderId;

  const updateOrderSQL = 'UPDATE OrderTable SET status = "Completed" WHERE order_id = ?';
  db.query(updateOrderSQL, [orderId], (err, result) => {
    if (err) {
      console.error('Error completing order:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Order completed successfully' });
    }
  });
});

// Fetch order history
router.get('/orders/history', (req, res) => {
  const sql = 'SELECT * FROM OrderTable WHERE status = "Completed"';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching order history:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Route to add a new service
router.post('/add-service', (req, res) => {
  // Extract service data from the request body
  const { name } = req.body;

  // SQL query to insert the new service into the database
  const sql = 'INSERT INTO ServiceType (name) VALUES (?)';

  // Execute the SQL query with the provided service name
  db.query(sql, [name], (err, result) => {
    if (err) {
      console.error('Error adding service:', err);
      res.status(500).json({ error: 'Error adding service' });
    } else {
      console.log('Service added successfully');
      res.status(201).json({ message: 'Service added successfully' });
    }
  });
});

// Route to add predefined services
router.post('/add-predefined-services', (req, res) => {
  // Array of predefined services
  const predefinedServices = [
    { name: 'Hotel' },
    { name: 'Cafe' },
    { name: 'Restaurant' }
  ];

  // SQL query to insert predefined services into the database
  const sql = 'INSERT INTO ServiceType (name) VALUES ?';

  // Extracting service names from predefinedServices array
  const serviceNames = predefinedServices.map(service => [service.name]);

  // Execute the SQL query with the array of service names
  db.query(sql, [serviceNames], (err, result) => {
    if (err) {
      console.error('Error adding predefined services:', err);
      res.status(500).json({ error: 'Error adding predefined services' });
    } else {
      console.log('Predefined services added successfully');
      res.status(201).json({ message: 'Predefined services added successfully' });
    }
  });
});



// QR Code Scanner for each Portal
const portalQRData = [
  { portalID: 1, qrCode: 'hotel_qr_code_1', portalName: 'Hotel' },
  { portalID: 2, qrCode: 'cafe_qr_code_1', portalName: 'Cafe' },
  { portalID: 3, qrCode: 'restaurant_qr_code_1', portalName: 'Restaurant' },
];

router.get('/scan/:qrCode', (req, res) => {
  const scannedQRCode = req.params.qrCode;
  const portal = portalQRData.find(p => p.qrCode === scannedQRCode);

  if (portal) {
    res.redirect(`/${portal.portalName.toLowerCase()}`);
  } else {
    res.status(404).send('Invalid QR Code');
  }
});

module.exports = router;
