const express = require('express');
const { pool, testConnection } = require('./pgadmin'); // Import the pool and optional test function
const app = express();
const port = 5000;

// Optional: Test connection on startup
testConnection();

// Route to get all projects
app.get('/api/projects', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
