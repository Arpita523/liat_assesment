import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic2, Layout, Maximize, Clock, Users, ArrowUpRight } from 'lucide-react';

const EventsModule = ({ onClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const venues = [
    {
      name: "The Huntington Bank Rotunda",
      tags: ["Signature Venue", "High Impact"],
      specs: [
        { label: "Total Capacity", value: "5,000+" },
        { label: "Vertical Clearance", value: "4 Stories" },
        { label: "Digital Backdrop", value: "400 sq ft LED" },
        { label: "Rigging", value: "Full Load Points" }
      ],
      description: "Our most iconic space. From national concert tours to major brand launches, the Rotunda provides 360-degree visibility from all four levels of the mall.",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "The Executive Expo Hall",
      tags: ["Trade Shows", "Private Events"],
      specs: [
        { label: "Square Footage", value: "25,000" },
        { label: "Ceiling Height", value: "18 Feet" },
        { label: "Power", value: "3-Phase / 400A" },
        { label: "Loading", value: "Drive-in Bays" }
      ],
      description: "A private, modular environment ideal for trade conventions, multi-day consumer shows, and large-scale corporate summits.",
      img: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div style={{ background: 'var(--color-base)', padding: '6rem 4rem' }}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '5rem' }}
        >
          <span className="text-label" style={{ marginBottom: '1.5rem', display: 'block' }}>Production & Venues</span>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', maxWidth: '1000px', marginBottom: '2rem' }}>
            Elevate Your <span className="text-gold">Event Experience.</span>
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.4rem', maxWidth: '800px', lineHeight: 1.6 }}>
            Comprehensive production support and world-class venue specs designed for seamless, high-stakes brand activations.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {venues.map((venue, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '5rem',
                alignItems: 'center'
              }}
            >
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {venue.tags.map((tag, j) => (
                    <span key={j} style={{
                      fontSize: '0.65rem',
                      background: 'rgba(201, 169, 98, 0.1)',
                      color: 'var(--color-gold-mid)',
                      padding: '0.4rem 1rem',
                      borderRadius: '50px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: 700
                    }}>{tag}</span>
                  ))}
                </div>
                <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem' }}>{venue.name}</h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '3rem' }}>{venue.description}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                  {venue.specs.map((spec, j) => (
                    <div key={j} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '1rem' }}>
                      <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '2px', marginBottom: '0.25rem' }}>{spec.label}</div>
                      <div style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600 }}>{spec.value}</div>
                    </div>
                  ))}
                </div>

                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  Download Technical Deck <ArrowUpRight size={18} />
                </button>
              </div>

              <div style={{
                position: 'relative',
                height: '600px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <img src={venue.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  top: '2rem',
                  right: '2rem',
                  background: 'rgba(5, 5, 5, 0.8)',
                  backdropFilter: 'blur(10px)',
                  padding: '1rem',
                  borderRadius: '50%'
                }}>
                  <Maximize size={24} color="var(--color-gold-mid)" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div style={{
          marginTop: '10rem',
          textAlign: 'center',
          padding: '6rem',
          background: 'var(--color-surface)',
          borderRadius: '24px',
          border: '1px solid var(--color-border-strong)'
        }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to Book?</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.2rem' }}>
            Our events team is ready to help you plan your next iconic moment. Inquire today for availability and production quotes.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <button className="btn-primary" style={{ padding: '1.25rem 4rem' }}>Inquire for Event Space</button>
            <button className="btn-secondary" style={{ padding: '1.25rem 4rem' }}>Media Kit Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsModule;
