-- Table for Customers
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    PhoneNumber VARCHAR(15),
    QRCode VARCHAR(255) UNIQUE
);

-- Table for Portals (Hotel, Cafe, Restaurant)
CREATE TABLE Portals (
    PortalID INT PRIMARY KEY,
    PortalType VARCHAR(20) CHECK (PortalType IN ('Hotel', 'Cafe', 'Restaurant')),
    CustomerID INT,
    QRCode VARCHAR(255) UNIQUE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Table for Rooms (Hotel)
CREATE TABLE Rooms (
    RoomNumber INT PRIMARY KEY,
    HotelPortalID INT,
    FOREIGN KEY (HotelPortalID) REFERENCES Portals(PortalID)
);

-- Table for Tables (Cafe and Restaurant)
CREATE TABLE Tables (
    TableNumber INT PRIMARY KEY,
    CafeRestaurantPortalID INT,
    FOREIGN KEY (CafeRestaurantPortalID) REFERENCES Portals(PortalID)
);

-- Table for Services (Hotel, Cafe, and Restaurant)
CREATE TABLE Services (
    ServiceID INT PRIMARY KEY,
    ServiceType VARCHAR(20) CHECK (ServiceType IN ('Hotel', 'Cafe', 'Restaurant')),
    PortalID INT,
    FOREIGN KEY (PortalID) REFERENCES Portals(PortalID)
);

-- Table for Room Service (Hotel-specific)
CREATE TABLE RoomService (
    RoomServiceID INT PRIMARY KEY,
    RoomNumber INT,
    ServiceDetails VARCHAR(255),
    FOREIGN KEY (RoomNumber) REFERENCES Rooms(RoomNumber)
);

-- Table for Food Items
CREATE TABLE FoodItems (
    FoodItemID INT PRIMARY KEY,
    ItemName VARCHAR(50),
    Price DECIMAL(10, 2)
);

-- Table for Orders
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    ServiceID INT,
    TableNumber INT,
    OrderDate DATETIME,
    FOREIGN KEY (ServiceID) REFERENCES Services(ServiceID),
    FOREIGN KEY (TableNumber) REFERENCES Tables(TableNumber)
);

-- Table for Order Details
CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT,
    FoodItemID INT,
    Quantity INT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (FoodItemID) REFERENCES FoodItems(FoodItemID)
);

-- Table for Add-ons (Hotel-specific)
CREATE TABLE Addons (
    AddonID INT PRIMARY KEY,
    RoomNumber INT,
    AddonDetails VARCHAR(255),
    FOREIGN KEY (RoomNumber) REFERENCES Rooms(RoomNumber)
);