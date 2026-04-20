import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Zap } from 'lucide-react';

const RetailLuxuryDeck = () => {
  const brands = [
    { name: "Apple", type: "Flagship", img: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Louis Vuitton", type: "Luxury", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Gucci", type: "Luxury", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Hermès", type: "Ultra-Luxury", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'var(--color-surface)',
      padding: '6rem 4rem 4rem 4rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      position: 'relative',
      overflowY: 'auto'
    }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'flex-start' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>Retail Excellence</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              The Ultimate Stage for <span className="text-gold">Global Brands.</span>
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              From luxury flagships to high-impact pop-ups, Mall of America provides the visibility and foot traffic that no other property in North America can match.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(201, 169, 98, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Diamond size={20} color="var(--color-gold-mid)" />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem' }}>Premium Ecosystem</h4>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.4)' }}>Dedicated high-end environments with bespoke services.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(201, 169, 98, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Zap size={20} color="var(--color-gold-mid)" />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem' }}>Proven Success</h4>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.4)' }}>Over 100 brands chose MoA for their regional debut.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {brands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                style={{
                  position: 'relative',
                  height: '280px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={brand.img} 
                  alt={brand.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2rem',
                  background: 'linear-gradient(to top, rgba(5,5,5,1) 0%, transparent 100%)'
                }}>
                  <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-gold-mid)', marginBottom: '0.5rem' }}>{brand.type}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff' }}>{brand.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default RetailLuxuryDeck;
