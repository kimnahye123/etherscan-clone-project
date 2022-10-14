const axios = require('axios');

module.exports = async (req, res) => {
  try {
    await axios
      .get(
        'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=krw',
      )
      .then((result) => {
        console.log(result.data.ethereum.krw);
        value = result.data.ethereum.krw;
      });
    res.send({ data: value });
  } catch (err) {
    console.log(err);
  }
};
