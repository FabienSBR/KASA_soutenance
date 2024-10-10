// Accordion.js
import React, { useState, useRef } from 'react';
import arrowUp from '../assets/icons/arrowUp.png';


const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); 

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={toggleAccordion}>
        <h3>{title}</h3>
        {/* Utilisation des icônes PNG pour les flèches */}
        <img
          src={arrowUp}
          alt={isOpen ? 'Flèche bas' : 'Flèche haut'}
          className={`accordion-icon ${isOpen ? 'rotate' : ''}`}
        />
      </div>
      <div
        ref={contentRef}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px' }}
      >
        <div className="accordion-content-text">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;