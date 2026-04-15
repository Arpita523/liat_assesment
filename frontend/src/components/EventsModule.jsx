import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const EventsModule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: 'var(--color-base)', minHeight: '100vh', paddingBottom: '4rem' }}>
      <Navigation />
      
      <main style={{ paddingTop: '100px' }}>
        <section className="container">
          <Link to="/" style={{ color: 'var(--color-text-secondary)', display: 'inline-flex', alignItems: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
            ← Back to Overview
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ color: 'var(--color-text-accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontWeight: 600 }}>Module</p>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              World-Class Venues & Events
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', maxWidth: '800px', marginBottom: '4rem', lineHeight: 1.6 }}>
              Our dedicated entertainment ecosystems host everything from large-scale concerts to intimate corporate retreats. 
              Explore our primary stages and modular activation zones available for booking.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {/* Venue 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel"
              style={{ overflow: 'hidden', padding: 0 }}
            >
              <img 
                src="/concert_rotunda.png" 
                alt="Huntington Bank Rotunda" 
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>The Grand Rotunda</h3>
                <ul style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong>Capacity:</strong> 5,000+</li>
                  <li><strong>Ideal for:</strong> Concerts, Celebrity Meet & Greets</li>
                  <li><strong>Features:</strong> 4-story ceiling, full A/V integration</li>
                </ul>
                <button id="events-rotunda-btn" className="luxury-button" style={{ width: '100%' }}>Inquire Audio/Visual Specs</button>
              </div>
            </motion.div>

            {/* Venue 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel"
              style={{ overflow: 'hidden', padding: 0 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Convention Space" 
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Expo Hall</h3>
                <ul style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong>Capacity:</strong> 25,000 sq ft</li>
                  <li><strong>Ideal for:</strong> Conventions, Product Launches</li>
                  <li><strong>Features:</strong> Modular walls, drive-in loading bays</li>
                </ul>
                <button id="events-expo-btn" className="luxury-button" style={{ width: '100%' }}>View Floorplans</button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EventsModule;
