import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleExplore = () => {
    const target = document.getElementById('the-property');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--color-base)'
      }}
    >
      {/* Cinematic Video Background */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          y,
          scale
        }}
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
            filter: 'brightness(0.6) saturate(1.1)'
          }}
        >
          <source src="https://cdn.coverr.co/videos/coverr-time-lapse-of-new-york-city-1585/1080p.mp4" type="video/mp4" />
        </video>
        
        {/* Dynamic gradient overlays */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(201, 169, 98, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(201, 169, 98, 0.05) 0%, transparent 50%),
            linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,1) 100%)
          `,
          zIndex: 1
        }} />
      </motion.div>

      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0.5 : 0 }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '300px',
          height: '300px',
          border: '1px solid rgba(201, 169, 98, 0.2)',
          borderRadius: '50%',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0.3 : 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '200px',
          height: '200px',
          border: '1px solid rgba(201, 169, 98, 0.15)',
          borderRadius: '50%',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* Main Content */}
      <motion.div 
        style={{ 
          position: 'relative', 
          zIndex: 10,
          textAlign: 'center',
          opacity,
          padding: '0 2rem'
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}
        >
          <div style={{
            width: '40px',
            height: '1px',
            background: 'var(--gradient-gold)'
          }} />
          <span className="text-label">The World's Premier Destination</span>
          <div style={{
            width: '40px',
            height: '1px',
            background: 'var(--gradient-gold)'
          }} />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            fontSize: 'clamp(3rem, 10vw, 7rem)', 
            marginBottom: '1.5rem',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1
          }}
        >
          <span style={{ display: 'block' }}>MALL OF</span>
          <span style={{ 
            display: 'block',
            background: 'var(--gradient-gold)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>AMERICA</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.4rem)',
            color: 'var(--color-text-secondary)',
            maxWidth: '700px',
            margin: '0 auto 1rem auto',
            fontWeight: 300,
            lineHeight: 1.6
          }}
        >
          Where retail meets revolution. 40 million visitors. Unlimited opportunity.
        </motion.p>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
        >
          {[
            { value: '40M+', label: 'Annual Visitors' },
            { value: '520+', label: 'Retail Partners' },
            { value: '5.6M', label: 'Square Feet' }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: 600,
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-text-accent)'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--color-text-muted)'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <motion.button 
            id="hero-explore-btn"
            className="btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleExplore}
          >
            Explore Opportunities
            <ArrowRight size={18} />
          </motion.button>
          
          <Link to="/events" style={{ display: 'inline-flex' }}>
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={16} style={{ marginRight: '0.5rem' }} />
              View Events
            </motion.button>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            marginTop: '4rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}
        >
          {['Retail Leasing', 'Sponsorships', 'Event Booking'].map((item, i) => (
            <Link 
              key={i}
              to={i === 0 ? '/leasing' : i === 1 ? '/sponsorship' : '/events'}
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                transition: 'color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-text-accent)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          bottom: '2rem', 
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem'
        }}
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        onClick={handleExplore}
      >
        <span style={{
          fontSize: '0.65rem',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: 'var(--color-text-muted)'
        }}>
          Scroll
        </span>
        <ChevronDown size={24} color="var(--color-text-accent)" />
      </motion.div>

      {/* Bottom gradient fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '200px',
        background: 'linear-gradient(to top, var(--color-base) 0%, transparent 100%)',
        zIndex: 5,
        pointerEvents: 'none'
      }} />
    </section>
  );
};

export default HeroSection;
