import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Building, Activity } from 'lucide-react';

const stats = [
  { icon: <Users size={32} />, value: '40M+', label: 'Annual Visitors', desc: 'More than the population of Canada.' },
  { icon: <MapPin size={32} />, value: '15 Min', label: 'From MSP Airport', desc: 'Seamless global access.' },
  { icon: <Building size={32} />, value: '5.6M', label: 'Square Feet', desc: 'Space for unparalleled experiences.' },
  { icon: <Activity size={32} />, value: '$2B+', label: 'Economic Impact', desc: 'Driving regional commerce.' }
];

const WhyProperty = () => {
  return (
    <section id="the-property" className="section" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Power of Scale</h2>
          <p className="text-gradient" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            It’s not just foot traffic. It’s a captive audience with high intent. 
            Mall of America attracts tourists, locals, and international travelers at a volume 
            unmatched by traditional retail.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-panel"
              style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div style={{ color: 'var(--color-text-accent)', marginBottom: '1rem' }}>
                {stat.icon}
              </div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                {stat.value}
              </h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 500, color: '#fff', marginBottom: '0.5rem' }}>
                {stat.label}
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyProperty;
