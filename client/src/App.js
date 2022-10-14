import React, {useState} from 'react'
import axios from 'axios';
import ContractPage from './components/views/ContractPage';
//asdfasdfds
function App() {

  const promise = async () => {
    try {
      let a = await axios.get("http://localhost:8080/balance")
      console.log(a.data.hash)
      
      
    } catch (e) {
      return e
    }
  }

  return (
    <>
      <div>
      <ContractPage></ContractPage>  
      </div>
    </>
  )
}

export default App