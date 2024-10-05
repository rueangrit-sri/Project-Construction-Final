// const { Pool } = require('pg');
// require('dotenv').config();

// // Database configuration
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   // If using SSL connection (uncomment if required)
//   // ssl: {
//   //   rejectUnauthorized: false
//   // }
// });

// module.exports = pool;

const { Pool } = require('pg');
require('dotenv').config();

// Database configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Uncomment the SSL settings if required
  // ssl: {
  //   rejectUnauthorized: false
  // }
});

// Export pool directly without destructuring
module.exports = pool;
