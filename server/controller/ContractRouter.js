const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios')

module.exports = async (req, res) => {
  console.log(req.params.id)
  await axios.get(`https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${req.params.id}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.APIKEY}`)
  .then(result => res.json(result.data.result[0]))
  .catch(e => res.send(e))
}

// Contract Router 에서 필요한 APi 요청들

// 1. balance(컨트랙트 주소의 balance)
// 2. 컨트렉트 만든 EOA 계정.
// 3. Transaction hash 값. => txn

// 1.  이더스캔 Account 엔드포인트에 Get a list of 'Normal' Transactions By Address 이 API를 사용

/* https://api-goerli.etherscan.io/api
?module=account
&action=txlist
&address=컨트랙트 주소
&startblock=0
&endblock=99999999
&page=1
&offset=10
&sort=asc
&apikey=API 키 env파일. */

// 2. result 의 0번째 값을 넘겨줘야합니다.
/* module.exports = async (req, res) => {
  await axios.get("https://api-goerli.etherscan.io/api?module=account&action=txlist&address=0xe9a2bb3eFa3A4CA5d8C68125ddAC055458A8D26c&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=")
  .then(result => {
    console.log(result.data.result.length)
    return res.json(result.data.result[0])
  })
  .catch(e => res.send(e))
} */

// 3. 이후 프론트 작업.


