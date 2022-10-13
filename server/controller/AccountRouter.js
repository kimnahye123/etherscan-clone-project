const axios = require('axios');
//도텐브.
//Account Router 에 필요한 api 들. Account Page 에서 api를 요청한 값들. get 만.
//Parameters 는 한글로 적을게요.


// params 로 받아오는 값을, req.params로 받아오면됩니다.


//*****Address 값은 프론트에서 해주면 될거같고.*****


// 1. Balance값(Eoa 계정).
//https://api-goerli.etherscan.io/api
/* ?module=account
   &action=balance
   &address=주소 찾고싶은 주소. => 프론트에서 input 값으로 설정해줘야합니다.
   &tag=latest
   &apikey= ENV.APIKEY 알아서.
 */








  /* module.exports = async (req, res) => {
  await axios.get("https://api-goerli.etherscan.io/api?module=account&action=txlist&address=0xe9a2bb3eFa3A4CA5d8C68125ddAC055458A8D26c&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=HITFAXH5M9GFJ3MQA5XT6WY3XRTDV3YCPT")
  .then(result => {
    console.log(result.data.result.length)
    return res.json(result.data.result[0])
  })
  .catch(e => res.send(e))
}

 */
