const { Pool } = require('pg');

// Configure the PostgreSQL connection pool
const pool = new Pool({
  user: 'admin01',    // Your PostgreSQL username
  host: 'localhost',        // Host where PostgreSQL is running, usually localhost
  database: 'constrtion_db', // Your PostgreSQL database name
  password: 'admin1234', // Your PostgreSQL password
  port: 5432,               // Default port for PostgreSQL
});

// Error handling for idle clients
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Function to test database connection (optional)
const testConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connected to the database:', res.rows[0]);
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
};

// Export the pool to be used in other files
module.exports = {
  pool,
  testConnection, // Optional: export the testConnection function
};
