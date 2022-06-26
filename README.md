# A curated NFT marketplace exclusive to subscribers w/ Superfluid, Optimism, WalletConnect, and IPFS

# Description

There's a massive amount of NFT content being minted every day making collectors yearn for quality curation. Quality curation usually costs collectors a percent fee taken from each sale, which can cut into collectors' profits. We are enabling any curator to offer a subscription to their feed, and enabling collectors to pay a monthly fee instead of a percentage fee. Of course, the curator will be paid out in real-time, and in the case of a collector ending their stream, they will be revoked access to the marketplace.

# How its made

We are using Seaport zones to check if a user is currently streaming us money at the correct flow rate before fulfilling their orders. We are streaming money using Superfluid's tradeable cashflows feature. We are using WalletConnect to easily support multiple wallets, IPFS for content storage, and are deployed on Optimism.

# Optimism Deployed Contracts:

nftMarketplace deployed to: [0x0E4203a9C9023860460a2b9B3Ad2209E13BbfE97](https://kovan-optimistic.etherscan.io/address/0x0E4203a9C9023860460a2b9B3Ad2209E13BbfE97)
ConduitController deployed to: [0x3EF7253c390085015F612D334B24159BC26065A1](https://kovan-optimistic.etherscan.io/address/0x3EF7253c390085015F612D334B24159BC26065A1)
Seaport deployed to: [0x2cd08473b3a523e2CB4FA6FA4E645bD59daa67E](https://kovan-optimistic.etherscan.io/address/0x2cd08473b3a523e2CB4FA6FA4E645bD59daa67E)
