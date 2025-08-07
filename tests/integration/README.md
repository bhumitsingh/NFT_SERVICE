# Integration Tests Directory

This directory contains integration tests for the NFT Service application.

## Structure

- `api.integration.test.js` - API integration tests
- `blockchain.integration.test.js` - Blockchain integration tests
- `database.integration.test.js` - Database integration tests

## Testing Framework

Integration tests are written using Jest and Supertest for API testing.

## Test Environment

Integration tests run against:
1. Test database (separate from development/production)
2. Mock blockchain endpoints or test networks
3. Mock external services (IPFS, Arweave, etc.)

## Running Integration Tests

```bash
# Run all integration tests
npm run test:integration

# Run specific integration test
npm run test:integration -- tests/integration/api.integration.test.js
```

## Test Data

Integration tests use:
- Seeded test data from `tests/fixtures/`
- Temporary database instances
- Isolated test environments

## Test Categories

1. **API Integration** - Full API endpoint testing
2. **Blockchain Integration** - Smart contract interaction testing
3. **Database Integration** - Database operation testing