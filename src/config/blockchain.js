module.exports = {
  chains: {
    ethereum: {
      rpcUrl: process.env.ETHEREUM_RPC_URL || 'https://eth-mainnet.alchemyapi.io/v2/your-key',
      chainId: 1,
      confirmations: process.env.ETHEREUM_CONFIRMATIONS || 12,
    },
    polygon: {
      rpcUrl: process.env.POLYGON_RPC_URL || 'https://polygon-mainnet.alchemyapi.io/v2/your-key',
      chainId: 137,
      confirmations: process.env.POLYGON_CONFIRMATIONS || 20,
    },
  },
  ipfs: {
    gateways: [
      process.env.IPFS_GATEWAY_URL || 'https://ipfs.io/ipfs/',
      'https://cloudflare-ipfs.com/ipfs/',
    ],
    timeout: process.env.IPFS_TIMEOUT || 30000,
    retryAttempts: process.env.IPFS_RETRY_ATTEMPTS || 3,
  },
  arweave: {
    gateway: process.env.ARWEAVE_GATEWAY || 'https://arweave.net/',
  },
};