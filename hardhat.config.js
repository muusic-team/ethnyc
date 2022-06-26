/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "optimistic-kovan",
  networks: {
    "optimistic-kovan": {
      url: "https://kovan.optimism.io",
      accounts: [process.env.OPTIMISM_KEY],
    },
    hardhat: {
      chainId: 1337,
    },
    // mumbai: {
    //   url: "https://rpc-mumbai.maticvigil.com",
    //   accounts: [process.env.privateKey],
    // },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.14",
        settings: {
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 19066,
          },
        },
      },
    ],
  },
};
