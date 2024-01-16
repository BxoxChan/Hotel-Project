const express = require('express');
const router = express.Router();
const db = require('./db'); // Import your database connection module

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
