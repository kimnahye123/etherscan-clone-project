import React, { useState } from 'react';
import axios from 'axios';
import { ImCoinDollar } from 'react-icons/im';

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
      <div>
        <h2 className="etherscanLogo">
          EtherScan
          <img
            className="etherscanImage"
            src="/logos/etherscan-logo-circle.png"
            alt="etsc"
          />
        </h2>
      </div>
      <div className="SearchParent">
        <div className="SearchBox">
          <input
            className="Search"
            type="text"
            onChange={handleAddress}
            placeholder="Search by Address"
          ></input>
        </div>
        <div className="Vector">
          <ImCoinDollar
            size="45"
            color="white"
            cursor="pointer"
            onClick={handleAddressButton}
          />
        </div>
      </div>
      <div className="Rectangle-2">
        Balance:
        <span className="-ETH">
          {balance}ETH <br />
          <p className="-WON">{(balance * eth).toLocaleString()}WON</p>
        </span>
      </div>
    </div>
  );
}

export default AccountPage;
