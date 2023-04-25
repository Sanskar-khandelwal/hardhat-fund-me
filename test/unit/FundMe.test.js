const { deployments, ethers, getNamedAccounts } = require("hardhat");

describe("FundMe", async function () {
  let fundme;
  let deployer;
  beforeEach(async function () {
    //deploy our fundme contract
    //using Hardhat deploy

    deployer = (await getNamedAccounts()).deployer;
    await deployments.fixture("all");
    fundme = await ethers.getContract("FundMe", deployer);
  });
  describe("constructor", async function () {});
});
