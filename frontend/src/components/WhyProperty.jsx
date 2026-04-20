import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Users, Building, TrendingUp, Plane, DollarSign } from 'lucide-react';

// Animated counter hook
const useAnimatedCounter = (endValue, duration = 2000, inView = false) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    if (!inView) return;
    
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * endValue));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [endValue, duration, inView]);

  return count;
};

const stats = [
  { 
    icon: <Users size={28} />, 
    value: 40, 
    suffix: 'M+', 
    label: 'Annual Visitors', 
    desc: 'More than the entire population of Canada visits annually.',
    color: '#c9a962'
  },
  { 
    icon: <MapPin size={28} />, 
    value: 15, 
    suffix: ' min', 
    label: 'From MSP Airport', 
    desc: 'Seamless global access via Minneapolis-St. Paul International.',
    color: '#c9a962'
  },
  { 
    icon: <Building size={28} />, 
    value: 5.6, 
    suffix: 'M', 
    label: 'Square Feet', 
    desc: 'Space for unparalleled experiences across four levels.',
    color: '#c9a962',
    decimals: 1
  },
  { 
    icon: <TrendingUp size={28} />, 
    value: 2, 
    suffix: 'B+', 
    label: 'Economic Impact', 
    desc: 'Driving regional commerce and employment.',
    prefix: '$',
    color: '#c9a962'
  }
];

const StatCard = ({ stat, index, inView }) => {
  const count = useAnimatedCounter(
    stat.decimals ? Math.floor(stat.value) : stat.value, 
    2000, 
    inView
  );
  
  const decimal = stat.decimals ? stat.value % 1 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card"
      style={{
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Background glow effect */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: `radial-gradient(circle at center, ${stat.color}08 0%, transparent 50%)`,
        pointerEvents: 'none'
      }} />
      
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200 }}
        style={{ 
          color: stat.color, 
          marginBottom: '1.5rem',
          display: 'inline-flex',
          padding: '1rem',
          background: `${stat.color}15`,
          borderRadius: '50%',
          border: `1px solid ${stat.color}30`
        }}
      >
        {stat.icon}
      </motion.div>
      
      {/* Value */}
      <div style={{ marginBottom: '0.75rem' }}>
        <h3 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
          marginBottom: '0.25rem',
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          background: 'var(--gradient-gold)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          {stat.prefix || ''}{count}{decimal > 0 ? `.${Math.floor(decimal * 10)}` : ''}{stat.suffix}
        </h3>
      </div>
      
      {/* Label */}
      <p style={{ 
        fontSize: '1.1rem', 
        fontWeight: 600, 
        color: '#fff', 
        marginBottom: '0.75rem',
        letterSpacing: '0.5px'
      }}>
        {stat.label}
      </p>
      
      {/* Description */}
      <p style={{ 
        color: 'var(--color-text-secondary)', 
        fontSize: '0.9rem',
        lineHeight: 1.6
      }}>
        {stat.desc}
      </p>
    </motion.div>
  );
};

const WhyProperty = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="the-property" 
      ref={sectionRef}
      className="section" 
      style={{ 
        background: 'linear-gradient(180deg, var(--color-base) 0%, var(--color-surface) 50%, var(--color-base) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(201, 169, 98, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(201, 169, 98, 0.03) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-label"
            style={{ display: 'block', marginBottom: '1rem' }}
          >
            The Destination Advantage
          </motion.span>
          
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            marginBottom: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto 1.5rem'
          }}>
            The Power of Scale
          </h2>
          
          <p style={{ 
            color: 'var(--color-text-secondary)', 
            fontSize: '1.15rem', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            It's not just foot traffic. It's a captive audience with high intent. 
            Mall of America attracts tourists, locals, and international travelers at a volume 
            unmatched by traditional retail destinations.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} inView={isInView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            textAlign: 'center',
            marginTop: '5rem',
            paddingTop: '3rem',
            borderTop: '1px solid var(--color-border)'
          }}
        >
          <p style={{
            color: 'var(--color-text-muted)',
            fontSize: '0.9rem',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Ready to join 520+ world-class brands?
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#events-leasing" className="btn-primary" style={{ textDecoration: 'none' }}>
              Explore Leasing
            </a>
            <a href="/sponsorship" className="btn-secondary" style={{ textDecoration: 'none' }}>
              View Sponsorship
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyProperty;
