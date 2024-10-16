// src/pages/NotFound.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <>

    <div className="container">
    <Header />
    </div>

    <div className='error_container'>
       <h1 className='error_title'>404</h1>
       <p className='error_subtitle'>{`Oups! La page que vous demandez n'existe pas.`}</p>
       <NavLink className="error_link" to="/">{`Retourner sur la page d'accueil`}</NavLink>
    </div>

    <Footer />

    </>
  );
};

export default NotFound;
