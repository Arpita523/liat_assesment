import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const SponsorshipModule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: 'var(--color-surface)', minHeight: '100vh', paddingBottom: '4rem' }}>
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
            <p style={{ color: 'var(--color-text-accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontWeight: 600 }}>Partnerships</p>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Sponsorship Tiers
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', maxWidth: '800px', marginBottom: '4rem', lineHeight: 1.6 }}>
              Align your brand with a global destination. From naming rights of our theme park to massive digital media takeovers across the property, we offer unparalleled reach.
            </p>
          </motion.div>

          {/* Pricing/Tiers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Tier 1 */}
            <motion.div
              className="glass-panel"
              whileHover={{ y: -10 }}
              style={{ transition: 'transform 0.3s ease', borderTop: '4px solid #fff' }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Digital Takeover</h3>
              <p style={{ color: 'var(--color-text-accent)', fontSize: '1.2rem', marginBottom: '1rem' }}>OOH & Media</p>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>Dominate the property with over 300+ digital screens, securing 100% share of voice during key retail periods.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>✓ 360° Digital Displays</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>✓ Parking Deck Wrap</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>✓ Wi-Fi Sponsorship</li>
              </ul>
              <button id="sponsorship-tier1-btn" className="luxury-button" style={{ width: '100%', borderColor: '#fff' }}>Request Media Kit</button>
            </motion.div>

            {/* Tier 2 */}
            <motion.div
              className="glass-panel"
              whileHover={{ y: -10 }}
              style={{ transition: 'transform 0.3s ease', borderTop: '4px solid var(--color-text-accent)', background: 'linear-gradient(180deg, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0) 100%)' }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Experiential Dominance</h3>
              <p style={{ color: 'var(--color-text-accent)', fontSize: '1.2rem', marginBottom: '1rem' }}>Activation & Retail</p>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>Own a high-traffic physical footprint in the center of the Avenue. Best for vehicle launches, large-scale samplings, and immersive build-outs.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>✓ 40x40 Prime Footprint</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>✓ Rigging & Power Included</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>✓ Dedicated Security</li>
              </ul>
              <button id="sponsorship-tier2-btn" className="luxury-button" style={{ width: '100%', background: 'var(--color-text-accent)', color: '#000', borderColor: 'var(--color-text-accent)' }}>Contact Sales</button>
            </motion.div>

            {/* Tier 3 */}
            <motion.div
              className="glass-panel"
              whileHover={{ y: -10 }}
              style={{ transition: 'transform 0.3s ease', borderTop: '4px solid rgba(255,255,255,0.2)' }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Naming Rights</h3>
              <p style={{ color: 'var(--color-text-accent)', fontSize: '1.2rem', marginBottom: '1rem' }}>Legacy Partnership</p>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>Multi-year foundational sponsorships. Attach your global brand to one of our key attractions like the amusement park or aquarium.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>✓ Brand Integration</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>✓ Global Press Exposure</li>
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>✓ VIP Concierge Access</li>
              </ul>
              <button id="sponsorship-tier3-btn" className="luxury-button" style={{ width: '100%' }}>Executive Inquiry</button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SponsorshipModule;
