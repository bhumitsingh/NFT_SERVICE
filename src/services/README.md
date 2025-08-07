# Services Directory

This directory contains all the business logic services for the NFT Service application.

## Structure

- `blockchain/` - Blockchain interaction services
- `metadata/` - Metadata resolution and processing services
- `ownership/` - Ownership tracking and synchronization services
- `marketplace/` - Marketplace listing and bidding services
- `search/` - Search and indexing services
- `cache/` - Caching services

## Service Architecture

Each service is designed to be modular and loosely coupled with other services. Services communicate through well-defined interfaces and can be tested independently.

### Blockchain Services
- `eventListener.service.js` - Listens to blockchain events
- `contractInteraction.service.js` - Interacts with smart contracts
- `signatureValidator.service.js` - Validates signatures
- `chainManager.service.js` - Manages multiple blockchain connections

### Metadata Services
- `metadataResolver.service.js` - Resolves metadata from various sources
- `ipfsClient.service.js` - IPFS client implementation
- `arweaveClient.service.js` - Arweave client implementation
- `imageProcessor.service.js` - Image processing utilities

### Ownership Services
- `ownershipSync.service.js` - Synchronizes ownership data
- `transferProcessor.service.js` - Processes transfer events
- `balanceTracker.service.js` - Tracks token balances

### Marketplace Services
- `listingManager.service.js` - Manages marketplace listings
- `bidProcessor.service.js` - Processes bids
- `auctionEngine.service.js` - Handles auction logic
- `royaltyCalculator.service.js` - Calculates royalties

### Search Services
- `elasticsearchClient.service.js` - Elasticsearch client
- `searchIndexer.service.js` - Indexes data for search
- `queryBuilder.service.js` - Builds search queries

### Cache Services
- `redis.service.js` - Redis client implementation
- `cacheManager.service.js` - Cache management utilities
- `sessionManager.service.js` - Session management