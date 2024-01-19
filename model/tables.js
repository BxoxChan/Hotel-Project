const { connectToDatabase, closeDatabaseConnection } = require('../routes/db');

async function createCustomersTable() {
    const query = `
        CREATE TABLE Customers (
            CustomerID INT PRIMARY KEY,
            FirstName VARCHAR(50),
            LastName VARCHAR(50),
            Email VARCHAR(100),
            PhoneNumber VARCHAR(15),
            QRCode VARCHAR(255) UNIQUE
        );
    `;

    try {
        await connectToDatabase();
        await db.query(query);
        console.log('Customers table created successfully');
    } catch (error) {
        console.error('Error creating Customers table:', error);
    } finally {
        await closeDatabaseConnection();
    }
}

async function createPortalsTable() {
    const query = `
        CREATE TABLE Portals (
            PortalID INT PRIMARY KEY,
            PortalType VARCHAR(20) CHECK (PortalType IN ('Hotel', 'Cafe', 'Restaurant')),
            CustomerID INT,
            QRCode VARCHAR(255) UNIQUE,
            FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
        );
    `;

    try {
        await connectToDatabase();
        await db.query(query);
        console.log('Portals table created successfully');
    } catch (error) {
        console.error('Error creating Portals table:', error);
    } finally {
        await closeDatabaseConnection();
    }
}

async function createRoomsTable() {
    const query = `
        CREATE TABLE Rooms (
            RoomNumber INT PRIMARY KEY,
            HotelPortalID INT,
            FOREIGN KEY (HotelPortalID) REFERENCES Portals(PortalID)
        );
    `;

    try {
        await connectToDatabase();
        await db.query(query);
        console.log('Rooms table created successfully');
    } catch (error) {
        console.error('Error creating Rooms table:', error);
    } finally {
        await closeDatabaseConnection();
    }
}

async function createTablesTable() {
    const query = `
        CREATE TABLE Tables (
            TableNumber INT PRIMARY KEY,
            CafeRestaurantPortalID INT,
            FOREIGN KEY (CafeRestaurantPortalID) REFERENCES Portals(PortalID)
        );
    `;

    try {
        await connectToDatabase();
        await db.query(query);
        console.log('Tables table created successfully');
    } catch (error) {
        console.error('Error creating Tables table:', error);
    } finally {
        await closeDatabaseConnection();
    }
}

async function createServicesTable() {
    const query = `
        CREATE TABLE Services (
            ServiceID INT PRIMARY KEY,
            ServiceType VARCHAR(20) CHECK (ServiceType IN ('Hotel', 'Cafe', 'Restaurant')),
            PortalID INT,
            FOREIGN KEY (PortalID) REFERENCES Portals(PortalID)
        );
    `;

    try {
        await connectToDatabase();
        await db.query(query);
        console.log('Services table created successfully');
    } catch (error) {
        console.error('Error creating Services table:', error);
    } finally {
        await closeDatabaseConnection();
    }
}

async function createRoomServiceTable() {
    const query = `
        CREATE TABLE RoomService (
            RoomServiceID INT PRIMARY KEY,
            RoomNumber INT,
            ServiceDetails VARCHAR(255),
            FOREIGN KEY (RoomNumber) REFERENCES Rooms(RoomNumber)
        );
    `;

    try {
        await connectToDatabase();
        await db.query(query);
        console.log('RoomService table created successfully');
    } catch (error) {
        console.error('Error creating RoomService table:', error);
    } finally {
        await closeDatabaseConnection();
    }
}

async function createFoodItemsTable() {
    const query = `
        CREATE TABLE FoodItems (
            FoodItemID INT PRIMARY KEY,
            ItemName VARCHAR(50),
            Price DECIMAL(10, 2)
        );
    `;

    try {
        await connectToDatabase();
        await db.query(query);
        console.log('FoodItems table created successfully');
    } catch (error) {
        console.error('Error creating FoodItems table:', error);
    } finally {
        await closeDatabaseConnection();
    }
}

async function createOrdersTable() {
    const query = `
        CREATE TABLE Orders (
            OrderID INT PRIMARY KEY,
            ServiceID INT,
            TableNumber INT,
            OrderDate DATETIME,
            FOREIGN KEY (ServiceID) REFERENCES Services(ServiceID),
            FOREIGN KEY (TableNumber) REFERENCES Tables(TableNumber)
        );
    `;

    try {
        await connectToDatabase();
        await db.query(query);
        console.log('Orders table created successfully');
    } catch (error) {
        console.error('Error creating Orders table:', error);
    } finally {
        await closeDatabaseConnection();
    }
}

async function createOrderDetailsTable() {
    const query = `
        CREATE TABLE OrderDetails (
            OrderDetailID INT PRIMARY KEY,
            OrderID INT,
            FoodItemID INT,
            Quantity INT,
            FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
            FOREIGN KEY (FoodItemID) REFERENCES FoodItems(FoodItemID)
        );
    `;

    try {
        await connectToDatabase();
        await db.query(query);
        console.log('OrderDetails table created successfully');
    } catch (error) {
        console.error('Error creating OrderDetails table:', error);
    } finally {
        await closeDatabaseConnection();
    }
}

async function createAddonsTable() {
    const query = `
        CREATE TABLE Addons (
            AddonID INT PRIMARY KEY,
            RoomNumber INT,
            AddonDetails VARCHAR(255),
            FOREIGN KEY (RoomNumber) REFERENCES Rooms(RoomNumber)
        );
    `;

    try {
        await connectToDatabase();
        await db.query(query);
        console.log('Addons table created successfully');
    } catch (error) {
        console.error('Error creating Addons table:', error);
    } finally {
        await closeDatabaseConnection();
    }
}

// Call the functions to create tables
createCustomersTable();
createPortalsTable();
createRoomsTable();
createTablesTable();
createServicesTable();
createRoomServiceTable();
createFoodItemsTable();
createOrdersTable();
createOrderDetailsTable();
createAddonsTable();


