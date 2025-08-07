# Kubernetes Directory

This directory contains Kubernetes configuration files for deploying the NFT Service application.

## Structure

- `base/` - Base Kubernetes manifests
- `overlays/` - Environment-specific overlays
  - `development/` - Development environment configurations
  - `production/` - Production environment configurations
- `namespace.yaml` - Kubernetes namespace definition

## Deployment

### Prerequisites

- Kubernetes cluster access
- kubectl configured
- kustomize installed

### Deploying to Development

```bash
kubectl apply -k k8s/overlays/development
```

### Deploying to Production

```bash
kubectl apply -k k8s/overlays/production
```

## Components

The Kubernetes deployment includes:
- Deployment for the NFT service
- Service for internal/external access
- ConfigMap for configuration
- Secret for sensitive data