const express = require('express');
const nftRoutes = require('./nft.routes');

const router = express.Router();

// API version 1 routes
router.use('/nfts', nftRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'nft-service-api',
  });
});

module.exports = router;