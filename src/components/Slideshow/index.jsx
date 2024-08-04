import React, { useState } from 'react';
import './index.scss';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const shouldShowControls = images.length > 1;

  return (
    <div className="slideshow">
      {shouldShowControls && (
        <>
          <button className="slideshow-button prev" onClick={prevSlide}>
            <img src={ArrowLeft} alt="Previous Slide" />
          </button>
          <button className="slideshow-button next" onClick={nextSlide}>
            <img src={ArrowRight} alt="Next Slide" />
          </button>
        </>
      )}
      <div
        className="slideshow-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {shouldShowControls && (
        <div className="slideshow-fraction">
          {`${currentIndex + 1}/${images.length}`}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
