const mysql = require('mysql2');

// Database connection setup
const db = mysql.createConnection({
  host: 'database-host',
  user: 'username',
  password: 'password',
  database: 'database-name',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db;
