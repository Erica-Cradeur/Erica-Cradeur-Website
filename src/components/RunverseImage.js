import React from 'react';
import Carousel from './Carousel';

function RunverseImage() {
  const images = [
    process.env.PUBLIC_URL + '/RunverseScreenshot.png',
    process.env.PUBLIC_URL + '/Runverse2Screenshot.png',
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default RunverseImage;
