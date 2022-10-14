import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';

// 틀

// 1. contract address 받아와야하고,

// 2. contract balance krw

// 3. contract 만든 EOA 계정

// 4. txn hash 값.

const ContractPage = () => {
  const [address2, setAddress2] = useState('-')
  const [address, setAddress] = useState('-')
  const [balance, setBalance] = useState('-')
  const [eoaAccount, setEoaAccount] = useState('-')
  const [txn, setTxn] = useState('-')

  const onChange = (e) => {
    setAddress(e.target.value)    
  }

  const onClick = async() => {
    try {
      const result = await axios.get(`http://localhost:8080/contract/${address}`)
      if (!result.data.hash) {
        alert('Wrong Address!')
        setBalance('null');
        setEoaAccount('null');
      setTxn('null')
      setAddress2('Wrong Address!')
      } else {
        setBalance(result.data.value);
        setEoaAccount(result.data.from);
        setTxn(result.data.hash)
        setAddress2(address)
      }
      
    } catch (err) {
      return err
    } 
  }
    
  return (

    <div >
      <Container fluid><Row>
      <InputGroup  className="align-items-center" style={{ width: '100%' }} size="lg" onChange={onChange}>
        <InputGroup.Text id="inputGroup-sizing-lg">address</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      </Row></Container>
        
      <Container fluid><Row>
      <div className="d-grid gap-2">
      <Button style={{ width: '100%', height: '100%' }} variant="secondary" size="sm" onClick={onClick}>
        search
      </Button>
      </div>
      </Row></Container>
      
      <div className="d-flex justify-content-around">
    
      <Card style={{ width: '20%', height: '20%' }}>
        <Card.Body>
          <Card.Title>Address</Card.Title>
          <Card.Text>
            {address2}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '20%', height: '20%' }}>
        <Card.Body>
          <Card.Title>txn</Card.Title>
          <Card.Text>
            {txn}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '20%', height: '20%' }}>
        <Card.Body>
          <Card.Title>balance</Card.Title>
          <Card.Text>
            {balance}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '20%', height: '20%' }}>
        <Card.Body>
          <Card.Title>EOA Account</Card.Title>
          <Card.Text>
            {eoaAccount}
          </Card.Text>
        </Card.Body>
      </Card>

      
    </div>
    
    </div>
    
  )
}

export default ContractPage