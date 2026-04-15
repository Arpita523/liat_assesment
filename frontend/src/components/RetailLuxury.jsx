import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RetailLuxury = () => {
  return (
    <section id="luxury-&-retail" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          
          {/* Luxury Avenue */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>The Avenue</h2>
              <p style={{ color: 'var(--color-text-accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', fontWeight: 600 }}>Elevated Retail</p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
                A curated district dedicated to luxury and premium contemporary brands. 
                With exclusive boutiques, tailored concierges, and high-net-worth customer demographics, 
                The Avenue provides the perfect backdrop for luxury flagships.
              </p>
              <Link id="retail-leasing-btn" to="/leasing" className="luxury-button" style={{ display: 'inline-flex', textDecoration: 'none' }}>View Leasing Opportunities</Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative', height: '500px', borderRadius: 'var(--border-radius)', overflow: 'hidden' }}
            >
              <img 
                src="/luxury_avenue.png" 
                alt="Luxury Retail Storefront"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </div>

          {/* Mass Market & Pop up */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative', height: '400px', borderRadius: 'var(--border-radius)', overflow: 'hidden', order: -1 }}
            >
              {/* Note: Due to limitations on standard ordering in CSS flex, we use standard mapping. Order property handles grid layout flip */}
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Bustling Retail Environment"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Incubate & Scale</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
                From dynamic pop-up spaces testing new concepts to massive flagship environments, 
                we provide the foot traffic brands need to scale rapidly. Our spaces are built for 
                experiential retail that translates to organic marketing.
              </p>
              <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--color-text-accent)' }}>✦</span> 520+ Stores</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--color-text-accent)' }}>✦</span> Flexible Pop-Up Leasing</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--color-text-accent)' }}>✦</span> Unmatched Co-Tenancy</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RetailLuxury;
