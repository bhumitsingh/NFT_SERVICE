# Jobs Directory

This directory contains background job processing code for the NFT Service application.

## Structure

- `workers/` - Background job worker implementations
- `schedulers/` - Scheduled job configurations
- `queue.js` - Job queue configuration

## Background Processing

The application uses background jobs for tasks that should not block the main request processing thread.

### Workers
- `metadataSync.worker.js` - Synchronizes metadata from external sources
- `ownershipSync.worker.js` - Synchronizes ownership data from blockchain
- `imageProcessor.worker.js` - Processes and optimizes images
- `indexUpdater.worker.js` - Updates search indexes

### Schedulers
- `collectionStats.scheduler.js` - Updates collection statistics
- `traitRarity.scheduler.js` - Calculates trait rarity scores
- `priceAnalytics.scheduler.js` - Generates price analytics

## Queue System

Jobs are processed through a queue system (using Bull) to ensure reliable processing and to handle load distribution.

## Monitoring

Background jobs are monitored for:
- Processing time
- Success/failure rates
- Queue depth
- Error patterns