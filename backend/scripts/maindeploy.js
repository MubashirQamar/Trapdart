// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");
const hre = require("hardhat");
const { json } = require("hardhat/internal/core/params/argumentTypes");

// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

async function main() {
  // This is just a convenience check
  // if (network.name === "hardhat") {
  //   console.warn(
  //     "You are trying to deploy a contract to the Hardhat Network, which" +
  //       "gets automatically created and destroyed every time. Use the Hardhat" +
  //       " option '--network localhost'"
  //   );
  // }

  // ethers is avaialble in the global scope
  const [deployer,per1,per2] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  // zpad deploy // use zpad address
  // ZPad = await ethers.getContractFactory("ZPad");
  // zpad = await ZPad.deploy();
  // await zpad.deployed();



    Crowdsale = await ethers.getContractFactory("Crowdsale")
    crowdSale =await Crowdsale.deploy(await deployer.getAddress())
    await crowdSale.deployed()  

    Vesting = await ethers.getContractFactory("Vesting")
    vesting =await Vesting.deploy(0)
    await vesting.deployed()

    TrapDart = await ethers.getContractFactory("TrapDart")
    trapDart =await TrapDart.deploy(vesting.address , crowdSale.address)
    await trapDart.deployed()

    NFT = await ethers.getContractFactory("NFT")
    nFT =await NFT.deploy()
    await nFT.deployed()


    await nFT.setTokenAddress(trapDart.address)
    await nFT.setCrowdSaleAddress(crowdSale.address)
    await crowdSale.setTokenAddress(trapDart.address)
    await crowdSale.addWhitelist([await deployer.getAddress()])


  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(crowdSale,trapDart,vesting,nFT);
}
//,nftPreSale,nftPubSale,nft

function saveFrontendFiles(crowdSale,trapDart,vesting,nFT) {
  const fs = require("fs");
  const contractsDir = "../frontend/src/contract";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

let config = `
 export const crowdsale_addr = "${crowdSale.address}"
 export const trapDart_addr = "${trapDart.address}"
 export const vesting_addr = "${vesting.address}"
 export const nFT_addr = "${nFT.address}"
`

  let data = JSON.stringify(config)
  fs.writeFileSync(
    contractsDir + '/addresses.js', JSON.parse(data)

  );

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


// npx hardhat run scripts\deploy.js --network rinkeby