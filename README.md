# A curated NFT marketplace exclusive to subscribers w/ Superfluid, Optimism, WalletConnect, and IPFS

## Description

There's a massive amount of NFT content being minted every day making collectors yearn for quality curation. Quality curation usually costs collectors a percent fee taken from each sale, which can cut into collectors' profits. We are enabling any curator to offer a subscription to their feed, and enabling collectors to pay a monthly fee instead of a percentage fee. Of course, the curator will be paid out in real-time, and in the case of a collector ending their stream, they will be revoked access to the marketplace.

## How its made

We are using Seaport zones to check if a user is currently streaming us money at the correct flow rate before fulfilling their orders. We are streaming money using Superfluid's tradeable cashflows feature. We are using WalletConnect to easily support multiple wallets, IPFS for content storage, and are deployed on Optimism.

## Optimism Deployed Contracts:

nftMarketplace deployed to: [0x0E4203a9C9023860460a2b9B3Ad2209E13BbfE97](https://kovan-optimistic.etherscan.io/address/0x0E4203a9C9023860460a2b9B3Ad2209E13BbfE97)

ConduitController deployed to: [0x3EF7253c390085015F612D334B24159BC26065A1](https://kovan-optimistic.etherscan.io/address/0x3EF7253c390085015F612D334B24159BC26065A1)

Seaport deployed to: [0x2cd08473b3a523e2CB4FA6FA4E645bD59daa67E](https://kovan-optimistic.etherscan.io/address/0x2cd08473b3a523e2CB4FA6FA4E645bD59daa67E)

### Trials & Tribulations

Our primary ambition in this project was to build an NFT marketplace on top of Seaport, utilizing its unique and powerful Zones to create uniquely gated marketplace experiences.

Some examples of such gating would include being part of an existing NFT collection and streaming money to the marketplace wallet with Superfluid (in the sense of a "subscription access").

Another core feature we intended to implement was the purchase of NFTs for a stream of money over time. This would allow sellers of NFTs to hedge their risks by being able to receive a guaranteed flow value over time. It would also serve as the basic infrastructure for royalty-sharing mechanisms that our team is highly interested in, in which revenue and royalty streams can be bought (invested) into.

Unfortunately, we ran into tremendous difficulty working with Seaport. With its young age, we found the documentation and online help sparse. We went at it strongly though, eventually finding a well-hidden Javascript library written by OpenSea for interacting with the Seaport protocol ("seaport-js". By "well-hidden", we mean that it was not mentioned anywhere on documentation. We had to find it during our attempt to reverse engineer OpenSea's own mechanism of interfacing with Seaport). We were excited to use this, and made some progress in understanding and working with it, before running into an extremely vague, undocumented error coming out of the library that prevented us from going further. With less than 9 hours before the deadline, we had to improvise in our pivot. Artifacts of our experimentations can be found on [this branch](https://github.com/muusic-team/ethnyc/tree/migrate-to-seaport-js-library).

We decided to build a similar system to what Zones would have done where we check a user's access status in a smart contract by checking if they are streaming DAI to our wallet. We got started but did not finish with this.

We ultimately submitted a fully functioning, basic NFT market place deployed on Optimism. The marketplace also has functionality to wrap DAI into Superfluid Super Token alternatives in order to facilitate streaming to the protocol. Our tech stack is outlined in depth in our submission.

---

## Conclusion

We hope you enjoyed our idea and progress! ETHNewYork was an amazing experience full of both rewards and hardships. Mo and I both met lots of interested people, and look forward to the next opportunity to do so with the ETHGlobal fam.
