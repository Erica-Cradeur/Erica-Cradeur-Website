import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevClick}>Previous</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Carousel;
