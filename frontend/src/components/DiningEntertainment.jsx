import React from 'react';
import { motion } from 'framer-motion';

const attractions = [
  {
    title: 'Culinary Excellence',
    desc: 'Over 50 dining concepts ranging from elevated fine-dining to experiential casual eateries.',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Fine Dining'
  },
  {
    title: 'Nickelodeon Universe',
    desc: "The nation's largest indoor theme park with 27 rides and attractions. A massive draw for millions of families annually.",
    img: '/indoor_theme_park.png',
    alt: 'Indoor Theme Park'
  },
  {
    title: 'SEA LIFE Aquarium',
    desc: 'A 1.2 million-gallon walk-through aquarium with ocean tunnel, touch pools, and over 10,000 sea creatures — driving family foot traffic year-round.',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'SEA LIFE Aquarium'
  },
  {
    title: 'FlyOver America',
    desc: 'An immersive flight-ride experience using cutting-edge aerial film technology — one of only two locations in North America.',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'FlyOver America'
  }
];

const DiningEntertainment = () => {
  return (
    <section id="entertainment" className="section" style={{ backgroundColor: '#000', position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p style={{ color: 'var(--color-text-accent)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '1rem', fontWeight: 600 }}>Destination</p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', maxWidth: '900px', margin: '0 auto', marginBottom: '1.5rem' }}>
            Where Dining Meets Entertainment
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            The attractions that separate a mega-destination from a mall. Each one drives millions 
            of annual visits that no standalone retailer could generate on its own.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {attractions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-panel"
              style={{ padding: 0, overflow: 'hidden', position: 'relative', height: '420px' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }} />
              <img 
                src={item.img} 
                alt={item.alt} 
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', zIndex: 2 }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiningEntertainment;
