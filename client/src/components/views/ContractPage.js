import React, {useState} from 'react'
import axios from 'axios'
// 틀
// 1. contract address 받아와야하고,

// 2. contract balance krw

// 3. contract 만든 EOA 계정

// 4. txn hash 값.


function ContractPage() {
  const [account, setAccount] = useState('')
  const [eoa, setEoa] = useState('')
  const [txn, setTxn] = useState('');
  const [contractValue, setContractValue] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const a = await axios.get(`http://localhost:8080/contract/${account}`)
      setTxn(a.data.hash);
      setEoa(a.data.from);
      setContractValue(a.data.value);
    } catch (e) {
      return e;
    }
  }
  const handleValue = (e) => {
    setAccount(e.target.value);
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
      <form onSubmit={handleSubmit} value="input">
        <input onChange={handleValue} value={account} />
        <button type="submit">click</button>
      </form>
      <div>
        <p>EOA 계정 : {eoa}</p>
        <p>Transaction Hash : {txn}</p>
        <p>컨트랙트 잔액 : {contractValue}</p>
      </div>
    </div>
  )
}


export default ContractPage