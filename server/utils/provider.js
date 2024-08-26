const { ethers } = require("ethers");

const RPC_URL = process.env.RPC_URL || "https://polygon-rpc.com";
const CONTRACT_ADDRESS =
  process.env.CONTRACT_ADDRESS || "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619";

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

module.exports = { provider, CONTRACT_ADDRESS };

