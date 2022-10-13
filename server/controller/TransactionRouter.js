// Transaction Router 에서 필요한 API
// 무조껀 transaction만 입력.

// 1. Transaction Hash
// 2. Status
// 3. block number
// 4. TimeStamp
// 5. From , To
// 6. GasPrice

// 로직
// 1. 프론트에서 트랜잭션을 input 에 입력하고, 서버로 요청 보낸다. get
// 2. 서버가 etherscan API endPoint에 get요청 보내고,
// 3. 응답을 프론트에 보내준다.
// 4. 근데 우리가 필요한건 1~7번까지의 값이니까.

/* https://api-goerli.etherscan.io/api
   ?module=account
   &action=txlistinternal
   &txhash=0xfacd88edd672ce7afe2599a989c685a620eb6d5936c42869560572f20df61344
   &apikey=YourApiKeyToken */

   // result 는 무조건 하나만 나옴.