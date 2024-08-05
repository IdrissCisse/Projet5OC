import React from 'react';
import './index.scss';

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div className="rating">
      {stars.map((isFilled, index) => (
        <i
          key={index}
          className={`fa-solid fa-star ${isFilled ? 'filled' : 'unfilled'}`}
        ></i>
      ))}
    </div>
  );
};

export default Rating;
