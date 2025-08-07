module.exports = {
  url: process.env.DATABASE_URL || 'postgresql://user:pass@localhost:5432/nft_service',
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || 5432,
  name: process.env.DATABASE_NAME || 'nft_service',
  user: process.env.DATABASE_USER || 'user',
  password: process.env.DATABASE_PASSWORD || 'pass',
  dialect: 'postgres',
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  pool: {
    max: 20,
    min: 5,
    acquire: 30000,
    idle: 10000,
  },
};