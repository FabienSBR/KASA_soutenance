// src/components/Footer.jsx
import React from 'react';
import logoFooter from '../assets/logo-footer.png'; 

const Footer = () => {
  return (
    <footer>
      <img src={logoFooter} alt="Kasa Logo" />
      <p>&copy; 2024 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
