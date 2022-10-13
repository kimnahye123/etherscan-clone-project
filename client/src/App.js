import React, {useState} from 'react'
import axios from 'axios';

function App() {
  const [account, setAccount] = useState(0);
  const [txn, setTxn] = useState('');

  const promise = async () => {
    try {
      let a = await axios.get("http://localhost:8080/balance")
      console.log(a.data.hash)
      setTxn(a.data.hash)
      setAccount(a.data.from)
    } catch (e) {
      return e
    }
  }

  return (
    <>
      <div>
        <button onClick={promise}>click</button>
        <p>{account}</p>
        <p>{txn}</p>
      </div>
    </>
  )
}

export default App