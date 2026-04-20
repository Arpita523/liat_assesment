import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Target, ShoppingBag, UtensilsCrossed, Calendar, Mail } from 'lucide-react';

const SlideOverview = ({ isOpen, onClose, currentSlide, onNavigate }) => {
  const slides = [
    { title: "Introduction", icon: Home, subtitle: "Epicenter of Scale" },
    { title: "Market Reach", icon: Target, subtitle: "Regional Dominance" },
    { title: "Retail Gallery", icon: ShoppingBag, subtitle: "Luxury & Heritage" },
    { title: "Dining & Social", icon: UtensilsCrossed, subtitle: "Global Flavors" },
    { title: "Events Platform", icon: Calendar, subtitle: "Cultural Epicenter" },
    { title: "Connect", icon: Mail, subtitle: "Next Steps" }
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(5, 5, 5, 0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 5000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem'
      }}
    >
      <button 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '3rem',
          right: '3rem',
          background: 'none',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.4)',
          cursor: 'pointer'
        }}
      >
        <X size={40} />
      </button>

      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>Deck Overview</span>
        <h2 style={{ fontSize: '3rem', color: '#fff' }}>Quick <span className="text-gold">Navigation.</span></h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        width: '100%',
        maxWidth: '1200px'
      }}>
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              onNavigate(i);
              onClose();
            }}
            style={{
              padding: '3rem',
              background: i === currentSlide ? 'rgba(201, 169, 98, 0.1)' : 'rgba(255, 255, 255, 0.03)',
              border: i === currentSlide ? '1px solid var(--color-gold-mid)' : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: i === currentSlide ? 'var(--color-gold-mid)' : 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <slide.icon size={28} color={i === currentSlide ? '#000' : 'var(--color-gold-mid)'} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '2px', marginBottom: '0.5rem' }}>Slide 0{i + 1}</div>
              <div style={{ fontSize: '1.5rem', color: i === currentSlide ? 'var(--color-gold-mid)' : '#fff', fontWeight: 600 }}>{slide.title}</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.4)', marginTop: '0.25rem' }}>{slide.subtitle}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SlideOverview;
