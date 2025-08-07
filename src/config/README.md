# Config Directory

This directory contains configuration files for different services used by the NFT Service application.

## Structure

- `database.js` - Database configuration
- `redis.js` - Redis configuration
- `blockchain.js` - Blockchain configuration
- `elasticsearch.js` - Elasticsearch configuration
- `jwt.js` - JWT configuration
- `index.js` - Configuration entry point

## Configuration Management

The application uses environment variables for configuration, with default values provided in the configuration files.

### Database Configuration
Settings for PostgreSQL database connection including connection pooling and authentication.

### Redis Configuration
Settings for Redis connection including caching TTL values for different data types.

### Blockchain Configuration
Settings for blockchain connections including RPC URLs, chain IDs, and confirmation requirements.

### Elasticsearch Configuration
Settings for Elasticsearch connection including index names and retry policies.

### JWT Configuration
Settings for JWT token generation including secret keys and expiration times.

## Environment-Specific Configuration

Configuration values can be overridden using environment variables:

```bash
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/nft_service

# Redis
REDIS_URL=redis://localhost:6379

# Blockchain
ETHEREUM_RPC_URL=https://eth-mainnet.alchemyapi.io/v2/your-key