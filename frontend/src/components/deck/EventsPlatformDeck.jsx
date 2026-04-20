import React from 'react';
import { motion } from 'framer-motion';
import { Mic2 } from 'lucide-react';

const EventsPlatformDeck = ({ onOpenModule }) => {
  const venues = [
    {
      name: "The Rotunda",
      subtitle: "The Global Stage",
      description: "A 4-story architectural marvel hosting over 400 events annually, from concerts to celebrity appearances.",
      specs: "5,000+ Capacity | Full A/V Integration",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Expo Hall",
      subtitle: "Infinite Flexibility",
      description: "Dedicated convention and exposition space for product launches, trade shows, and corporate summits.",
      specs: "25,000+ Sq Ft | Modular Design",
      image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'var(--color-base)',
      padding: '6rem 4rem 4rem 4rem', // Added top padding to prevent cutoff
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      overflowY: 'auto'
    }}>
      <div className="container-wide" style={{ width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>Events & Platform</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            Where Brands Become <span className="text-gold">Pop Culture.</span>
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
            Mall of America isn't just a property; it's a media platform. Activate your brand where the world is watching.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {venues.map((venue, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              style={{
                position: 'relative',
                height: '380px', // Adjusted height to fit better
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <img 
                src={venue.image} 
                alt={venue.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5) saturate(1.1)' }} 
              />
              
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.2) 60%, transparent 100%)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold-mid)' }} />
                  <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-gold-mid)', fontWeight: 600 }}>{venue.subtitle}</span>
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#fff' }}>{venue.name}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginBottom: '1rem', maxWidth: '400px', lineHeight: 1.4 }}>{venue.description}</p>
                
                <div style={{
                  padding: '0.75rem 0',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '1px' }}>{venue.specs}</span>
                  <button 
                    onClick={() => onOpenModule('events')}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#fff',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    View Specs <Mic2 size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            marginTop: '2.5rem',
            padding: '1.5rem 2.5rem',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border-strong)',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', gap: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--color-gold-mid)', fontWeight: 700, fontSize: '1.25rem' }}>400+</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Events / Year</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--color-gold-mid)', fontWeight: 700, fontSize: '1.25rem' }}>2.5M</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Event Visitors</div>
            </div>
          </div>
          
          <button 
            className="btn-primary"
            style={{ padding: '0.8rem 2rem', fontSize: '0.75rem' }}
            onClick={() => onOpenModule('events')}
          >
            Inquire for Venue Booking
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default EventsPlatformDeck;
