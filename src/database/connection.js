const { Pool } = require('pg');
const logger = require('../utils/logger');
const { database } = require('../config');

// Create a new PostgreSQL pool
const pool = new Pool({
  connectionString: database.url,
  max: database.pool.max,
  min: database.pool.min,
  idleTimeoutMillis: database.pool.idle,
  connectionTimeoutMillis: database.pool.acquire,
});

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    logger.error('Database connection error:', err);
  } else {
    logger.info('Database connected successfully');
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};