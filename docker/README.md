# Docker Directory

This directory contains Docker configuration files for the NFT Service application.

## Files

- `Dockerfile` - Main Docker image definition
- `docker-compose.yml` - Multi-container setup for development
- `docker-compose.dev.yml` - Development-specific overrides
- `docker-compose.prod.yml` - Production-specific overrides

## Usage

### Building the Docker Image

```bash
docker build -t nft-service .
```

### Running with Docker Compose

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down
```

### Environment Variables

The docker-compose.yml file sets up the following services:
- nft-service (main application)
- PostgreSQL database
- Redis cache
- Elasticsearch (optional)