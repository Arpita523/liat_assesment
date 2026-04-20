import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Layout, Briefcase, ChevronRight, Map } from 'lucide-react';

const LeasingModule = ({ onClose }) => {
  const paths = [
    {
      title: "Luxury & Heritage",
      icon: Star,
      pitch: "Join 'The Collections'—a curated high-end wing designed for the world's most prestigious fashion and beauty houses.",
      features: ["Premium Fit-outs", "High-HHI Traffic", "Enhanced Security", "White-glove Service"],
      cta: "Explore The Collections"
    },
    {
      title: "Flagship Retail",
      icon: ShoppingBag,
      pitch: "Create a landmark presence. Multi-level, high-visibility sites designed for global brands to showcase their full identity.",
      features: ["2-3 Level Options", "Maximum Frontage", "Integrated Signage", "High Volume Logistics"],
      cta: "View Flagship sites"
    },
    {
      title: "Innovation & Pop-up",
      icon: Layout,
      pitch: "Test the market or launch a new concept. Flexible, short-term lease paths in high-velocity corridors.",
      features: ["Turn-key Units", "Modular Layouts", "Rapid Setup", "Peak Season Slots"],
      cta: "Inquire for Pop-up"
    }
  ];

  return (
    <div style={{ background: 'var(--color-base)', padding: '6rem 4rem' }}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '6rem', maxWidth: '800px' }}
        >
          <span className="text-label" style={{ marginBottom: '1.5rem', display: 'block' }}>Leasing & Development</span>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '2rem', lineHeight: 1 }}>Your Next <span className="text-gold">Grand Debut.</span></h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.4rem', lineHeight: 1.6 }}>
            With over 100 first-to-market brands, Mall of America is the proven entry point for the region. Choose your path to excellence.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
          {paths.map((path, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border-strong)',
                padding: '3.5rem'
              }}
            >
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: 'var(--gradient-gold)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '2rem'
                }}>
                  <path.icon size={24} color="#000" />
                </div>
                <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>{path.title}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: '2rem', lineHeight: 1.7, height: '80px' }}>{path.pitch}</p>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '2px', marginBottom: '1rem' }}>Key Advantages</div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {path.features.map((feature, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-gold-mid)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className="btn-secondary" 
                style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                {path.cta}
                <ChevronRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Site Plan Preview CTA */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="card-glass"
           style={{  marginTop: '4rem', padding: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Interactive Floorplans</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', maxWidth: '500px' }}>
              View our current availability and interactive site plans for our Level 1 Luxury Wing and prime South Entrance sites.
            </p>
          </div>
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Map size={20} />
            Launch Site Plan Viewer
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LeasingModule;
