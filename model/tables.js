// Include your database connection setup here
const db = require('../routes/db');

// Create Customer Table
const createCustomerTable = () => {
    // SQL command to create Customer table
    const sql = `
        CREATE TABLE IF NOT EXISTS Customer (
            customer_id INT PRIMARY KEY,
            name VARCHAR(255),
            qr_code VARCHAR(255)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating Customer table:', err);
        else console.log('Customer table created successfully');
    });
};

// Create MenuItem Table
const createMenuItemTable = () => {
    // SQL command to create MenuItem table
    const sql = `
        CREATE TABLE IF NOT EXISTS MenuItem (
            item_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            price DECIMAL(10, 2),
            image VARCHAR(255),
            status BOOLEAN DEFAULT true
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating MenuItem table:', err);
        else console.log('MenuItem table created successfully');
    });
};

// Create MenuItemServiceType Table
const createMenuItemServiceTypeTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS MenuItemServiceType (
            item_id INT,
            service_type_id INT,
            PRIMARY KEY (item_id, service_type_id),
            FOREIGN KEY (item_id) REFERENCES MenuItem(item_id),
            FOREIGN KEY (service_type_id) REFERENCES ServiceType(service_type_id)
        )
    `;
    db.query(sql, (err) => {
        if (err) {
            console.error('Error creating MenuItemServiceType table:', err);
        } else {
            console.log('MenuItemServiceType table created successfully');
        }
    });
};

// Create Order Table
const createOrderTable = () => {
    // SQL command to create Order table
    const sql = `
        CREATE TABLE IF NOT EXISTS OrderTable (
            order_id INT PRIMARY KEY AUTO_INCREMENT,
            customer_id INT,
            item_id INT,
            total_cost DECIMAL(10, 2),
            status VARCHAR(50) DEFAULT 'Pending', 
            table_or_room_number VARCHAR(50),
            FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
            FOREIGN KEY (item_id) REFERENCES MenuItem(item_id)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating Order table:', err);
        else console.log('Order table created successfully');
    });
};

// Create ServiceType Table
const createServiceTypeTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS ServiceType (
            service_type_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating ServiceType table:', err);
        else console.log('ServiceType table created successfully');
    });
};

// Create Cook Table
const createCookTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS Cook (
            cook_id INT PRIMARY KEY,
            name VARCHAR(255)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating Cook table:', err);
        else console.log('Cook table created successfully');
    });
};

// Create Admin Table
const createAdminTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS Admin (
            admin_id INT PRIMARY KEY,
            name VARCHAR(255)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating Admin table:', err);
        else console.log('Admin table created successfully');
    });
};

// Create AdOnService Table
const createAdOnServiceTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS AdOnService (
            ad_service_id INT PRIMARY KEY,
            name VARCHAR(255),
            price DECIMAL(10, 2)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating AdOnService table:', err);
        else console.log('AdOnService table created successfully');
    });
};

// Create CustomerAdService Table
const createCustomerAdServiceTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS CustomerAdService (
            customer_id INT,
            ad_service_id INT,
            PRIMARY KEY (customer_id, ad_service_id),
            FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
            FOREIGN KEY (ad_service_id) REFERENCES AdOnService(ad_service_id)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating CustomerAdService table:', err);
        else console.log('CustomerAdService table created successfully');
    });
};

// Create DailySales Table
const createDailySalesTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS DailySales (
            sale_date DATE PRIMARY KEY,
            total_sales DECIMAL(10, 2)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating DailySales table:', err);
        else console.log('DailySales table created successfully');
    });
};

// Create WeeklySales Table
const createWeeklySalesTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS WeeklySales (
            week_number INT PRIMARY KEY,
            total_sales DECIMAL(10, 2)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating WeeklySales table:', err);
        else console.log('WeeklySales table created successfully');
    });
};

// Create MonthlySales Table
const createMonthlySalesTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS MonthlySales (
            month_year VARCHAR(10) PRIMARY KEY,
            total_sales DECIMAL(10, 2)
        )
    `;
    db.query(sql, (err) => {
        if (err) console.error('Error creating MonthlySales table:', err);
        else console.log('MonthlySales table created successfully');
    });
};

module.exports = {
    createCustomerTable,
    createMenuItemTable,
    createMenuItemServiceTypeTable,
    createOrderTable,
    createServiceTypeTable,
    createCookTable,
    createAdminTable,
    createAdOnServiceTable,
    createCustomerAdServiceTable,
    createDailySalesTable,
    createWeeklySalesTable,
    createMonthlySalesTable
};
