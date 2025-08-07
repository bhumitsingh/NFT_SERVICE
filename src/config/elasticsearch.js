module.exports = {
  url: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
  index: {
    nfts: 'nfts',
    collections: 'collections',
  },
  retryAttempts: 3,
  retryDelay: 1000,
};