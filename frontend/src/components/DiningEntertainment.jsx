import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Utensils, FerrisWheel, Anchor, Plane, Play, ArrowRight } from 'lucide-react';

const attractions = [
  {
    title: 'Nickelodeon Universe',
    subtitle: 'Indoor Theme Park',
    desc: "The nation's largest indoor theme park with 27 rides and attractions. A massive draw for millions of families annually.",
    img: '/indoor_theme_park.png',
    alt: 'Indoor Theme Park',
    icon: <FerrisWheel size={24} />,
    stats: '27 Rides & Attractions'
  },
  {
    title: 'SEA LIFE Aquarium',
    subtitle: 'Marine Experience',
    desc: 'A 1.2 million-gallon walk-through aquarium with ocean tunnel, touch pools, and over 10,000 sea creatures — driving family foot traffic year-round.',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'SEA LIFE Aquarium',
    icon: <Anchor size={24} />,
    stats: '1.2M Gallons'
  },
  {
    title: 'FlyOver America',
    subtitle: 'Immersive Flight Experience',
    desc: 'An immersive flight-ride experience using cutting-edge aerial film technology — one of only two locations in North America.',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'FlyOver America',
    icon: <Plane size={24} />,
    stats: 'North America Exclusive'
  },
  {
    title: 'Culinary Excellence',
    subtitle: 'Dining Destinations',
    desc: 'Over 50 dining concepts ranging from elevated fine-dining to experiential casual eateries, creating a complete lifestyle destination.',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Fine Dining',
    icon: <Utensils size={24} />,
    stats: '50+ Restaurants'
  }
];

const AttractionCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        position: 'relative',
        height: '480px',
        borderRadius: 'var(--border-radius)',
        overflow: 'hidden',
        cursor: 'pointer',
        group: true
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Image */}
      <img 
        src={item.img} 
        alt={item.alt} 
        loading="lazy"
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          transition: 'transform 0.8s ease'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      />
      
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.5) 40%, rgba(10,10,10,0.2) 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
      
      {/* Gold accent gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(201,169,98,0.1) 0%, transparent 50%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
      
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200 }}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          zIndex: 2,
          background: 'rgba(201, 169, 98, 0.9)',
          color: 'var(--color-base)',
          padding: '0.75rem',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {item.icon}
      </motion.div>
      
      {/* Content */}
      <div style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        padding: '2rem',
        zIndex: 2
      }}>
        {/* Badge */}
        <span style={{
          display: 'inline-block',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          padding: '0.35rem 0.75rem',
          borderRadius: 'var(--border-radius-full)',
          fontSize: '0.7rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: 'var(--color-text-accent)',
          marginBottom: '0.75rem'
        }}>
          {item.stats}
        </span>
        
        <h3 style={{ 
          fontSize: '1.8rem', 
          marginBottom: '0.5rem',
          lineHeight: 1.2
        }}>
          {item.title}
        </h3>
        
        <p style={{ 
          fontSize: '0.85rem', 
          color: 'var(--color-text-accent)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '0.75rem',
          fontWeight: 500
        }}>
          {item.subtitle}
        </p>
        
        <p style={{ 
          color: 'var(--color-text-secondary)', 
          fontSize: '0.95rem', 
          lineHeight: 1.5,
          opacity: 0,
          maxHeight: 0,
          overflow: 'hidden',
          transition: 'all 0.4s ease',
          marginBottom: 0
        }}
        className="attraction-desc"
        >
          {item.desc}
        </p>
      </div>
      
      {/* Hover effect for description */}
      <style>{`
        .attraction-card:hover .attraction-desc {
          opacity: 1 !important;
          max-height: 100px !important;
          margin-bottom: 1rem !important;
        }
      `}</style>
    </motion.div>
  );
};

const DiningEntertainment = () => {
  return (
    <section id="entertainment" className="section" style={{ backgroundColor: 'var(--color-base)', position: 'relative' }}>
      {/* Background video element */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, var(--color-base) 0%, var(--color-surface) 50%, var(--color-base) 100%)'
        }} />
        
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '400px',
          height: '400px',
          border: '1px solid rgba(201, 169, 98, 0.05)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '300px',
          height: '300px',
          border: '1px solid rgba(201, 169, 98, 0.03)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.span 
            className="text-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'block', marginBottom: '1rem' }}
          >
            Destination Experience
          </motion.span>
          
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            maxWidth: '900px', 
            margin: '0 auto 1.5rem',
            lineHeight: 1.1
          }}>
            Where Dining Meets Entertainment
          </h2>
          
          <p style={{ 
            color: 'var(--color-text-secondary)', 
            fontSize: '1.15rem', 
            maxWidth: '700px', 
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            The attractions that separate a mega-destination from a mall. Each one drives millions 
            of annual visits that no standalone retailer could generate on its own.
          </p>
        </motion.div>

        {/* Attractions Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {attractions.map((item, i) => (
            <AttractionCard key={i} item={item} index={i} />
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
            padding: '3rem',
            background: 'var(--color-surface)',
            borderRadius: 'var(--border-radius)',
            border: '1px solid var(--color-border)'
          }}
        >
          <h3 style={{ 
            fontSize: '1.8rem', 
            marginBottom: '1rem',
            fontFamily: 'var(--font-serif)'
          }}>
            Ready to create unforgettable experiences?
          </h3>
          
          <p style={{ 
            color: 'var(--color-text-secondary)',
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            Partner with Mall of America to create brand activations, product launches, 
            and exclusive experiences that captivate millions.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/events" className="btn-primary" style={{ textDecoration: 'none' }}>
              <Play size={16} style={{ marginRight: '0.5rem' }} />
              Explore Events
            </Link>
            <Link to="/sponsorship" className="btn-secondary" style={{ textDecoration: 'none' }}>
              View Sponsorship
              <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiningEntertainment;
