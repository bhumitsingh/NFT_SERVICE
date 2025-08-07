# NFT Service

A comprehensive microservice for managing NFT metadata, ownership tracking, marketplace listings, and blockchain synchronization.

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                            NFT Service                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │ REST/GraphQL│  │ Ownership   │  │ Listing     │  │ Metadata    │ │
│  │ API Layer   │  │ Sync Engine │  │ Management  │  │ Resolution  │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘ │
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                 │
│  │ Blockchain  │◄─┤ Events DB   │  │ Metadata    │                 │
│  │             │  │             │  │ Storage     │                 │
│  └─────────────┘  └─────────────┘  └─────────────┘                 │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │         Cache & Search (Redis, Elasticsearch)              │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

## 🚀 Features

### Core Functionality
- **Real-time Ownership Tracking**: Sync NFT ownership across multiple blockchains
- **Marketplace Integration**: Handle listings, bids, and sales with smart contract interaction
- **Metadata Resolution**: Fetch and cache metadata from IPFS, Arweave, and HTTP sources
- **Multi-chain Support**: Ethereum, Polygon, and other EVM-compatible networks
- **Advanced Search**: Fast querying with trait filtering and sorting

### API Capabilities
- RESTful and GraphQL endpoints
- Wallet authentication via signature verification
- Rate limiting and caching
- Real-time WebSocket updates for ownership changes

## 📋 Prerequisites

- Node.js 18+ or Python 3.9+
- PostgreSQL 14+
- Redis 6+
- Elasticsearch 8+ (optional, for advanced search)
- Blockchain node access (Alchemy, Infura, or self-hosted)

## 📁 Project Structure

