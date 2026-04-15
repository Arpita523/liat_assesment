import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const LeasingModule = () => {
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
            <p style={{ color: 'var(--color-text-accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontWeight: 600 }}>Leasing Paths</p>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Retail Opportunities
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', maxWidth: '800px', marginBottom: '4rem', lineHeight: 1.6 }}>
              Select your trajectory. Whether establishing a global luxury flagship in The Avenue or testing the market with a 3-month pop-up, we have a curated district built for your audience.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
            
            {/* Path 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', background: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--border-radius)' }}
            >
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Luxury Flagships</h3>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Built for the world's most desired brands. The Avenue features oversized glass facades, premium marble concourses, and dedicated VIP curbside drop-offs.
                </p>
                <button id="leasing-luxury-btn" className="luxury-button" style={{ borderColor: 'var(--color-text-accent)', color: 'var(--color-text-accent)' }}>View The Avenue Demographics</button>
              </div>
              <div style={{ flex: '1 1 300px', height: '300px', borderRadius: 'var(--border-radius)', overflow: 'hidden' }}>
                <img src="/luxury_avenue.png" alt="Luxury Leasing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>

            {/* Path 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', background: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--border-radius)' }}
            >
              <div style={{ flex: '1 1 300px', height: '300px', borderRadius: 'var(--border-radius)', overflow: 'hidden', order: -1 }}>
                <img src="https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Mass Market" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contemporary & Mass Market</h3>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Positioned near major attractions like the indoor theme park. Benefit from massive organic foot traffic running into the tens of millions annually.
                </p>
                <button id="leasing-mass-btn" className="luxury-button">See Available Footprints</button>
              </div>
            </motion.div>

            {/* Path 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', background: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--border-radius)' }}
            >
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Pop-Up & Experiential</h3>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Short-term leases on high-traffic rotation zones. Turn-key digital integration and flexible architecture allow you to launch in under 30 days.
                </p>
                <button id="leasing-popup-btn" className="luxury-button">Explore Pop-Up Rates</button>
              </div>
              <div style={{ flex: '1 1 300px', height: '300px', borderRadius: 'var(--border-radius)', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pop Up Leasing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>

          </div>
        </section>
      </main>
    </div>
  );
}

export default LeasingModule;
