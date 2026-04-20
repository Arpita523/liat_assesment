import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HeroDeck = ({ onNext }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: 'var(--color-base)',
      padding: '4rem' // Ensuring consistent slide padding
    }}>
      {/* Cinematic Video Background */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%'
        }}
        initial={{ scale: 1.15 }}
        animate={{ scale: isLoaded ? 1 : 1.15 }}
        transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            filter: 'brightness(0.35) contrast(1.1)'
          }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-fashion-shopping-mall-4354-large.mp4" type="video/mp4" />
        </video>
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(to bottom, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.4) 50%, rgba(5,5,5,0.9) 100%)`,
          zIndex: 1
        }} />
      </motion.div>

      {/* Content Container */}
      <motion.div 
        style={{ 
          position: 'relative', 
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          maxWidth: '1200px'
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            marginBottom: '1rem'
          }}
        >
          <span className="text-label" style={{ color: 'var(--color-gold-mid)' }}>Mall of America</span>
          <div style={{ width: '40px', height: '1px', background: 'var(--color-gold-mid)', opacity: 0.5 }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            fontSize: 'clamp(3.5rem, 8vw, 7rem)', 
            marginBottom: '1rem',
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: 0.85,
            letterSpacing: '-0.02em'
          }}
        >
          <span style={{ display: 'block', opacity: 0.9 }}>Redefining the</span>
          <span className="text-gold" style={{ display: 'block' }}>Global Stage.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '600px',
            marginBottom: '3rem',
            lineHeight: 1.6,
            fontWeight: 300
          }}
        >
          Experience the scale, the energy, and the commercial opportunity in North America's most iconic destination.
        </motion.p>

        <div style={{
          display: 'flex',
          gap: '4rem',
          marginBottom: '4rem'
        }}>
          {[
            { value: '40M+', label: 'Annual Guests' },
            { value: '520+', label: 'Premium Brands' },
            { value: '5.6M', label: 'Sq Ft Impact' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <div style={{
                fontSize: '2rem',
                fontWeight: 600,
                color: '#fff',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '-1px'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--color-gold-mid)',
                fontWeight: 600
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: isLoaded ? 1 : 0 }}
           transition={{ duration: 1, delay: 1.5 }}
        >
          <button 
            className="btn-primary"
            onClick={onNext}
            style={{ padding: '1.25rem 3rem' }}
          >
            Start Presentation
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </motion.div>

      <div style={{
        position: 'absolute',
        bottom: '3rem',
        right: '3rem',
        zIndex: 10,
        textAlign: 'right',
        opacity: 0.3
      }}>
        <div style={{ fontSize: '0.6rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '4px' }}>
          Confidential Commercial Proposal // 2024
        </div>
      </div>
    </div>
  );
};

export default HeroDeck;
