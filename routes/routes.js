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

// ALL MENU ROUTES

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


// ALL ORDER ROUTES HERE

// Create Order Route
router.post('/create-order', (req, res) => {
  const { ServiceID, TableNumber, OrderDate, FoodItems } = req.body;

  // Check if FoodItems is an array
  if (!Array.isArray(FoodItems)) {
    console.error('Invalid FoodItems format');
    return res.status(400).send('Invalid FoodItems format');
  }

  // Create the order
  const createOrderSQL = 'INSERT INTO Orders (ServiceID, TableNumber, OrderDate) VALUES (?, ?, ?)';
  db.query(createOrderSQL, [ServiceID, TableNumber, OrderDate], (err, result) => {
    if (err) {
      console.error('Error creating order:', err);
      return res.status(500).send('Error creating order');
    }

    console.log('Order created successfully');

    // Create order details for each food item
    const orderId = result.insertId;
    const createOrderDetailsSQL = 'INSERT INTO OrderDetails (OrderID, FoodItemID, Quantity) VALUES (?, ?, ?)';
    
    // Use Promise.all to wait for all queries to finish
    Promise.all(FoodItems.map(foodItem =>
      new Promise((resolve, reject) => {
        db.query(createOrderDetailsSQL, [orderId, foodItem.FoodItemID, foodItem.Quantity], (err) => {
          if (err) {
            console.error('Error creating order details:', err);
            reject(err);
          } else {
            console.log('Order details created successfully');
            resolve();
          }
        });
      })
    ))
    .then(() => {
      res.status(201).send('Order created successfully');
    })
    .catch((error) => {
      console.error('Error creating order details:', error);
      res.status(500).send('Error creating order details');
    });
  });
});


// Fetch New Order
router.get('/orders/new', (req, res) => {
  const sql = 'SELECT * FROM Orders WHERE IsCompleted = 0';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching new orders:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});


// Update the order status to Accepted
router.patch('/orders/accept/:orderId', (req, res) => {
  const orderId = req.params.orderId;

  const updateOrderSQL = 'UPDATE Orders SET IsCompleted = 1 WHERE OrderID = ?';
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

  const updateOrderSQL = 'UPDATE Orders SET IsCompleted = 1 WHERE OrderID = ?';
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
  const sql = 'SELECT * FROM OrderHistory';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching order history:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
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

//   // Add Value to Services Table Route
//   router.post('/add-service', (req, res) => {
//     const { ServiceID, ServiceType, PortalID } = req.body;
  
//     // Insert values into Services table
//     const insertServiceSQL = `
//       INSERT INTO Services (ServiceID, ServiceType, PortalID)
//       VALUES (?, ?, ?)
//     `;
  
//     db.query(insertServiceSQL, [ServiceID, ServiceType, PortalID], (err) => {
//       if (err) {
//         console.error('Error adding service:', err);
//         res.status(500).send('Error adding service');
//       } else {
//         console.log('Service added successfully');
//         res.status(201).send('Service added successfully');
//       }
//     });
//   });


//   // Add Value to Portals Table Route
// router.post('/add-portal', (req, res) => {
//   const { PortalID, PortalType, CustomerID, QRCode } = req.body;

//   // Insert values into Portals table
//   const insertPortalSQL = `
//     INSERT INTO Portals (PortalID, PortalType, CustomerID, QRCode)
//     VALUES (?, ?, ?, ?)
//   `;

//   db.query(insertPortalSQL, [PortalID, PortalType, CustomerID, QRCode], (err) => {
//     if (err) {
//       console.error('Error adding portal:', err);
//       res.status(500).send('Error adding portal');
//     } else {
//       console.log('Portal added successfully');
//       res.status(201).send('Portal added successfully');
//     }
//   });
// });

// // Add Customer Route
// router.post('/add-customer', (req, res) => {
//   const { CustomerID, FirstName, LastName, Email, PhoneNumber, QRCode } = req.body;

//   // Insert values into Customers table
//   const insertCustomerSQL = `
//     INSERT INTO Customers (CustomerID, FirstName, LastName, Email, PhoneNumber, QRCode)
//     VALUES (?, ?, ?, ?, ?, ?)
//   `;

//   db.query(
//     insertCustomerSQL,
//     [CustomerID, FirstName, LastName, Email, PhoneNumber, QRCode],
//     (err) => {
//       if (err) {
//         console.error('Error adding customer:', err);
//         res.status(500).send('Error adding customer');
//       } else {
//         console.log('Customer added successfully');
//         res.status(201).send('Customer added successfully');
//       }
//     }
//   );
// });


// // Add Table Route
// router.post('/add-table', (req, res) => {
//   const { TableNumber, CafeRestaurantPortalID } = req.body;

//   // Insert values into Tables table
//   const insertTableSQL = `
//     INSERT INTO Tables (TableNumber, CafeRestaurantPortalID)
//     VALUES (?, ?)
//   `;

//   db.query(insertTableSQL, [TableNumber, CafeRestaurantPortalID], (err) => {
//     if (err) {
//       console.error('Error adding table:', err);
//       res.status(500).send('Error adding table');
//     } else {
//       console.log('Table added successfully');
//       res.status(201).send('Table added successfully');
//     }
//   });
// });


module.exports = router;
