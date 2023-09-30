import React from 'react';
import Carousel from './Carousel';

function WebsiteImage() {
  const images = [
    process.env.PUBLIC_URL + '/website1.PNG',
    process.env.PUBLIC_URL + '/website2.PNG',
    process.env.PUBLIC_URL + '/website3.PNG',
    process.env.PUBLIC_URL + '/website4.PNG',
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default WebsiteImage;
