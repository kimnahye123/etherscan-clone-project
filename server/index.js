const dotenv = require('dotenv')
const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
dotenv.config();

const AccountRouter = require('./controller/AccountRouter');
const ContractRouter = require('./controller/ContractRouter');
const CoingeckoRouter = require('./controller/CoingeckoRouter');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "OPTIONS"]
}))


app.get('/', CoingeckoRouter); //코인개코 api 가져오기
app.get('/account/:id', AccountRouter); // 계정조회
app.get("/contract/:id", ContractRouter);

app.listen(port, () => {
  console.log('Server is listening on http://localhost:8080');
});

module.exports = app;
