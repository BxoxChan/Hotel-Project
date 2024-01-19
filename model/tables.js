// tables.js
const db = require('../routes/db');

// Create Menu Table
const createMenuTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS menu (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL
    )
  `;
  db.query(sql, (err) => {
    if (err) console.error('Error creating menu table:', err);
    else console.log('Menu table created successfully');
  });
};

// Create Customers Table
const createCustomersTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Customers (
      CustomerID INT PRIMARY KEY,
      FirstName VARCHAR(50),
      LastName VARCHAR(50),
      Email VARCHAR(100),
      PhoneNumber VARCHAR(15),
      QRCode VARCHAR(255) UNIQUE
    )
  `;
  db.query(sql, (err) => {
    if (err) console.error('Error creating Customers table:', err);
    else console.log('Customers table created successfully');
  });
};

// Create Portals Table
const createPortalsTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Portals (
      PortalID INT PRIMARY KEY,
      PortalType VARCHAR(20) CHECK (PortalType IN ('Hotel', 'Cafe', 'Restaurant')),
      CustomerID INT,
      QRCode VARCHAR(255) UNIQUE,
      FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
    )
  `;
  db.query(sql, (err) => {
    if (err) console.error('Error creating Portals table:', err);
    else console.log('Portals table created successfully');
  });
};

// Create Rooms Table
const createRoomsTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Rooms (
      RoomNumber INT PRIMARY KEY,
      HotelPortalID INT,
      FOREIGN KEY (HotelPortalID) REFERENCES Portals(PortalID)
    )
  `;
  db.query(sql, (err) => {
    if (err) console.error('Error creating Rooms table:', err);
    else console.log('Rooms table created successfully');
  });
};

// Create Tables Table
const createTablesTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Tables (
      TableNumber INT PRIMARY KEY,
      CafeRestaurantPortalID INT,
      FOREIGN KEY (CafeRestaurantPortalID) REFERENCES Portals(PortalID)
    )
  `;
  db.query(sql, (err) => {
    if (err) console.error('Error creating Tables table:', err);
    else console.log('Tables table created successfully');
  });
};

// Create Services Table
const createServicesTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Services (
      ServiceID INT PRIMARY KEY,
      ServiceType VARCHAR(20) CHECK (ServiceType IN ('Hotel', 'Cafe', 'Restaurant')),
      PortalID INT,
      FOREIGN KEY (PortalID) REFERENCES Portals(PortalID)
    )
  `;
  db.query(sql, (err) => {
    if (err) console.error('Error creating Services table:', err);
    else console.log('Services table created successfully');
  });
};

// Create RoomService Table
const createRoomServiceTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS RoomService (
      RoomServiceID INT PRIMARY KEY,
      RoomNumber INT,
      ServiceDetails VARCHAR(255),
      FOREIGN KEY (RoomNumber) REFERENCES Rooms(RoomNumber)
    )
  `;
  db.query(sql, (err) => {
    if (err) console.error('Error creating RoomService table:', err);
    else console.log('RoomService table created successfully');
  });
};

// Create FoodItems Table
const createFoodItemsTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS FoodItems (
      FoodItemID INT PRIMARY KEY,
      ItemName VARCHAR(50),
      Price DECIMAL(10, 2)
    )
  `;
  db.query(sql, (err) => {
    if (err) console.error('Error creating FoodItems table:', err);
    else console.log('FoodItems table created successfully');
  });
};

// Create Orders Table
const createOrdersTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Orders (
      OrderID INT PRIMARY KEY,
      ServiceID INT,
      TableNumber INT,
      OrderDate DATETIME,
      FOREIGN KEY (ServiceID) REFERENCES Services(ServiceID),
      FOREIGN KEY (TableNumber) REFERENCES Tables(TableNumber)
    )
  `;
  db.query(sql, (err) => {
    if (err) console.error('Error creating Orders table:', err);
    else console.log('Orders table created successfully');
  });
};

// Create OrderDetails Table
const createOrderDetailsTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS OrderDetails (
      OrderDetailID INT PRIMARY KEY,
      OrderID INT,
      FoodItemID INT,
      Quantity INT,
      FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
      FOREIGN KEY (FoodItemID) REFERENCES FoodItems(FoodItemID)
    )
  `;
  db.query(sql, (err) => {
    if (err) console.error('Error creating OrderDetails table:', err);
    else console.log('OrderDetails table created successfully');
  });
};

// Create Addons Table
const createAddonsTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Addons (
      AddonID INT PRIMARY KEY,
      RoomNumber INT,
      AddonDetails VARCHAR(255),
      FOREIGN KEY (RoomNumber) REFERENCES Rooms(RoomNumber)
    )
  `;
  db.query(sql, (err) => {
    if (err) console.error('Error creating Addons table:', err);
    else console.log('Addons table created successfully');
  });
};

module.exports = {
  createMenuTable,
  createCustomersTable,
  createPortalsTable,
  createRoomsTable,
  createTablesTable,
  createServicesTable,
  createRoomServiceTable,
  createFoodItemsTable,
  createOrdersTable,
  createOrderDetailsTable,
  createAddonsTable,
  // Add other functions for table creation
};