```
nft-service/
├── 📁 src/
│   ├── 📁 api/
│   │   ├── 📁 controllers/
│   │   │   ├── nft.controller.js
│   │   │   ├── collection.controller.js
│   │   │   ├── listing.controller.js
│   │   │   └── search.controller.js
│   │   ├── 📁 middleware/
│   │   │   ├── auth.middleware.js
│   │   │   ├── validation.middleware.js
│   │   │   ├── rateLimit.middleware.js
│   │   │   └── error.middleware.js
│   │   ├── 📁 routes/
│   │   │   ├── nft.routes.js
│   │   │   ├── collection.routes.js
│   │   │   ├── listing.routes.js
│   │   │   └── index.routes.js
│   │   └── 📁 validators/
│   │       ├── nft.validator.js
│   │       └── listing.validator.js
│   ├── 📁 services/
│   │   ├── 📁 blockchain/
│   │   │   ├── eventListener.service.js
│   │   │   ├── contractInteraction.service.js
│   │   │   ├── signatureValidator.service.js
│   │   │   └── chainManager.service.js
│   │   ├── 📁 metadata/
│   │   │   ├── metadataResolver.service.js
│   │   │   ├── ipfsClient.service.js
│   │   │   ├── arweaveClient.service.js
│   │   │   └── imageProcessor.service.js
│   │   ├── 📁 ownership/
│   │   │   ├── ownershipSync.service.js
│   │   │   ├── transferProcessor.service.js
│   │   │   └── balanceTracker.service.js
│   │   ├── 📁 marketplace/
│   │   │   ├── listingManager.service.js
│   │   │   ├── bidProcessor.service.js
│   │   │   ├── auctionEngine.service.js
│   │   │   └── royaltyCalculator.service.js
│   │   ├── 📁 search/
│   │   │   ├── elasticsearchClient.service.js
│   │   │   ├── searchIndexer.service.js
│   │   │   └── queryBuilder.service.js
│   │   └── 📁 cache/
│   │       ├── redis.service.js
│   │       ├── cacheManager.service.js
│   │       └── sessionManager.service.js
│   ├── 📁 models/
│   │   ├── collection.model.js
│   │   ├── nft.model.js
│   │   ├── owner.model.js
│   │   ├── trait.model.js
│   │   ├── listing.model.js
│   │   ├── sale.model.js
│   │   └── metadataTask.model.js
│   ├── 📁 database/
│   │   ├── 📁 migrations/
│   │   │   ├── 001_create_collections.sql
│   │   │   ├── 002_create_nfts.sql
│   │   │   ├── 003_create_owners.sql
│   │   │   ├── 004_create_traits.sql
│   │   │   ├── 005_create_listings.sql
│   │   │   ├── 006_create_sales.sql
│   │   │   └── 007_create_metadata_tasks.sql
│   │   ├── 📁 seeds/
│   │   │   ├── collections.seed.js
│   │   │   └── sample_nfts.seed.js
│   │   ├── connection.js
│   │   └── queryBuilder.js
│   ├── 📁 graphql/
│   │   ├── 📁 resolvers/
│   │   │   ├── nft.resolver.js
│   │   │   ├── collection.resolver.js
│   │   │   ├── listing.resolver.js
│   │   │   └── index.resolver.js
│   │   ├── 📁 schemas/
│   │   │   ├── nft.schema.graphql
│   │   │   ├── collection.schema.graphql
│   │   │   ├── listing.schema.graphql
│   │   │   └── index.schema.graphql
│   │   └── server.js
│   ├── 📁 jobs/
│   │   ├── 📁 workers/
│   │   │   ├── metadataSync.worker.js
│   │   │   ├── ownershipSync.worker.js
│   │   │   ├── imageProcessor.worker.js
│   │   │   └── indexUpdater.worker.js
│   │   ├── 📁 schedulers/
│   │   │   ├── collectionStats.scheduler.js
│   │   │   ├── traitRarity.scheduler.js
│   │   │   └── priceAnalytics.scheduler.js
│   │   └── queue.js
│   ├── 📁 utils/
│   │   ├── logger.js
│   │   ├── errorHandler.js
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── encryption.js
│   │   └── responseFormatter.js
│   ├── 📁 config/
│   │   ├── database.js
│   │   ├── redis.js
│   │   ├── blockchain.js
│   │   ├── elasticsearch.js
│   │   ├── jwt.js
│   │   └── index.js
│   └── app.js
├── 📁 tests/
│   ├── 📁 unit/
│   │   ├── 📁 services/
│   │   │   ├── metadataResolver.test.js
│   │   │   ├── ownershipSync.test.js
│   │   │   └── listingManager.test.js
│   │   ├── 📁 controllers/
│   │   │   ├── nft.controller.test.js
│   │   │   └── collection.controller.test.js
│   │   └── 📁 utils/
│   │       ├── logger.test.js
│   │       └── helpers.test.js
│   ├── 📁 integration/
│   │   ├── api.integration.test.js
│   │   ├── blockchain.integration.test.js
│   │   └── database.integration.test.js
│   ├── 📁 fixtures/
│   │   ├── nfts.json
│   │   ├── collections.json
│   │   └── metadata.json
│   └── setup.js
├── 📁 docs/
│   ├── 📁 api/
│   │   ├── openapi.yaml
│   │   ├── postman-collection.json
│   │   └── graphql-schema.md
│   ├── 📁 architecture/
│   │   ├── system-design.md
│   │   ├── database-design.md
│   │   └── deployment-guide.md
│   ├── 📁 guides/
│   │   ├── getting-started.md
│   │   ├── blockchain-integration.md
│   │   └── metadata-handling.md
│   └── CONTRIBUTING.md
├── 📁 scripts/
│   ├── start.sh
│   ├── deploy.sh
│   ├── backup-db.sh
│   ├── migrate.js
│   ├── seed.js
│   └── health-check.js
├── 📁 docker/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── docker-compose.dev.yml
│   └── docker-compose.prod.yml
├── 📁 k8s/
│   ├── 📁 base/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   ├── configmap.yaml
│   │   └── secret.yaml
│   ├── 📁 overlays/
│   │   ├── 📁 development/
│   │   │   ├── kustomization.yaml
│   │   │   └── patches.yaml
│   │   └── 📁 production/
│   │       ├── kustomization.yaml
│   │       └── patches.yaml
│   └── namespace.yaml
├── 📁 monitoring/
│   ├── prometheus.yml
│   ├── grafana/
│   │   └── dashboards/
│   │       ├── nft-service-metrics.json
│   │       └── blockchain-sync.json
│   └── alerts.yml
├── 📁 .github/
│   ├── 📁 workflows/
│   │   ├── ci.yml
│   │   ├── cd.yml
│   │   ├── security-scan.yml
│   │   └── performance-test.yml
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── ISSUE_TEMPLATE.md
├── .env.example
├── .env.test
├── .gitignore
├── .dockerignore
├── .eslintrc.js
├── .prettierrc
├── package.json
├── package-lock.json
├── tsconfig.json (if using TypeScript)
├── jest.config.js
├── nodemon.json
├── LICENSE
├── CHANGELOG.md
└── README.md
```

