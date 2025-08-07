# Scripts Directory

This directory contains utility scripts for managing the NFT Service application.

## Available Scripts

- `start.sh` - Production startup script
- `deploy.sh` - Deployment automation script
- `backup-db.sh` - Database backup script
- `migrate.js` - Database migration script
- `seed.js` - Database seeding script
- `health-check.js` - Service health check script

## Usage

Scripts can be run directly or through npm commands defined in package.json:

```bash
# Run database migrations
npm run migrate

# Seed database with sample data
npm run seed

# Check service health
node scripts/health-check.js