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
router.post('/create-menu', (req, res) => {
  const { name, price } = req.body;

  const sql = 'INSERT INTO menu (name, price) VALUES (?, ?)';
  db.query(sql, [name, price], (err, result) => {
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
  db.query('SELECT * FROM Menu', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Create Order Route
router.post('/create-order', (req, res) => {
  const { ServiceID, TableNumber, OrderDate, FoodItems } = req.body;

  // Assuming you have Services and Tables tables already created
  // Still working on this How to connect QR in Service Table

  // Create the order
  const createOrderSQL = 'INSERT INTO Orders (ServiceID, TableNumber, OrderDate) VALUES (?, ?, ?)';
  db.query(createOrderSQL, [ServiceID, TableNumber, OrderDate], (err, result) => {
    if (err) {
      console.error('Error creating order:', err);
      res.status(500).send('Error creating order');
    } else {
      console.log('Order created successfully');

      // Create order details for each food item
      const orderId = result.insertId;
      const createOrderDetailsSQL = 'INSERT INTO OrderDetails (OrderID, FoodItemID, Quantity) VALUES (?, ?, ?)';
      FoodItems.forEach((foodItem) => {
        db.query(createOrderDetailsSQL, [orderId, foodItem.FoodItemID, foodItem.Quantity], (err) => {
          if (err) {
            console.error('Error creating order details:', err);
          }
        });
      });

      res.status(201).send('Order created successfully');
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
