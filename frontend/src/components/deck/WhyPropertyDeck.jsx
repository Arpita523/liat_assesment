import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Users, TrendingUp, CreditCard, X, Info } from 'lucide-react';

const WhyPropertyDeck = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const stats = [
    {
      id: 'visitors',
      icon: Users,
      title: "Massive Audience",
      value: "40M+",
      source: "Annual Visitors",
      description: "A global destination attracting more annual visitors than Disney World and the Grand Canyon combined.",
      deepDive: {
        headline: "Unmatched Reach",
        stats: [
          { label: "Tourist Mix", value: "40%" },
          { label: "Avg Stay", value: "3.5 Hours" },
          { label: "Visits/Yr", value: "3.1" }
        ],
        text: "Mall of America serves as the primary retail hub for the Twin Cities and a bucket-list destination for international travelers."
      }
    },
    {
      id: 'income',
      icon: TrendingUp,
      title: "Affluent Market",
      value: "Top 10%",
      source: "Household Income",
      description: "Primary destination for high-HHI shoppers ($100k-$250k+) in the Minneapolis/St. Paul metro.",
      deepDive: {
        headline: "Purchasing Power",
        stats: [
          { label: "Avg HHI", value: "$112k" },
          { label: "Spend/Visit", value: "$162" },
          { label: "Luxury Gr.", value: "+18%" }
        ],
        text: "The convergence of local affluence and tax-free shopping creates a high-velocity retail environment."
      }
    },
    {
      id: 'reach',
      icon: MapPin,
      title: "Regional Reach",
      value: "500 Mi",
      source: "Primary Market",
      description: "Dominant retail hub for the Upper Midwest, drawing from a vast multi-state drive market.",
      deepDive: {
        headline: "Drive & Fly Mix",
        stats: [
          { label: "Fly-in", value: "30%" },
          { label: "Drive < 2h", value: "55%" },
          { label: "Intl.", value: "15%" }
        ],
        text: "Positioned next to MSP International Airport, we capture the traveling spender before they even reach downtown."
      }
    },
    {
      id: 'tax',
      icon: CreditCard,
      title: "Tax Advantage",
      value: "0%",
      source: "Sales Tax",
      description: "Minnesota features $0 sales tax on clothing and shoes—a powerful motivator for high-volume retail.",
      deepDive: {
        headline: "The Conversion Gap",
        stats: [
          { label: "Tax Savings", value: "7-10%" },
          { label: "Basket Size", value: "+22%" },
          { label: "Apparel Mix", value: "45%" }
        ],
        text: "Our zero-tax policy on apparel is the single biggest driver for bulk-purchasing and regional tourism."
      }
    }
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'var(--color-base)',
      padding: '6rem 4rem 4rem 4rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      overflowY: 'auto',
      position: 'relative'
    }}>
      <div className="container-wide" style={{ width: '100%', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>Strategy & Reach</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', maxWidth: '1000px', lineHeight: 1.1 }}>
            The Global Epicenter of <span className="text-gold">Commerce & Culture.</span>
          </h2>
        </motion.div>

        <div className="grid-2" style={{ gap: '1.5rem' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-glass"
              style={{
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={() => setActiveHotspot(stat)}
              whileHover={{ scale: 1.02, borderColor: 'rgba(201, 169, 98, 0.3)' }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '10px',
                background: 'rgba(201, 169, 98, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <stat.icon size={24} color="var(--color-gold-mid)" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.25rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 600, color: '#fff' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-gold-mid)', fontWeight: 600 }}>{stat.source}</div>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#fff' }}>{stat.title}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem', lineHeight: 1.5 }}>{stat.description}</p>
                
                <div style={{ 
                  marginTop: '1.5rem', 
                  fontSize: '0.65rem', 
                  color: 'var(--color-gold-mid)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  <Info size={12} />
                  Click to Expand Insights
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deep Dive Overlay (Slide Specific) */}
      <AnimatePresence>
        {activeHotspot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(5, 5, 5, 0.4)',
              backdropFilter: 'blur(10px)',
              zIndex: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => setActiveHotspot(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                width: '90%',
                height: '80%',
                background: 'rgba(10, 10, 10, 0.98)',
                backdropFilter: 'blur(40px)',
                padding: '5rem',
                borderRadius: '32px',
                border: '1px solid rgba(201, 169, 98, 0.2)',
                display: 'grid',
                gridTemplateColumns: '1fr 1.5fr',
                gap: '6rem',
                position: 'relative',
                boxShadow: '0 0 100px rgba(0, 0, 0, 0.5)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Extremely prominent close button */}
              <button 
                onClick={() => setActiveHotspot(null)}
                style={{ 
                  position: 'absolute', 
                  top: '2.5rem', 
                  right: '2.5rem', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  color: '#fff', 
                  cursor: 'pointer',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 600,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(201, 169, 98, 0.2)';
                  e.currentTarget.style.borderColor = 'var(--color-gold-mid)';
                  e.currentTarget.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'rotate(0deg)';
                }}
              >
                <X size={32} />
              </button>

              <div>
                <span className="text-label" style={{ marginBottom: '1.5rem', display: 'block' }}>Deep Dive Analysis</span>
                <h3 style={{ fontSize: '3rem', color: '#fff', marginBottom: '2rem' }}>{activeHotspot.deepDive.headline}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.2rem', lineHeight: 1.6 }}>{activeHotspot.deepDive.text}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                {activeHotspot.deepDive.stats.map((s, idx) => (
                  <div key={idx} style={{ 
                    padding: '2.5rem', 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px'
                  }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-gold-mid)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem', fontWeight: 600 }}>{s.label}</div>
                    <div style={{ fontSize: '3.5rem', color: '#fff', fontWeight: 700 }}>{s.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '50%',
          height: '80%',
          backgroundImage: 'radial-gradient(circle, var(--color-gold-mid) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          zIndex: -1,
          maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
        }}
      />
    </div>
  );
};

export default WhyPropertyDeck;
