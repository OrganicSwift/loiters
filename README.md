# Loiters - Decentralized Reputation Platform on Stacks

**Loiters** is a hackathon-winning decentralized social reputation and community rewards platform built on the Stacks blockchain. It enables users to build verifiable on-chain reputation through location-based check-ins, community participation, and peer endorsements.

## 🏆 Hackathon Features

- **Social Reputation Protocol**: On-chain reputation scoring based on activity and endorsements.
- **Location Proofs**: Geo-tagged check-ins with streak tracking and rewards.
- **DAO Communities**: Autonomous community creation with reputation-gated access.
- **Sip-010 Rewards**: Native `LOIT` token rewards for participation.
- **Dynamic NFTs**: SIP-009 achievement badges that unlock automatically.

## 🏗 Smart Contracts

The platform consists of 5 integrated contracts:

1. **core**: Manages user profiles, reputation logic, and check-ins.
2. **token**: SIP-010 fungible token (LOIT) for rewards.
3. **badges**: SIP-009 NFT for achievement badges.
4. **communities**: DAO-like group management and voting.
5. **errors**: shared error codes.

## 🚀 Quick Start

### Prerequisites

- [Clarinet](https://github.com/hirosystems/clarinet) installed
- Stacks Wallet for deployment

### Testing Locally

```bash
# Check contracts
clarinet check

# Run tests (coming soon)
clarinet test
```

### Deployment

To deploy to Stacks Testnet:

1. Edit `settings/Testnet.toml` and add your testnet mnemonic:
   ```toml
   [accounts.deployer]
   mnemonic = "your 24 word mnemonic here"
   ```

2. Run deployment:
   ```bash
   clarinet deploy --testnet
   ```

## 📜 Architecture

- **Reputation**: Users earn points for check-ins (10 pts) and endorsements.
- **Tiers**: Bronze (0), Silver (1k), Gold (5k), Platinum (15k), Diamond (50k).
- **Governance**: Weighted voting based on Reputation + Token Holdings.

## 📄 License

MIT