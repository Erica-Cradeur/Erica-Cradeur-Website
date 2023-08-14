import React from 'react';
import Carousel from './Carousel';

function CalculatorImage() {
  const images = [
    './calculatorScreenshot.png',
    './calculatorScreenshotDark.PNG',
    './CalcMobileLight.png',
    './CalcMobileDark.png',
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default CalculatorImage;
