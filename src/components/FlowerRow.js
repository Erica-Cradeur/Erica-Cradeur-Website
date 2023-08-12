import React from 'react';
import './FlowerRow.css';

function FlowerRow() {
  return (
    <div id="flowerRow" className="flowerRow">
      <img src={process.env.PUBLIC_URL + '/flowerRow.png'} alt="FlowerRow" />
    </div>
  );
}

export default FlowerRow;
