import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ProductGrid />
      <Testimonials />
      <Footer />
    </div>
  );
};
export default LandingPage;