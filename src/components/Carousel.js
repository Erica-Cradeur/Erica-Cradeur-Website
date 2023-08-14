import React, { useState } from 'react';

function Carousel({ images }) {
  const [curSlide, setCurSlide] = useState(0);

  const nextSlide = () => {
    setCurSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === curSlide ? 'active' : ''}`}
          style={{ transform: `translateX(${100 * (index - curSlide)}%)` }}
        >
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
      <button className="btn btn-next" onClick={nextSlide}>
        <img className="NextButton" src={process.env.PUBLIC_URL + './arrow-right-solid.svg'} alt="Next" />
      </button>
      <button className="btn btn-prev" onClick={prevSlide}>
        <img className="BackButton" src={process.env.PUBLIC_URL + './arrow-left-solid.svg'} alt="Back" />
      </button>
    </div>
  );
}

export default Carousel;
