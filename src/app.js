const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const logger = require('./utils/logger');
const errorHandler = require('./utils/errorHandler');
const apiRoutes = require('./api/routes/index.routes');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'nft-service',
  });
});

// Health check endpoint with detailed information
app.get('/health/detailed', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'nft-service',
    version: process.env.npm_package_version,
    nodeVersion: process.version,
  });
});

// API routes
app.use('/api/v1', apiRoutes);

// Placeholder for GraphQL endpoint
app.use('/graphql', (req, res) => {
  res.status(200).json({
    message: 'NFT Service GraphQL API',
    playground: process.env.NODE_ENV === 'development' ? '/graphql' : 'disabled',
  });
});

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
  });
});

// Start server
app.listen(PORT, () => {
  logger.info(`NFT Service listening on port ${PORT}`);
  logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;