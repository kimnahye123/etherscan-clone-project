
import React, {useState} from 'react'
import LandingPage from './components/views/LandingPage';
import AccountPage from './components/views/AccountPage';
import ContractPage from './components/views/ContractPage';
import TransactionPage from './components/views/TransactionPage';
import {Routes, BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/account" element={<AccountPage/>}></Route>
        <Route path="/transaction" element={<TransactionPage />}></Route>
        <Route path="/contract" element={<ContractPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
