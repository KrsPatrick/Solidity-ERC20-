/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WadLib, WadLibInterface } from "../WadLib";

const _abi = [
  {
    inputs: [],
    name: "MULTIPLIER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c4610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063059f8b16146038575b600080fd5b603e6052565b604051604991906075565b60405180910390f35b670de0b6b3a764000081565b6000819050919050565b606f81605e565b82525050565b6000602082019050608860008301846068565b9291505056fea2646970667358221220d7b89be5adba2e6b627bfacbcb02bc3ea061c85ba9e350e76acf83e67ac6637964736f6c634300080f0033";

export class WadLib__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WadLib> {
    return super.deploy(overrides || {}) as Promise<WadLib>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WadLib {
    return super.attach(address) as WadLib;
  }
  connect(signer: Signer): WadLib__factory {
    return super.connect(signer) as WadLib__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WadLibInterface {
    return new utils.Interface(_abi) as WadLibInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WadLib {
    return new Contract(address, _abi, signerOrProvider) as WadLib;
  }
}
