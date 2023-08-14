import React from 'react';
import Carousel from './Carousel';

function WebsiteImage() {
  const images = [
    './website1.PNG',
    './website2.PNG',
    './website3.PNG',
    './website4.PNG',
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default WebsiteImage;
