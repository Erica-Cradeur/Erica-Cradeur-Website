import React from 'react';
import Carousel from './Carousel';

function CalculatorImage() {
  const images = [
    process.env.PUBLIC_URL + '/calculatorScreenshot.png',
    process.env.PUBLIC_URL + '/calculatorScreenshotDark.PNG',
    process.env.PUBLIC_URL + '/CalcMobileLight.png',
    process.env.PUBLIC_URL + '/CalcMobileDark.png',
  ];

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default CalculatorImage;
