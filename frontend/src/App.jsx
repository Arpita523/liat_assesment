import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

// Component Imports
import HeroSection from './components/HeroSection';
import WhyProperty from './components/WhyProperty';
import RetailLuxury from './components/RetailLuxury';
import DiningEntertainment from './components/DiningEntertainment';
import EventsPlatform from './components/EventsPlatform';
import Navigation from './components/Navigation';

// Phase 2 Modules
import EventsModule from './components/EventsModule';
import SponsorshipModule from './components/SponsorshipModule';
import LeasingModule from './components/LeasingModule';

// SEO Wrapper Component
const SEO = ({ title, description, children }) => {
  useEffect(() => {
    document.title = title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
  }, [title, description]);
  return <>{children}</>;
};

const MainOverview = () => (
  <div className="app-container">
    <Navigation />
    
    <main>
      <HeroSection />
      <WhyProperty />
      <RetailLuxury />
      <DiningEntertainment />
      <EventsPlatform />
    </main>
    
    <Footer />
  </div>
);

const Footer = () => (
  <footer style={{ padding: '4rem 2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', backgroundColor: '#000' }}>
    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>MALL OF AMERICA</h3>
    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
      Confidential Sales Deck. Not for public distribution.
    </p>
  </footer>
);

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SEO title="Mall of America | Corporate Sales Deck" description="Interactive sales deck for Mall of America leasing and sponsorships."><MainOverview /></SEO>} />
        <Route path="/events" element={<SEO title="Venues & Events | Mall of America" description="Explore event hosting capabilities and massive concert venues."><EventsModule /><Footer /></SEO>} />
        <Route path="/sponsorship" element={<SEO title="Partnerships & Sponsorship | Mall of America" description="Elevate your brand with digital takeovers and premium naming rights."><SponsorshipModule /><Footer /></SEO>} />
        <Route path="/leasing" element={<SEO title="Retail Leasing Paths | Mall of America" description="Curated leasing paths from popup activations to massive luxury flagships."><LeasingModule /><Footer /></SEO>} />
      </Routes>
    </>
  );
}

export default App;

