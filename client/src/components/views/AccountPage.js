import React, { useState } from 'react';
import axios from 'axios';
//format

// Account detail

// 1. address 가 들어가야합니다.
//    ID 상태관리, 변하는 값을 req.params에 담에 보내주십쇼.

// 2. 조회한 address 의 Balance 를 가져와야합니다.
//    axios request로 서버에 호출 보낸 후, result 값을 받아오면, krw로 변경.

// 바로 서버에서 받아오면 되는 부분.

function AccountPage() {
  const [address, setAddress] = useState(undefined);
  const [balance, setBalance] = useState(0);
  const [eth, setEth] = useState(0);

  function handleAddress(e) {
    console.log(e.target.value);

    setAddress(e.target.value);
  }

  async function handleAddressButton() {
    try {
      const result1 = await axios.get(
        `http://localhost:8080/account/${address}`,
      );
      setBalance(result1.data);
      const value = await axios.get('http://localhost:8080/');
      setEth(value.data.data);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  return (
    <div className="Rectangle-1">
      <h1 className="ETHERSCAN">ETHERSCAN</h1>

      <input
        className="Search"
        type="text"
        onChange={handleAddress}
        placeholder="Search by Address"
      ></input>
      <button className="button" onClick={handleAddressButton}>
        click
      </button>
      <div className="Rectangle-2">
        <span className="Balance">
          Balance :
          <span className="text-style-1">
            {balance}ETH {(balance * eth).toLocaleString()}WON
          </span>
        </span>
      </div>
    </div>
  );
}

export default AccountPage;
