// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; // Page "Home"
import About from './pages/About';  // Import de la page "About"
import Logement from './pages/Logement'; // Import de la page "Logement"
import NotFound from './pages/NotFound'; // Pour la page 404 si besoin

function App() {
  return (
    <div>
      
    
      <Routes>
        <Route path="/" element={<Home />} />  {/* Route vers la page d'accueil */}
        <Route path="/about" element={<About />} />  {/* Route vers "About" */}
        <Route path="/logement/:id" element={<Logement />} />  {/* Route vers "Logement" avec un paramètre */}
        <Route path="*" element={<NotFound />} />  {/* Page 404 pour les routes non trouvées */}
      </Routes>

    </div>
  );
}

export default App;
