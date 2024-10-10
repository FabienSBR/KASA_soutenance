// Carousel.js
import React, { useState } from 'react';


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt="Logement" className="carousel-image" />
      {images.length > 1 && (
        <>
          <button className="carousel-button prev" onClick={goToPrevious}>❮</button>
          <button className="carousel-button next" onClick={goToNext}>❯</button>
        </>
      )}

      {/* Affichage du numéro de l'image */}
      {images.length > 1 && (
      <div className="image-counter">
        {currentIndex + 1} / {images.length} {/* +1  */}
      </div>
      )}
    </div>
  );
};

export default Carousel;
