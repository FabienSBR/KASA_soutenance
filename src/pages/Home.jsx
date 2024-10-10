// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import homeBanner from '../assets/banner.jpg';
import LogementGrid from '../components/LogementGrid';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <div className="container">
      <Header />
      <Banner 
      image={homeBanner}
      alt="Photo de paysage côtier"
      title="Chez vous, partout et ailleurs"
      overlayOpacity={0.5}
      />
      <LogementGrid />
    </div>
      <Footer />
    </>
  );
};

export default Home;
