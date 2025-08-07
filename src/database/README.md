# Database Directory

This directory contains all database-related code for the NFT Service application.

## Structure

- `migrations/` - Database schema migration scripts
- `seeds/` - Database seeding scripts
- `connection.js` - Database connection configuration
- `queryBuilder.js` - Database query builder utilities

## Database Schema

The application uses PostgreSQL as its primary database with the following core tables:

### Core Tables
1. `collections` - NFT collections/contracts
2. `nfts` - Individual NFT tokens
3. `owners` - Current and historical ownership
4. `traits` - Parsed metadata attributes
5. `listings` - Marketplace listings
6. `sales` - Completed transactions
7. `metadata_tasks` - Metadata processing tasks

## Migrations

Database migrations are used to evolve the schema over time. Each migration script follows a naming convention:
`{sequence_number}_{description}.sql`

Example:
- `001_create_collections.sql`
- `002_create_nfts.sql`

## Seeding

Database seeding scripts populate the database with initial data for development and testing purposes.

## Connection Management

The application uses connection pooling to efficiently manage database connections. Configuration is handled through environment variables.