const { ethers } = require("ethers");
const { provider } = require("./provider");
const contractAbi = require("../artifacts/wrappedEther/abi.json");

function getContractInstance(contractAddress) {
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);
  return contract;
}

async function readContract(contractAddress, methodName, ...args) {
  const contract = getContractInstance(contractAddress);
  const result = await contract[methodName](...args);
  return result;
}

module.exports = { getContractInstance, readContract };
