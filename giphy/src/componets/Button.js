import React, { useEffect, useState } from 'react';
import Giphy from './Giphy';

const Button = () => {
  const handleClick = () => {
    Giphy.helperFunction();
  };

  return (
    <div>
      {/* <button onClick={Giphy.handleClick}>Make API Call Again</button> */}
    </div>
  );
};

export default Button;
