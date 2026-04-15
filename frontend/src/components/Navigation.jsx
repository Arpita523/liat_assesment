import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const linkStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1.1rem',
  color: '#fff',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
};

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(0,0,0,0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, letterSpacing: '2px' }}>
          MOA <span style={{ color: 'var(--color-text-accent)' }}>|</span> SALES
        </div>
        
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '80px',
              right: '2rem',
              width: '300px',
              background: 'rgba(20,20,20,0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'var(--border-radius)',
              padding: '2rem',
              zIndex: 99
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li><Link to="/" onClick={() => setMenuOpen(false)} style={linkStyle}>Overview</Link></li>
              <li><Link to="/leasing" onClick={() => setMenuOpen(false)} style={linkStyle}>Leasing Paths</Link></li>
              <li><Link to="/events" onClick={() => setMenuOpen(false)} style={linkStyle}>Events & Venues</Link></li>
              <li><Link to="/sponsorship" onClick={() => setMenuOpen(false)} style={linkStyle}>Sponsorship Tiers</Link></li>
              
              <li style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                <a href="/#events-&-leasing" onClick={() => setMenuOpen(false)} style={{...linkStyle, color: 'var(--color-text-accent)'}}>Contact Sales</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
