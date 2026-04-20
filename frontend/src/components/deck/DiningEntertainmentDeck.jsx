import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FerrisWheel, Anchor, Plane, ArrowRight, Utensils } from 'lucide-react';

const attractions = [
  {
    title: 'Nickelodeon Universe',
    subtitle: 'Indoor Theme Park',
    desc: "The nation's largest indoor theme park with 27 rides and attractions.",
    stats: '27 Rides',
    icon: <FerrisWheel size={24} />
  },
  {
    title: 'SEA LIFE Aquarium',
    subtitle: 'Marine Experience',
    desc: 'A 1.2 million-gallon walk-through aquarium with ocean tunnel.',
    stats: '1.2M Gallons',
    icon: <Anchor size={24} />
  },
  {
    title: 'FlyOver America',
    subtitle: 'Immersive Flight',
    desc: 'Cutting-edge aerial film technology — one of only two in North America.',
    stats: 'Exclusive',
    icon: <Plane size={24} />
  },
  {
    title: 'Dining Excellence',
    subtitle: 'Global Flavors',
    desc: 'Over 50 dining concepts from fine-dining to experiential casual.',
    stats: '50+ Concepts',
    icon: <Utensils size={24} />
  }
];

const DiningEntertainmentDeck = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

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
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>Lifestyle & Entertainment</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Where Dining Meets <span className="text-gold">Adventure.</span>
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.1rem', maxWidth: '800px', lineHeight: 1.6 }}>
            Massive destinations require iconic anchors. These attractions drive millions of annual visits, creating a captive, high-velocity commercial ecosystem.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem'
        }}>
          {attractions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
              className="card-glass"
              style={{
                padding: '2rem',
                border: hoveredCard === i ? '1px solid var(--color-gold-mid)' : '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '10px',
                background: 'rgba(201, 169, 98, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-gold-mid)'
              }}>
                {item.icon}
              </div>
              
              <div>
                <span style={{
                  fontSize: '0.6rem',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold-mid)',
                  letterSpacing: '2px',
                  fontWeight: 700,
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>{item.stats}</span>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.85rem', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiningEntertainmentDeck;
