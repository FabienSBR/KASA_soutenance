// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Kasa Logo" />
      <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Accueil</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
