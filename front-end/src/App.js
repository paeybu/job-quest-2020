import React, { useEffect, useState } from 'react';
import { Layout, Input, InputNumber, List, Button } from 'antd';
import axios from 'axios';
import './App.css';

const { Content } = Layout;

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [amount, setAmount] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fetchJokes = async () => {
    let url = `${ROOT_URL}/${amount}?escape=javascript`;
    if (firstName !== '') {
      url += `&firstName=${firstName}`;
    }
    if (lastName !== '') {
      url += `&lastName=${lastName}`;
    }
    const res = await axios.get(url);
    setJokes(res.data.value);
  };

  const ROOT_URL = 'https://api.icndb.com/jokes/random';

  return (
    <Content style={{ padding: '20px 50px', margin: '0 auto' }}>
      <p>Number of jokes:</p>
      <InputNumber value={amount} onChange={(value) => setAmount(value)} />
      <p>First name:</p>
      <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <p>Last name:</p>
      <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <Button onClick={fetchJokes} type='primary' style={{ marginTop: '10px' }}>
        Generate
      </Button>
      <List
        dataSource={jokes}
        renderItem={(item) => <List.Item>{item.joke}</List.Item>}
      />
    </Content>
  );
};

export default App;
