import React from 'react';
import Carousel from './Carousel';

function RunverseImage() {
  const images = [
    './RunverseScreenshot.png',
    './Runverse2Screenshot.png',
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default RunverseImage;
