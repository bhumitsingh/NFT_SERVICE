const express = require('express');
const nftController = require('../controllers/nft.controller');

const router = express.Router();

/**
 * @route GET /api/v1/nfts
 * @description List NFTs with filtering
 * @access Public
 */
router.get('/', nftController.getNFTs);

/**
 * @route GET /api/v1/nfts/:id
 * @description Get single NFT details
 * @access Public
 */
router.get('/:id', nftController.getNFTById);

/**
 * @route GET /api/v1/nfts/:id/metadata
 * @description Get NFT metadata
 * @access Public
 */
router.get('/:id/metadata', nftController.getNFTMetadata);

/**
 * @route GET /api/v1/nfts/:id/history
 * @description Get transfer/sale history
 * @access Public
 */
router.get('/:id/history', nftController.getNFTHistory);

module.exports = router;