import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      
      // Update active section based on scroll position
      const sections = ['the-property', 'luxury-retail', 'entertainment', 'events-leasing'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Overview' },
    { to: '/leasing', label: 'Leasing' },
    { to: '/events', label: 'Events' },
    { to: '/sponsorship', label: 'Sponsorships' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        {/* Logo */}
        <Link 
          to="/" 
          style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.4rem', 
            fontWeight: 600, 
            letterSpacing: '3px', 
            textDecoration: 'none', 
            color: 'inherit',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span style={{
            background: 'var(--gradient-gold)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            MOA
          </span>
          <span style={{ color: 'var(--color-text-muted)', fontWeight: 300 }}>|</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '2px', color: 'var(--color-text-muted)' }}>
            SALES DECK
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem'
        }} className="desktop-nav">
          {navLinks.map((link, i) => (
            <Link 
              key={i}
              to={link.to}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: location.pathname === link.to ? 'var(--color-text-accent)' : 'var(--color-text-secondary)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                transition: 'color 0.3s ease',
                position: 'relative',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== link.to) {
                  e.target.style.color = 'var(--color-text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== link.to) {
                  e.target.style.color = 'var(--color-text-secondary)';
                }
              }}
            >
              {link.label}
              {location.pathname === link.to && (
                <motion.div
                  layoutId="nav-indicator"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'var(--gradient-gold)'
                  }}
                />
              )}
            </Link>
          ))}
          
          <motion.a 
            href="/#events-leasing"
            className="btn-primary"
            style={{ 
              padding: '0.75rem 1.5rem', 
              fontSize: '0.75rem',
              textDecoration: 'none'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Sales
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ 
            background: 'transparent', 
            border: 'none', 
            color: '#fff', 
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
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
              background: 'rgba(10, 10, 10, 0.98)',
              backdropFilter: 'blur(20px)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem'
              }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link 
                    to={link.to} 
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2rem',
                      color: location.pathname === link.to ? 'var(--color-text-accent)' : 'var(--color-text-primary)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    {link.label}
                    <ChevronRight size={20} style={{ opacity: 0.5 }} />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ marginTop: '2rem' }}
              >
                <a 
                  href="/#events-leasing"
                  className="btn-primary"
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: 'none' }}
                >
                  Contact Sales
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for hiding desktop nav on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