## 🛠️ Installation

### 1. Clone Repository
```bash
git clone https://github.com/your-org/nft-service.git
cd nft-service
```

### 2. Environment Setup
```bash
cp .env.example .env
# Edit .env with your configuration
```

Required environment variables:
```env
DATABASE_URL=postgresql://user:pass@localhost:5432/nft_service
REDIS_URL=redis://localhost:6379
ELASTICSEARCH_URL=http://localhost:9200

# Blockchain RPC URLs
ETHEREUM_RPC_URL=https://eth-mainnet.alchemyapi.io/v2/your-key
POLYGON_RPC_URL=https://polygon-mainnet.alchemyapi.io/v2/your-key

# IPFS Gateway
IPFS_GATEWAY_URL=https://ipfs.io/ipfs/

# JWT Secret for authentication
JWT_SECRET=your-jwt-secret
```

### 3. Database Setup
```bash
# Run migrations
npm run migrate
# or
python manage.py migrate

# Seed with sample data (optional)
npm run seed
```

### 4. Start Services
```bash
# Development mode
npm run dev
# or
python manage.py runserver

# Production mode
npm start
```

## 📡 API Endpoints

### NFTs
```http
GET    /api/v1/nfts                    # List NFTs with filtering
GET    /api/v1/nfts/:id               # Get single NFT details
GET    /api/v1/nfts/:id/metadata      # Get NFT metadata
GET    /api/v1/nfts/:id/history       # Get transfer/sale history
```

### Collections
```http
GET    /api/v1/collections            # List collections
GET    /api/v1/collections/:id        # Get collection details
GET    /api/v1/collections/:id/stats  # Get collection statistics
```

### Marketplace
```http
POST   /api/v1/listings               # Create listing
PUT    /api/v1/listings/:id           # Update listing
DELETE /api/v1/listings/:id           # Cancel listing
POST   /api/v1/bids                   # Place bid
```

### Search
```http
GET    /api/v1/search/nfts            # Search NFTs by traits, name, etc.
GET    /api/v1/search/collections     # Search collections
```

### GraphQL
```http
POST   /graphql                       # GraphQL endpoint
GET    /graphql                       # GraphQL playground (dev only)
```

## 📊 Database Schema

### Core Tables

#### `collections`
Represents NFT collections/contracts
```sql
- id: UUID (Primary Key)
- chain: Text (ethereum, polygon, etc.)
- contract_address: Text (Unique)
- name, symbol, total_supply
- creator_address, royalty_bps
- metadata_url
- created_at, updated_at
```

#### `nfts`
Individual NFT tokens
```sql
- id: UUID (Primary Key)
- collection_id: UUID (Foreign Key)
- token_id: Text
- owner_address: Text
- token_uri, name, description
- image_url, animation_url
- cached_metadata: JSONB
- is_burned: Boolean
- last_synced_at, created_at, updated_at
```

#### `owners`
Current and historical ownership (supports ERC-1155)
```sql
- id: UUID (Primary Key)
- nft_id: UUID (Foreign Key)
- owner_address: Text
- quantity: Numeric (1 for ERC-721, n for ERC-1155)
- last_transferred_at, created_at, updated_at
```

#### `traits`
Parsed metadata attributes
```sql
- id: UUID (Primary Key)
- nft_id: UUID (Foreign Key)
- trait_type, value: Text
- display_type: Text (optional)
- rarity_score: Numeric
- created_at
```

#### `listings`
Marketplace listings (active and historical)
```sql
- id: UUID (Primary Key)
- nft_id: UUID (Foreign Key)
- seller_address: Text
- price_eth: Numeric
- price_token: Text (ETH, WETH, USDC)
- signature: Text
- is_active: Boolean
- expiration_time, created_at, updated_at
```

