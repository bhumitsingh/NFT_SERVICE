# Monitoring Directory

This directory contains monitoring and observability configuration for the NFT Service application.

## Structure

- `prometheus.yml` - Prometheus configuration
- `grafana/` - Grafana dashboards and configuration
  - `dashboards/` - JSON dashboard definitions
- `alerts.yml` - Alerting rules

## Monitoring Stack

The monitoring setup includes:

1. **Prometheus** - Metrics collection and storage
2. **Grafana** - Visualization and dashboarding
3. **Alertmanager** - Alerting system

## Key Metrics

- NFT sync latency and success rate
- Metadata resolution performance
- API response times and error rates
- Database query performance
- Cache hit rates
- Blockchain event processing metrics

## Dashboards

- `nft-service-metrics.json` - Core service metrics
- `blockchain-sync.json` - Blockchain synchronization metrics