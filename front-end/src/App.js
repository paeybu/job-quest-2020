import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    const res = await axios.get(`${ROOT_URL}/3`);
    setJokes(res.data.value);
  };

  const ROOT_URL = 'https://api.icndb.com/jokes/random';

  return (
    <div className='App'>
      <ul>
        {jokes.map(({ joke }) => (
          <li>{joke}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