#### `sales`
Completed transactions
```sql
- id: UUID (Primary Key)
- nft_id: UUID (Foreign Key)
- buyer_address, seller_address: Text
- sale_price: Numeric
- payment_token: Text
- tx_hash, chain: Text
- block_number: BigInt
- sold_at
```

## 🔄 Core Components

### 1. Ownership Sync Engine
- Listens to blockchain Transfer events (ERC-721/ERC-1155)
- Updates ownership records in real-time
- Handles blockchain reorganizations
- Supports multiple chain monitoring

### 2. Metadata Resolution
- Fetches metadata from `tokenURI`
- Supports IPFS, Arweave, and HTTP sources
- Caches resolved metadata with CDN integration
- Image optimization and thumbnail generation
- Validates JSON schema compliance

### 3. Listing Management
- Creates and manages marketplace listings
- Supports fixed price and auction formats
- EIP-712 signature verification
- Smart contract integration (Seaport, custom contracts)
- Royalty enforcement (EIP-2981)

### 4. Search & Indexing
- Elasticsearch integration for advanced queries
- Redis caching for hot data
- Trait-based filtering and sorting
- Full-text search across names and descriptions
- Real-time index updates

## 🔧 Configuration

### Blockchain Integration
```yaml
chains:
  ethereum:
    rpc_url: ${ETHEREUM_RPC_URL}
    chain_id: 1
    confirmations: 12
  polygon:
    rpc_url: ${POLYGON_RPC_URL}
    chain_id: 137
    confirmations: 20
```

### Metadata Sources
```yaml
metadata:
  ipfs_gateways:
    - https://ipfs.io/ipfs/
    - https://cloudflare-ipfs.com/ipfs/
  arweave_gateway: https://arweave.net/
  timeout: 30000
  retry_attempts: 3
```

### Caching Strategy
```yaml
cache:
  redis:
    ttl:
      nft_metadata: 3600      # 1 hour
      collection_stats: 300   # 5 minutes
      search_results: 600     # 10 minutes
```

## 📈 Monitoring & Analytics

### Health Checks
- `/health` - Basic service health
- `/health/detailed` - Component-specific status
- `/metrics` - Prometheus metrics

### Key Metrics
- NFT sync latency and success rate
- Metadata resolution performance
- API response times and error rates
- Database query performance
- Cache hit rates

### Logging
Structured logging with correlation IDs:
```json
{
  "timestamp": "2024-08-07T10:30:00Z",
  "level": "INFO",
  "service": "nft-service",
  "component": "metadata-resolver",
  "correlation_id": "req-123",
  "message": "Metadata resolved successfully",
  "nft_id": "550e8400-e29b-41d4-a716-446655440000",
  "duration_ms": 245
}
```

## 🧪 Testing

```bash
# Unit tests
npm test
# or
pytest

# Integration tests
npm run test:integration

# Load testing
npm run test:load
```

## 🚀 Deployment

### Docker
```bash
docker build -t nft-service .
docker run -p 3000:3000 nft-service
```

### Docker Compose
```bash
docker-compose up -d
```

### Kubernetes
```bash
kubectl apply -f k8s/
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow conventional commits
- Maintain test coverage above 80%
- Update documentation for new features
- Run linting before committing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- Documentation: [Wiki](https://github.com/your-org/nft-service/wiki)
- Issues: [GitHub Issues](https://github.com/your-org/nft-service/issues)
- Discussions: [GitHub Discussions](https://github.com/your-org/nft-service/discussions)
- Email: support@yourcompany.com

## 🗺️ Roadmap

### Q3 2024
- [ ] Multi-sig wallet support
- [ ] Advanced auction types (Dutch, reserve)
- [ ] Mobile SDK release

### Q4 2024
- [ ] Layer 2 network expansion
- [ ] AI-powered metadata enhancement
- [ ] Analytics dashboard

### 2025
- [ ] Cross-chain NFT bridging
- [ ] Decentralized metadata storage
- [ ] Community governance integration

---

**Built with ❤️ for the NFT ecosystem**
