import React from 'react';

function Headshot() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/headshot.jpeg'} alt="headshot" />
    </div>
  );
}

export default Headshot;
