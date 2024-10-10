// src/components/Banner.jsx
import React from 'react';


const Banner = (props) => {
  return (
    <div className="banner">
      <img src={props.image} alt={props.alt} />
      <div 
        className="banner-overlay" 
        style={{ backgroundColor: `rgba(0, 0, 0, ${props.overlayOpacity})` }}
      />
      <h1>{props.title}</h1> 
    </div>
  );
};

export default Banner;


