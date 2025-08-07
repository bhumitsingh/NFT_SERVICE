# API Directory

This directory contains all the API-related code for the NFT Service application.

## Structure

- `controllers/` - Request handlers for API endpoints
- `middleware/` - Express middleware functions
- `routes/` - API route definitions
- `validators/` - Request validation schemas

## API Layers

1. **Controllers** - Handle incoming requests and return responses
2. **Middleware** - Process requests before they reach controllers
3. **Routes** - Define API endpoints and their handlers
4. **Validators** - Validate incoming request data

## REST API Endpoints

The API follows REST conventions with the following base URL:
`/api/v1/`

### NFT Endpoints
- `GET /nfts` - List NFTs with filtering
- `GET /nfts/:id` - Get single NFT details
- `GET /nfts/:id/metadata` - Get NFT metadata
- `GET /nfts/:id/history` - Get transfer/sale history

### Collection Endpoints
- `GET /collections` - List collections
- `GET /collections/:id` - Get collection details
- `GET /collections/:id/stats` - Get collection statistics

### Marketplace Endpoints
- `POST /listings` - Create listing
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Cancel listing
- `POST /bids` - Place bid