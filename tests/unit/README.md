# Unit Tests Directory

This directory contains unit tests for individual components of the NFT Service application.

## Structure

- `services/` - Unit tests for service layer components
- `controllers/` - Unit tests for API controllers
- `utils/` - Unit tests for utility functions
- `models/` - Unit tests for data models

## Testing Framework

Unit tests are written using Jest with the following conventions:

1. Each test file corresponds to a source file with `.test.js` extension
2. Tests are organized by component type
3. Mocking is used to isolate units under test

## Running Unit Tests

```bash
# Run all unit tests
npm test

# Run unit tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- tests/unit/services/metadataResolver.test.js
```

## Test Coverage

The project maintains a minimum of 80% test coverage for all critical components.