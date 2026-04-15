import React from 'react';
import { motion } from 'framer-motion';

const DiningEntertainment = () => {
  return (
    <section id="entertainment" className="section" style={{ backgroundColor: '#000', position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p style={{ color: 'var(--color-text-accent)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '1rem', fontWeight: 600 }}>Destination</p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', maxWidth: '900px', margin: '0 auto' }}>
            Where Dining Meets Entertainment
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{ padding: 0, overflow: 'hidden', position: 'relative', height: '450px' }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Fine Dining" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', zIndex: 2 }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Culinary Excellence</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>Over 50 dining concepts ranging from elevated fine-dining to experiential casual eateries.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel"
            style={{ padding: 0, overflow: 'hidden', position: 'relative', height: '450px' }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
            <img 
              src="/indoor_theme_park.png" 
              alt="Indoor Theme Park" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', zIndex: 2 }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Nickelodeon Universe</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>The nation's largest indoor theme park. A massive draw for millions of families annually.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiningEntertainment;
