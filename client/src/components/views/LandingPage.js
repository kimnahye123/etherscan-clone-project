import React from 'react'

import "./LandingPage.css";
import {NavLink} from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <div className='etherscan'>
        <h2>EtherScan<img className="etherscanImage" src="/logos/etherscan-logo-circle.png" alt="etsc" /></h2>
      </div>
      <div className='landing_container'>
        <NavLink className='column account' to="/account">Account</NavLink>
        <NavLink className='column transaction' to ="/transaction">Transaction</NavLink>
        <NavLink className='column contract' to ="/contract">Contract</NavLink>
      </div>
    </>
  )
}

export default LandingPage
