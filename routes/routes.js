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

// Updated route for creating a menu item
router.post('/menu', (req, res) => {
  const { name, price, service_type_ids } = req.body;

  // Insert into MenuItem table
  const menuItemSql = 'INSERT INTO MenuItem (name, price) VALUES (?, ?)';
  db.query(menuItemSql, [name, price], (err, result) => {
    if (err) {
      console.error('Error creating menu item:', err);
      res.status(500).send(`Error creating menu item: ${err.message}`);
    } else {
      console.log('Menu item created successfully');
      // Insert into MenuItemServiceType table for each service type ID
      const menuItemId = result.insertId; // Get the auto-generated item_id
      const menuItemServiceTypeSql = 'INSERT INTO MenuItemServiceType (item_id, service_type_id) VALUES (?, ?)';
      
      service_type_ids.forEach(service_type_id => {
        // Check if the service_type_id exists in the servicetype table
        const checkServiceTypeSql = 'SELECT * FROM servicetype WHERE service_type_id = ?';
        db.query(checkServiceTypeSql, [service_type_id], (err, result) => {
          if (err) {
            console.error('Error checking service type:', err);
          } else if (result.length > 0) {
            // If the service type exists, insert it into the MenuItemServiceType table
            db.query(menuItemServiceTypeSql, [menuItemId, service_type_id], (err, result) => {
              if (err) {
                console.error('Error creating MenuItemServiceType:', err);
              }
            });
          } else {
            console.error(`Service type ${service_type_id} does not exist`);
          }
        });
      });
      res.status(201).send('Menu item created successfully');
    }
  });
});

// Get all menu items with their associated service types
router.get('/menu', (req, res) => {
  const sql = `
    SELECT 
      mi.item_id,
      mi.name,
      mi.price,
      mi.image,
      mi.status,
      GROUP_CONCAT(mst.service_type_id) AS service_type_ids
    FROM 
      MenuItem AS mi
    LEFT JOIN 
      MenuItemServiceType AS mst ON mi.item_id = mst.item_id
    GROUP BY 
      mi.item_id
  `;

  
  db.query(sql, (err, results) => {
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
  const { customer_id, items } = req.body;
  const status = 'Pending'; // Set the default status to "Pending"

  // Check if the provided customer_id exists in the Customer table
  const customerQuery = 'SELECT * FROM Customer WHERE customer_id = ?';
  db.query(customerQuery, customer_id, (err, customerResult) => {
    if (err) {
      console.error('Error fetching customer:', err);
      res.status(500).send('Error creating order');
      return;
    }

    if (customerResult.length === 0) {
      res.status(404).send('Customer not found');
      return;
    }

    // Check if items array is not empty
    if (!Array.isArray(items) || items.length === 0) {
      res.status(400).send('Items array cannot be empty');
      return;
    }

    // Insert the order items into the OrderItem table
    const insertOrderItemQuery = 'INSERT INTO OrderItem (order_id, item_id) VALUES (?, ?)';
    let insertPromises = [];

    // Insert each item into the OrderItem table
    items.forEach(item => {
      const { item_id } = item;
      insertPromises.push(new Promise((resolve, reject) => {
        db.query(insertOrderItemQuery, [order_id, item_id], (err, result) => {
          if (err) {
            console.error('Error inserting order item:', err);
            reject(err);
          } else {
            console.log('Order item inserted successfully');
            resolve(result);
          }
        });
      }));
    });

    // Execute all insertion promises
    Promise.all(insertPromises)
      .then(() => {
        console.log('All order items inserted successfully');
        // Set the response status to 201 Created
        res.status(201).send('Order created successfully');
      })
      .catch((err) => {
        console.error('Error creating order:', err);
        res.status(500).send('Error creating order');
      });
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
