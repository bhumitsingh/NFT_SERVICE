# GraphQL Directory

This directory contains all GraphQL-related code for the NFT Service application.

## Structure

- `resolvers/` - GraphQL resolver functions
- `schemas/` - GraphQL schema definitions
- `server.js` - GraphQL server configuration

## GraphQL API

The application provides a GraphQL API in addition to the REST API for more flexible data querying.

## Schema Organization

GraphQL schemas are organized by entity type:
- `nft.schema.graphql` - NFT-related types and queries
- `collection.schema.graphql` - Collection-related types and queries
- `listing.schema.graphql` - Marketplace listing types and mutations
- `index.schema.graphql` - Root schema definitions

## Resolvers

Resolvers implement the business logic for GraphQL queries and mutations:
- `nft.resolver.js` - NFT query resolvers
- `collection.resolver.js` - Collection query resolvers
- `listing.resolver.js` - Marketplace listing resolvers
- `index.resolver.js` - Root resolver definitions

## Access

In development, the GraphQL playground is available at:
`/graphql`

In production, only the GraphQL endpoint is available:
`/graphql`