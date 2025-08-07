const db = require('../database/connection');
const logger = require('../utils/logger');

class NFT {
  constructor(data) {
    this.id = data.id;
    this.collectionId = data.collection_id;
    this.tokenId = data.token_id;
    this.ownerAddress = data.owner_address;
    this.tokenUri = data.token_uri;
    this.name = data.name;
    this.description = data.description;
    this.imageUrl = data.image_url;
    this.animationUrl = data.animation_url;
    this.cachedMetadata = data.cached_metadata;
    this.isBurned = data.is_burned;
    this.lastSyncedAt = data.last_synced_at;
    this.createdAt = data.created_at;
    this.updatedAt = data.updated_at;
  }

  static async findById(id) {
    try {
      const result = await db.query(
        'SELECT * FROM nfts WHERE id = $1',
        [id]
      );
      return result.rows.length ? new NFT(result.rows[0]) : null;
    } catch (error) {
      logger.error('Error finding NFT by ID:', error);
      throw error;
    }
  }

  static async findByTokenId(collectionId, tokenId) {
    try {
      const result = await db.query(
        'SELECT * FROM nfts WHERE collection_id = $1 AND token_id = $2',
        [collectionId, tokenId]
      );
      return result.rows.length ? new NFT(result.rows[0]) : null;
    } catch (error) {
      logger.error('Error finding NFT by token ID:', error);
      throw error;
    }
  }

  static async create(data) {
    try {
      const result = await db.query(
        `INSERT INTO nfts (
          collection_id, token_id, owner_address, token_uri, name, description,
          image_url, animation_url, cached_metadata, is_burned
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
        [
          data.collectionId,
          data.tokenId,
          data.ownerAddress,
          data.tokenUri,
          data.name,
          data.description,
          data.imageUrl,
          data.animationUrl,
          data.cachedMetadata,
          data.isBurned || false,
        ]
      );
      return new NFT(result.rows[0]);
    } catch (error) {
      logger.error('Error creating NFT:', error);
      throw error;
    }
  }

  async update(data) {
    try {
      const result = await db.query(
        `UPDATE nfts SET
          owner_address = $1, token_uri = $2, name = $3, description = $4,
          image_url = $5, animation_url = $6, cached_metadata = $7, is_burned = $8,
          last_synced_at = $9, updated_at = NOW()
        WHERE id = $10 RETURNING *`,
        [
          data.ownerAddress,
          data.tokenUri,
          data.name,
          data.description,
          data.imageUrl,
          data.animationUrl,
          data.cachedMetadata,
          data.isBurned,
          data.lastSyncedAt,
          this.id,
        ]
      );
      Object.assign(this, new NFT(result.rows[0]));
      return this;
    } catch (error) {
      logger.error('Error updating NFT:', error);
      throw error;
    }
  }
}

module.exports = NFT;