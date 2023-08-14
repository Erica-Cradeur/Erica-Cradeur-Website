import React from 'react';
import Carousel from './Carousel';

function WikipediaRedesignImage() {
  const images = [
    './WikipediaRedesign1.PNG',
    './WikipediaRedesign2.PNG',
    './WikipediaRedesign3.PNG',
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default WikipediaRedesignImage;
