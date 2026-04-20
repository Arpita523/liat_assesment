import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Target, 
  ShoppingBag, 
  Utensils, 
  Calendar, 
  Mail,
  FileText,
  BarChart3,
  Users,
  LayoutGrid
} from 'lucide-react';

const SidebarNav = ({ currentSlide, totalSlides, onNavigate, onOpenModule, onOpenOverview }) => {
  const navItems = [
    { label: 'Overview', icon: Home, slide: 0 },
    { label: 'Strategy', icon: Target, slide: 1 },
    { label: 'Retail', icon: ShoppingBag, slide: 2 },
    { label: 'Lifestyle', icon: Utensils, slide: 3 },
    { label: 'Events', icon: Calendar, slide: 4 },
    { label: 'Contact', icon: Mail, slide: 5 },
  ];

  const moduleItems = [
    { label: 'Leasing', icon: FileText, id: 'leasing' },
    { label: 'Sponsorship', icon: BarChart3, id: 'sponsorship' },
    { label: 'Specs', icon: Users, id: 'events' },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: '80px',
        background: 'rgba(5, 5, 5, 0.9)',
        backdropFilter: 'blur(40px)',
        borderRight: '1px solid rgba(255, 255, 255, 0.05)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5rem 0',
        gap: '2rem',
        overflowY: 'auto',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}
    >
      {/* Brand Logo / Home */}
      <div 
        onClick={() => onNavigate(0)}
        style={{ cursor: 'pointer', marginBottom: '1rem' }}
      >
        <div style={{
          width: '50px',
          height: '50px',
          border: '1px solid var(--color-gold-mid)',
          color: 'var(--color-gold-mid)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 700,
          fontFamily: 'var(--font-serif)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--color-gold-mid)';
          e.currentTarget.style.color = '#000';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'var(--color-gold-mid)';
        }}
        >M</div>
      </div>

      {/* Main Slides */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {navItems.map((item) => (
          <div 
            key={item.slide}
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
            onMouseEnter={(e) => {
              const label = e.currentTarget.querySelector('.nav-label');
              if (label) label.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              const label = e.currentTarget.querySelector('.nav-label');
              if (label) label.style.opacity = '0';
            }}
          >
            <button
              onClick={() => onNavigate(item.slide)}
              style={{
                background: item.slide === currentSlide ? 'rgba(201, 169, 98, 0.1)' : 'transparent',
                border: 'none',
                color: currentSlide === item.slide ? 'var(--color-gold-mid)' : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: '0.75rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <item.icon size={24} strokeWidth={currentSlide === item.slide ? 2 : 1.5} />
              {currentSlide === item.slide && (
                <motion.div 
                  layoutId="active-indicator"
                  style={{
                    position: 'absolute',
                    right: '-12px',
                    width: '4px',
                    height: '24px',
                    background: 'var(--color-gold-mid)',
                    borderRadius: '2px',
                    boxShadow: '0 0 10px var(--color-gold-mid)'
                  }}
                />
              )}
            </button>
            <span className="nav-label" style={{
              position: 'absolute',
              left: '70px',
              background: 'var(--color-gold-mid)',
              color: 'var(--color-base)',
              padding: '0.4rem 1rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              whiteSpace: 'nowrap',
              opacity: 0,
              pointerEvents: 'none',
              transition: 'opacity 0.3s ease'
            }}>
              {item.label}
            </span>
          </div>
        ))}

        {/* Overview Grid Button */}
        <div 
          style={{ position: 'relative', display: 'flex', alignItems: 'center', marginTop: '1rem' }}
          onMouseEnter={(e) => {
            const label = e.currentTarget.querySelector('.nav-label');
            if (label) label.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            const label = e.currentTarget.querySelector('.nav-label');
            if (label) label.style.opacity = '0';
          }}
        >
          <button
            onClick={onOpenOverview}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              color: 'rgba(255, 255, 255, 0.6)',
              cursor: 'pointer',
              padding: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-gold-mid)';
              e.currentTarget.style.background = 'rgba(201, 169, 98, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <LayoutGrid size={24} />
          </button>
          <span className="nav-label" style={{
              position: 'absolute',
              left: '70px',
              background: '#fff',
              color: 'var(--color-base)',
              padding: '0.4rem 1rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              whiteSpace: 'nowrap',
              opacity: 0,
              pointerEvents: 'none',
              transition: 'opacity 0.3s ease'
            }}>
              Deck Overview
            </span>
        </div>
      </div>

      <div style={{ width: '40px', height: '1px', background: 'rgba(255, 255, 255, 0.1)', margin: '1rem 0' }} />

      {/* Module Shortcuts - Moved up to ensure visibility */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {moduleItems.map((item) => (
          <div 
            key={item.id}
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
            onMouseEnter={(e) => {
              const label = e.currentTarget.querySelector('.nav-label');
              if (label) label.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              const label = e.currentTarget.querySelector('.nav-label');
              if (label) label.style.opacity = '0';
            }}
          >
            <button
              id={`moa-module-${item.id}`}
              onClick={() => onOpenModule(item.id)}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                color: 'rgba(255, 255, 255, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: '0.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <item.icon size={20} strokeWidth={1.5} />
            </button>
            <span className="nav-label" style={{
              position: 'absolute',
              left: '70px',
              background: '#fff',
              color: 'var(--color-base)',
              padding: '0.4rem 1rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              whiteSpace: 'nowrap',
              opacity: 0,
              pointerEvents: 'none',
              transition: 'opacity 0.3s ease'
            }}>
              Open {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SidebarNav;
