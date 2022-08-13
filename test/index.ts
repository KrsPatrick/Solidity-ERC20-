import { expect } from "chai";
import { ethers } from "hardhat";
import {StableCoin} from "../typechain/StableCoin";

describe("StableCoin", function() {
    let ethUsdPrice: number, feeRatePercentage: number;
    let StableCoin: StableCoin;

    this.beforeEach(async () => {
        feeRatePercentage = 3;
        ethUsdPrice = 4000;

        const OracleFactory = await ethers.getContractFactory("Oracle");
        const ethUsdOracle = await OracleFactory.deploy();
        await ethUsdOracle.setPrice(ethUsdPrice);

        const StableCoinFactory = await ethers.getContractFactory("StableCoin");
        StableCoin = await StableCoinFactory.deploy(feeRatePercentage, ethUsdOracle.address);
        await StableCoin.deployed();
    });

    it("Should set fee rate percentage", async function () {
        expect(await StableCoin.feeRatePercentage()).to.equal(feeRatePercentage);

    });

    it("Should allow mintin" , async function () {
        const ethAmount = 1;
        const expectedMintAmount = ethAmount * ethUsdPrice;
        await StableCoin.mint({
            value: ethers.utils.parseEther(ethAmount.toString()),
        });
    })
})