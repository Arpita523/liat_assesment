import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const handleExplore = () => {
    const target = document.getElementById('the-property');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Cinematic Video Background with image fallback */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        zIndex: 0
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)',
          zIndex: 1
        }} />
        {/* Video-first with poster image as fallback */}
        <video
          autoPlay loop muted playsInline
          poster="https://images.unsplash.com/photo-1519500099198-fd81846b8f03?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="https://cdn.pixabay.com/video/2019/06/11/24450-342055790_large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{
            color: 'var(--color-text-accent)',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            marginBottom: '1.5rem',
            fontSize: '0.9rem',
            fontWeight: 600
          }}>
            The Definition of Scale
          </p>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            marginBottom: '1rem',
            textShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            MALL OF AMERICA
          </h1>
          <p className="text-gradient" style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            maxWidth: '600px',
            margin: '0 auto 3rem auto',
            fontWeight: 300
          }}>
            More than retail. A global destination. 40 million visitors. Endless possibilities.
          </p>
          
          <motion.button 
            id="hero-explore-btn"
            className="luxury-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExplore}
          >
            Explore Opportunities
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ position: 'absolute', bottom: '2rem', zIndex: 10, cursor: 'pointer' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        onClick={handleExplore}
      >
        <ChevronDown size={32} color="rgba(255,255,255,0.5)" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
