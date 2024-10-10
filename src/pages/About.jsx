// src/pages/About.jsx
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import aboutBanner from '../assets/aboutBanner.jpg';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';

const About = () => {
  return (

    <>

    <div className="container">

      <Header />
    
      <Banner 
      image={aboutBanner}
      alt="Photo de paysage montagneux"
      overlayOpacity={0.2}
      />

    </div>

    <div className="about-container"> 

      <div className="about-accordions">

        <Accordion
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Accordion
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Accordion
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Accordion
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés."
        />

      </div>

    </div>

    <Footer />

    </>

  );
};

export default About;
