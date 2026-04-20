import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Rocket, Handshake, Target, Globe, PieChart } from 'lucide-react';

const SponsorshipModule = ({ onClose }) => {
  const tiers = [
    {
      name: "Strategic Partner",
      icon: Handshake,
      description: "Highest level of integration including property naming rights, category exclusivity, and year-round multi-platform presence.",
      benefits: ["Naming Rights", "Category Exclusivity", "Premium Digital Network", "VIP Hospitality"]
    },
    {
      name: "Activation Partner",
      icon: Rocket,
      description: "Focused on high-impact seasonal or campaign-based physical activations and experiential pop-ups.",
      benefits: ["Short-term Lease Options", "Brand Ambassadors", "Social Media Integration", "Custom Build-outs"]
    }
  ];

  const digitalStats = [
    { label: "Daily Impressions", value: "1.2M" },
    { label: "Digital Displays", value: "200+" },
    { label: "App User Base", value: "1.5M" },
    { label: "Social Reach", value: "500k+" }
  ];

  return (
    <div style={{ background: 'var(--color-base)', padding: '6rem 4rem' }}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem', textAlign: 'center' }}
        >
          <span className="text-label" style={{ marginBottom: '1.5rem', display: 'block' }}>Partnership Opportunities</span>
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>The Ultimate <span className="text-gold">Brand Platform.</span></h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            Connect with 40 million shoppers through immersive physical experiences and North America's most sophisticated retail digital network.
          </p>
        </motion.div>

        {/* Digital Network Section */}
        <div style={{
          background: 'var(--color-surface)',
          padding: '4rem',
          borderRadius: '12px',
          border: '1px solid var(--color-border-strong)',
          marginBottom: '4rem'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <BarChart3 color="var(--color-gold-mid)" size={32} />
                <h3 style={{ fontSize: '2rem', color: '#fff' }}>Digital Dominance</h3>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: '2rem', lineHeight: 1.6 }}>
                Our digital network spans every major entry and high-traffic corridor, providing unparalleled frequency and reach for your creative assets.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {digitalStats.map((stat, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-gold-mid)' }}>{stat.value}</div>
                    <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '2px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              height: '300px',
              background: 'linear-gradient(45deg, var(--color-surface-hover), var(--color-surface-elevated))',
              borderRadius: '8px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
               {/* Simplified Data Viz representation */}
               <motion.div 
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ repeat: Infinity, duration: 4 }}
                 style={{ width: '150px', height: '150px', borderRadius: '50%', border: '2px solid var(--color-gold-mid)', opacity: 0.2 }}
               />
               <div style={{ position: 'absolute', color: 'rgba(255, 255, 255, 0.1)', fontSize: '0.8rem', fontWeight: 600 }}>AUDIENCE ANALYTICS</div>
            </div>
          </div>
        </div>

        {/* Partnership Tiers */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="card-glass"
              style={{ padding: '3rem' }}
            >
              <tier.icon size={40} color="var(--color-gold-mid)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>{tier.name}</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.6 }}>{tier.description}</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {tier.benefits.map((benefit, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-gold-mid)' }} />
                    {benefit}
                  </li>
                ))}
              </ul>
              <button 
                className="btn-secondary" 
                style={{ width: '100%', marginTop: '2.5rem', padding: '0.8rem' }}
              >
                Download Partnership Guide
              </button>
            </motion.div>
          ))}
        </div>

        {/* Global Reach Callout */}
        <div style={{ textAlign: 'center', marginTop: '6rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Ready to Scale?</h2>
          <button className="btn-primary" style={{ padding: '1.25rem 4rem' }}>
            Request Audience Data Kit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipModule;
