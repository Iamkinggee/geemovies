import React from 'react';

function Coins({ coins }) {
  return (
    <ul>
      {coins.map((coin) => (
        <li key={coin.id}>{coin.name}</li>
      ))}
    </ul>
  );
}

export default Coins;
