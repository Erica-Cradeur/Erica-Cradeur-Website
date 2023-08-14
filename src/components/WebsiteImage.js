import React from 'react';
import Carousel from './Carousel';

function WebsiteImage() {
  const images = [
    './WebsiteScreenshot.png',
    'https://source.unsplash.com/random?landscape,cars',
    'https://source.unsplash.com/random?landscape,night',
    'https://source.unsplash.com/random?landscape,city',
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default WebsiteImage;
