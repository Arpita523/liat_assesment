import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MapPin, Users, ShoppingBag, Stars } from 'lucide-react';
import './index.css';

// Component Imports
import HeroSection from './components/HeroSection';
import WhyProperty from './components/WhyProperty';
import RetailLuxury from './components/RetailLuxury';
import DiningEntertainment from './components/DiningEntertainment';
import EventsPlatform from './components/EventsPlatform';
import Navigation from './components/Navigation';

function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="app-container">
      <Navigation />
      
      <main>
        <HeroSection />
        <WhyProperty />
        <RetailLuxury />
        <DiningEntertainment />
        <EventsPlatform />
      </main>
      
      {/* Footer */}
      <footer style={{ padding: '4rem 2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', backgroundColor: '#000' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>MALL OF AMERICA</h3>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          Confidential Sales Deck. Not for public distribution.
        </p>
      </footer>
    </div>
  );
}

export default App;
