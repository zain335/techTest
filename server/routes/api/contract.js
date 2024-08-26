const express = require("express");
const { readContract } = require("../../utils/contract");
const { CONTRACT_ADDRESS } = require("../../utils/provider");
const { isAddress } = require("ethers/lib/utils");
const router = express.Router();

/**
 * WrappedEther ERC20 Contract Read Routes
 */

router.get("/name", async (req, res) => {
  try {
    const name = await readContract(CONTRACT_ADDRESS, "name");
    res.json({ data: { name }, success: "ok" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/symbol", async (req, res) => {
  try {
    const symbol = await readContract(CONTRACT_ADDRESS, "symbol");
    res.json({ data: { symbol }, success: "ok" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/balanceOf/:wallet", async (req, res) => {
  try {
    const wallet = req.params.wallet;

    if (!isAddress(wallet))
      return res.status(400).json({ msg: "Invalid wallet address" });

    const balance = await readContract(CONTRACT_ADDRESS, "balanceOf", wallet);
    res.json({ data: { balance: balance.toString() }, success: "ok" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/decimals", async (req, res) => {
  try {
    const decimal = await readContract(CONTRACT_ADDRESS, "decimals");
    res.json({ data: { decimal }, success: "ok" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/total-supply", async (req, res) => {
  try {
    const totalSupply = await readContract(CONTRACT_ADDRESS, "totalSupply");
    res.json({ data: { totalSupply: totalSupply.toString() }, success: "ok" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
