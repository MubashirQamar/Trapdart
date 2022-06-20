const { expect } = require("chai");
const { ethers } = require("hardhat");

async function mineNBlocks(n) {
  for (let index = 0; index < n; index++) {
    await ethers.provider.send('evm_mine');
  }
}

describe("Trap Dart ",  function ()  {

  
  let NFT
  let nFT
  let TrapDart
  let trapDart
  let Crowdsale
  let crowdSale
  let Vesting
  let vesting



//   let [_,per1,per2,per3] = [1,1,1,1]

  it("Should deploy all smart contracts", async function () {

    [_,per1,per2,per3] = await ethers.getSigners()

    Crowdsale = await ethers.getContractFactory("Crowdsale")
    crowdSale =await Crowdsale.deploy(_.address)
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
    await crowdSale.addWhitelist([per1.address,_.address])
   


   
  });
 
  it("Should buy", async function () {
    
    let _value = await ethers.utils.parseEther('0.5')

    console.log("round" , (await crowdSale.currentRound()))

    await crowdSale.startNextRound()
    console.log("round" , (await crowdSale.currentRound()))
    console.log("round" , (await crowdSale.getRoundPrice(await crowdSale.currentRound())))
    console.log(_value.toString())
    await crowdSale.connect(per1).buyTokens({value:_value})
    console.log("balance" , (await trapDart.balanceOf(per1.address)).toString())
    await new Promise(resolve => setTimeout(resolve, 4000)); // 3 sec
    await crowdSale.startNextRound()
    await nFT.createToken(per1.address)
    await crowdSale.connect(per1).buyTokens({value:_value})
    await crowdSale.startNextRound()
    await crowdSale.connect(per2).buyTokens({value:_value})
    await nFT.createToken(per2.address)
    
   
  });
  

});