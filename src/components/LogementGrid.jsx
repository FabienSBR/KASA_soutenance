// src/components/LogementGrid.jsx
import React from 'react';
import Card from './Card';
import logements from '../data/logements.json'; 

const LogementGrid = () => {
  return (
    <div className="logement-grid">
      {logements.map(logement => (
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </div>
  );
};

export default LogementGrid;
