const mysql = require("mysql2");

// Database connection setup
const db = mysql.createConnection({
  host: "34.71.38.114",
  user: "admin",
  password: "123456789",
  database: "hotel",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to the database");
  }
});

module.exports = db;
