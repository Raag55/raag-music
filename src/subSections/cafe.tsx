import React from 'react';
import Header from '../cafeComponents/Header';
import Hero from '../cafeComponents/Hero';
import About from '../cafeComponents/About';
import Menu from '../cafeComponents/Menu';
import Gallery from '../cafeComponents/Gallery';
import Events from '../cafeComponents/Events';
import Reviews from '../cafeComponents/Reviews';
import Contact from '../cafeComponents/Contact';
import Footer from '../cafeComponents/Footer';

function Cafe() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Events />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default Cafe;