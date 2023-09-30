import React from 'react';
import Carousel from './Carousel';

function WikipediaRedesignImage() {
  const images = [
    process.env.PUBLIC_URL + '/WikipediaRedesign1.PNG',
    process.env.PUBLIC_URL + '/WikipediaRedesign2.PNG',
    process.env.PUBLIC_URL + '/WikipediaRedesign3.PNG',
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default WikipediaRedesignImage;
