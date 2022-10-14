const axios = require('axios');
const { ethers } = require('ethers');
require('dotenv').config();

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    await axios
      .get(
        `https://api-goerli.etherscan.io/api?module=account&action=balance&address=${id}&tag=latest&apikey=${process.env.APIKEY_NAHYE}`,
      )
      .then((result) => {
        console.log(result.data.result);
        balance = ethers.utils.formatEther(result.data.result);
      });
    res.status(200).send(balance);
  } catch (err) {
    console.log(err);
  }
};
