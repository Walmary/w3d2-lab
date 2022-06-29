import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Giphy = () => {
  const [gif, setGif] = useState([]);

  const helperFunction = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    const data = response.data;
    setGif(data);
  };

  useEffect(() => {
    helperFunction();
  }, []);

  const handleClick = () => {
    helperFunction();
  };

  return (
    <div>
      <button onClick={handleClick}>Make API Call</button>
      <img src={gif.message}></img>
    </div>
  );
};

export default Giphy;
