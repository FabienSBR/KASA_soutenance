// Logement.js
import React from 'react';
import { useParams } from 'react-router-dom'; 
import data from '../data/logements.json'; 
import Carousel from '../components/Carousel';
import Rating from '../components/Rating';
import Host from '../components/Host';
import Accordion from '../components/Accordion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../pages/NotFound'

const Logement = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <NotFound/>;
  }

  return (
    <>
    <div className="container">
    <Header />
    </div>
    <div className="logement-container">
      {/* Carrousel d'images */}
      <Carousel images={logement.pictures} />
      
      <div className="logement-details">
        {/* Titre et localisation */}
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="logement-tag">{tag}</span>
            ))}
          </div>
        </div>
        
        {/* Hôte et notation */}
        <div className="logement-host-rating">
          <Host host={logement.host} />
          <Rating rating={logement.rating} />
        </div>
      </div>
      
      {/* Accordéons : Description et Équipements */}
      <div className="logement-accordions">
        <Accordion title="Description" content={logement.description} />
        <Accordion title="Équipements" content={
      <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    } />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Logement;
