import React from 'react';
import Carousel from './Carousel';

function WordWizardryImage() {
  const images = [
    process.env.PUBLIC_URL + '/WordWizardry1.PNG',
    process.env.PUBLIC_URL + '/WordWizardry2.PNG',
    process.env.PUBLIC_URL + '/WordWizardry3.PNG',
    process.env.PUBLIC_URL + '/WordWizardry4.PNG',
    process.env.PUBLIC_URL + '/WordWizardry5.PNG',
    process.env.PUBLIC_URL + '/WordWizardry6.PNG',
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default WordWizardryImage;