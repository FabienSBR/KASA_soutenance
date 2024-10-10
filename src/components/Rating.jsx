// Rating.js
import React from 'react';


const Rating = ({ rating }) => {
const maxStars = 5; // Le nombre maximum d'étoiles
  const filledStars = Array.from({ length: rating }, (_, index) => (
    <span key={index} className="star filled">★</span>
  )); // Crée un tableau d'étoiles remplies
  
  const emptyStars = Array.from({ length: maxStars - rating }, (_, index) => (
    <span key={index + rating} className="star empty">★</span>
  )); // Crée un tableau d'étoiles vides

  return (
    <div className="rating">
      {filledStars.map((_, index) => (
        <span key={index} className="star filled">★</span>
      ))}
      {emptyStars.map((_, index) => (
        <span key={index} className="star empty">★</span>
      ))}
    </div>
  );
};

export default Rating;
