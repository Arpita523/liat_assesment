import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

// Digideck Slides
import HeroDeck from './components/deck/HeroDeck';
import WhyPropertyDeck from './components/deck/WhyPropertyDeck';
import RetailLuxuryDeck from './components/deck/RetailLuxuryDeck';
import DiningEntertainmentDeck from './components/deck/DiningEntertainmentDeck';
import EventsPlatformDeck from './components/deck/EventsPlatformDeck';
import ContactDeck from './components/deck/ContactDeck';

// Navigation
import SidebarNav from './components/Navigation/SidebarNav';

// Deep Dive Modules (accessible from main deck)
import EventsModule from './components/EventsModule';
import SponsorshipModule from './components/SponsorshipModule';
import LeasingModule from './components/LeasingModule';
import SlideOverview from './components/Navigation/SlideOverview';

const TOTAL_SLIDES = 6;

const SlideTransition = ({ direction, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction * 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: direction * -50 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
};

const MainDeck = ({ onOpenModule }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  const navigateToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    setDirection(index > currentSlide ? 1 : -1);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 100);
  }, [currentSlide, isTransitioning]);

  // Handle scroll navigation
  useEffect(() => {
    let lastScrollTime = 0;
    const scrollCooldown = 1200;

    const handleWheel = (e) => {
      const now = Date.now();
      if (now - lastScrollTime < scrollCooldown) return;

      if (e.deltaY > 50) {
        if (currentSlide < TOTAL_SLIDES - 1) {
          navigateToSlide(currentSlide + 1);
          lastScrollTime = now;
        }
      } else if (e.deltaY < -50) {
        if (currentSlide > 0) {
          navigateToSlide(currentSlide - 1);
          lastScrollTime = now;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlide, navigateToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        navigateToSlide(Math.min(TOTAL_SLIDES - 1, currentSlide + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        navigateToSlide(Math.max(0, currentSlide - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, navigateToSlide]);

  const slides = [
    <HeroDeck key="hero" onNext={() => navigateToSlide(1)} />,
    <WhyPropertyDeck key="why" onNext={() => navigateToSlide(2)} />,
    <RetailLuxuryDeck key="retail" onNext={() => navigateToSlide(3)} />,
    <DiningEntertainmentDeck key="dining" onNext={() => navigateToSlide(4)} />,
    <EventsPlatformDeck key="events" onNext={() => navigateToSlide(5)} onOpenModule={onOpenModule} />,
    <ContactDeck key="contact" onOpenModule={onOpenModule} />
  ];

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden',
      position: 'relative',
      paddingLeft: '80px', 
      background: 'var(--color-base)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <SidebarNav 
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onNavigate={navigateToSlide}
        onOpenModule={onOpenModule}
        onOpenOverview={() => setIsOverviewOpen(true)}
      />

      <AnimatePresence>
        {isOverviewOpen && (
          <SlideOverview 
            isOpen={isOverviewOpen}
            onClose={() => setIsOverviewOpen(false)}
            currentSlide={currentSlide}
            onNavigate={navigateToSlide}
          />
        )}
      </AnimatePresence>

      {/* Main Slide Stage */}
      <div style={{ 
        width: '100%', 
        height: '100%', 
        maxWidth: '1600px', 
        margin: '0 auto',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <AnimatePresence mode="wait" initial={false}>
          <SlideTransition key={currentSlide} direction={direction}>
            {slides[currentSlide]}
          </SlideTransition>
        </AnimatePresence>

        {/* Deck Navigation Arrows (Persistent) */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '2rem',
          transform: 'translateY(-50%)',
          zIndex: 100
        }}>
          <button
            onClick={() => navigateToSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(5, 5, 5, 0.5)',
              backdropFilter: 'blur(10px)',
              color: currentSlide === 0 ? 'rgba(255, 255, 255, 0.1)' : '#fff',
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            ‹
          </button>
        </div>

        <div style={{
          position: 'absolute',
          top: '50%',
          right: '5rem', // Adjusted for progress bar space
          transform: 'translateY(-50%)',
          zIndex: 100
        }}>
          <button
            onClick={() => navigateToSlide(Math.min(TOTAL_SLIDES - 1, currentSlide + 1))}
            disabled={currentSlide === TOTAL_SLIDES - 1}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(5, 5, 5, 0.5)',
              backdropFilter: 'blur(10px)',
              color: currentSlide === TOTAL_SLIDES - 1 ? 'rgba(255, 255, 255, 0.1)' : '#fff',
              cursor: currentSlide === TOTAL_SLIDES - 1 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            ›
          </button>
        </div>
      </div>

      <div className="grain-overlay" />

      {/* Progress Bar (Bottom) */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: '80px',
        right: 0,
        height: '4px',
        background: 'rgba(255, 255, 255, 0.05)',
        zIndex: 1000
      }}>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%` }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: '100%',
            background: 'var(--color-gold-mid)',
            boxShadow: '0 0 20px rgba(201, 169, 98, 0.4)'
          }}
        />
      </div>

      {/* Slide Progress Indicator (Vertical Dots with labels) */}
      <div style={{
        position: 'fixed',
        right: '3rem',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        alignItems: 'flex-end',
        zIndex: 100
      }}>
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <div 
            key={i}
            onClick={() => navigateToSlide(i)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer'
            }}
          >
            <span style={{
              fontSize: '0.6rem',
              color: i === currentSlide ? 'var(--color-gold-mid)' : 'rgba(255, 255, 255, 0.4)',
              opacity: i === currentSlide ? 1 : 0, // Ensure inactive labels are hidden
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: 700,
              transition: 'all 0.3s ease',
              marginRight: '0.5rem'
            }}>
              {i === 0 ? 'Intro' : i === 1 ? 'Market' : i === 2 ? 'Retail' : i === 3 ? 'Dining' : i === 4 ? 'Events' : 'Contact'}
            </span>
            <div 
              style={{
                width: i === currentSlide ? '40px' : '15px',
                height: '2px',
                background: i === currentSlide ? 'var(--color-gold-mid)' : 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};



function App() {
  const [activeModule, setActiveModule] = useState(null);

  const openModule = (module) => {
    setActiveModule(module);
    document.body.style.overflow = 'hidden';
  };

  const closeModule = () => {
    setActiveModule(null);
    document.body.style.overflow = '';
  };

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      overflow: activeModule ? 'auto' : 'hidden',
      background: 'var(--color-base)'
    }}>
      <MainDeck onOpenModule={openModule} />

      {/* Module Overlays */}
      <AnimatePresence>
        {activeModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'var(--color-base)',
              zIndex: 2000,
              overflow: 'auto'
            }}
          >
            <button
              onClick={closeModule}
              style={{
                position: 'fixed',
                top: '1.5rem',
                right: '1.5rem',
                zIndex: 2001,
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.textContent = '×';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.textContent = '×';
              }}
            >
              ×
            </button>

            {activeModule === 'events' && <EventsModule onClose={closeModule} />}
            {activeModule === 'sponsorship' && <SponsorshipModule onClose={closeModule} />}
            {activeModule === 'leasing' && <LeasingModule onClose={closeModule} />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
