const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();
  await nftMarketplace.deployed();
  console.log("nftMarketplace deployed to:", nftMarketplace.address);

  const ConduitController = await hre.ethers.getContractFactory(
    "ConduitController"
  );
  const conduitController = await ConduitController.deploy();
  await conduitController.deployed();
  console.log("ConduitController deployed to:", conduitController.address);

  const Seaport = await hre.ethers.getContractFactory("Seaport");
  const seaport = await Seaport.deploy(conduitController.address);
  await seaport.deployed();
  console.log("Seaport deployed to:", seaport.address);

  fs.writeFileSync(
    "./config.js",
    `
  export const marketplaceAddress = "${nftMarketplace.address}"
  export const conduitController = "${conduitController.address}"
  export const seaportAddress = "${seaport.address}"
  `
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
