import React, { useState } from 'react';
import Carousel from './Carousel';

function CalculatorProject() {
    const images = [
        './public/calculatorScreenshot.png',
        './public/calculatorScreenshotDark.PNG',
        './public/calcMobile.png',
        './public/calcMobileDark.PNG',
    ];
    
    const CalculatorProject = () => {
        return (
          <div className="calculator-project">
            <h1>Image Carousel</h1>
            <Carousel images={images} />
          </div>
        );
      };
}
export default CalculatorProject;
