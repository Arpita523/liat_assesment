import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactDeck = ({ onOpenModule }) => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'var(--color-base)',
      padding: '6rem 4rem 4rem 4rem',
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
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>Next Steps</span>
          <h2 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Join the <span className="text-gold">Future of Retail.</span>
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Ready to scale your presence at North America's premier shopping destination? Let's build something iconic together.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
          {[
            { 
              title: "Retail Leasing", 
              desc: "Secure your spot in our prime corridors.", 
              cta: "Inquire Now", 
              module: 'leasing',
              icon: MapPin 
            },
            { 
              title: "Sponsorship", 
              desc: "Digital and physical activation scale.", 
              cta: "View Platform", 
              module: 'sponsorship',
              icon: Mail 
            },
            { 
              title: "Private Events", 
              desc: "Book our iconic venues for your brands.", 
              cta: "Check Availability", 
              module: 'events',
              icon: Phone 
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card-glass"
              style={{
                padding: '3rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(201, 169, 98, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <item.icon size={28} color="var(--color-gold-mid)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.5 }}>{item.desc}</p>
              <button 
                onClick={() => onOpenModule(item.module)}
                className="btn-secondary" 
                style={{ width: '100%', fontSize: '0.75rem' }}
              >
                {item.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div style={{ 
          textAlign: 'center',
          padding: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          justifyContent: 'center',
          gap: '4rem',
          color: 'rgba(255, 255, 255, 0.3)',
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          <span>Bloomington, MN</span>
          <span>General: 952.883.8800</span>
          <span>leasing@moa.net</span>
        </div>
      </div>
    </div>
  );
};

export default ContactDeck;
