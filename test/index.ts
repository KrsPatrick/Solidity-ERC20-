import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expect } from "chai";
import { ethers } from "hardhat";
import { ERC20 } from "../typechain";

describe("My ERC20 Contract", function () {
    let myERC20Contract: ERC20;
    let someAddress: SignerWithAddress;
    let someOtherAddress: SignerWithAddress;

    beforeEach(async function () {
        const ERC20ContractFactory = await ethers.getContractFactory("ERC20");
        const myERC20Contract = await ERC20ContractFactory.deploy("Hello", "SYM");
        await myERC20Contract.deployed()

        someAddress = (await ethers.getSigners())[1]
        someOtherAddress = (await ethers.getSigners())[2]
    })

    describe("when I have 10 tokens", () => {
        beforeEach(async () => {
            // mint 10 tokens
            await myERC20Contract.transfer(someAddress.address, 10);
        })

        describe("when I transfer 10 tokens", () => {
            it("should transfer tokens correctly",async () => {
                await myERC20Contract
                .connect(someAddress)
                .transfer(someOtherAddress.address, 10)
            expect(await myERC20Contract.balanceOf(someOtherAddress.address)).to.equal(10);
            })
        })
    })
})