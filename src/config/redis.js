module.exports = {
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
  retryAttempts: 5,
  retryDelay: 1000,
  ttl: {
    nftMetadata: process.env.REDIS_TTL_NFT_METADATA || 3600, // 1 hour
    collectionStats: process.env.REDIS_TTL_COLLECTION_STATS || 300, // 5 minutes
    searchResults: process.env.REDIS_TTL_SEARCH_RESULTS || 600, // 10 minutes
  },
};