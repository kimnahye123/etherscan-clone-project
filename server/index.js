//1. 페이지별 라우터를 만든다.

//2. 각 페이지별 필요한 정보들을 라우터 컨트롤러에서 작성한다.
//2-1. 각 페이지별로, api 를 따와야하는 정보를 분석
//2-2. 분석한 정보를 구현.

const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const AccountRouter = require('./controller/AccountRouter');
const ContractRouter = require('./controller/ContractRouter');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "OPTIONS"]
}))


//app.get('/account/:id', AccountRouter); // 계정조회
//app.get("/transaction/:id", TransactionRouter);
app.get("/contract/:id", ContractRouter);



app.get('/', (req, res) => {
  res.send('hello node')
})

app.listen(port, () => {
  console.log("Server is listening on http://localhost:8080")
})

module.exports = app;