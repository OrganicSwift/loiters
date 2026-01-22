# Loiters Platform Walkthrough

## 🚀 Deployment Status

**Network**: Stacks Mainnet
**Deployer**: `SP2QNSNKR3NRDWNTX0Q7R4T8WGBJ8RE8RA516AKZP`

### Deployed Contracts (v2)

| Contract Name | Function |
|--------------|----------|
| `loiters-core-v2` | Advanced identity & reputation with pause controls. |
| `loiters-token-v2` | $LOIT token rewards with minter authorization. |
| `loiters-badges-v2` | NFT achievement system with automated claiming. |
| `loiters-communities-v2` | DAO governance and community management. |
| `loiters-errors-v2` | Standardized error definitions. |

## 💻 Frontend Application

**Framework**: Next.js 15+ (App Router)
**Styling**: Tailwind CSS, Framer Motion
**URL**: `http://localhost:3000`

### Key Features
- **Modern Landing Page**: High-impact visuals explaining Proof of Presence.
- **Glassmorphism UI**: Premium dark-mode aesthetic with interactive cards.
- **Wallet Integration Ready**: Integrated with `@stacks/connect`.
- **Reputation Dashboard**: Visualized tier system for user progression.

## 🏗 Architecture Overview

Loiters is designed as a modular system of 5 interacting contracts:

### 1. Core Logic
- **Check-ins**: Validates location data (lat/long) and timestamps.
- **Reputation**: Calculates scores based on activity streaks and peer endorsements.

### 2. Rewards System
- **LOIT Token**: Automatically distributed via authorized minters.
- **Badges**: Soulbound-style NFTs that verify achievements.

### 3. Governance
- **Proposals**: Community-level governance for parameter changes.
- **Voting**: Multi-token voting power (Reputation + Token).

## 🛠 Verification

To verify the deployment on the Stacks Explorer:
1. Go to [Stacks Explorer](https://explorer.hiro.so/?chain=mainnet)
2. Search for the Deployer Address: `SP2QNSNKR3NRDWNTX0Q7R4T8WGBJ8RE8RA516AKZP`
3. You should see `Contract Publish` transactions for the `v2` suite.

## 📜 Git History
- **Commits**: 20 quality commits reflecting the development lifecycle.
- **Structure**: Divided by feature (Contracts, Tokens, Badges, Frontend, Animations).