import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Store, Zap } from 'lucide-react';

const RetailLuxury = () => {
  return (
    <section id="luxury-retail" className="section" style={{ background: 'var(--color-base)' }}>
      
      {/* Luxury Avenue Section */}
      <div className="container" style={{ marginBottom: 'var(--spacing-3xl)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="text-label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'block', marginBottom: '1rem' }}
            >
              <Sparkles size={14} style={{ marginRight: '0.5rem', display: 'inline' }} />
              Elevated Retail
            </motion.span>
            
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              marginBottom: '1.5rem',
              lineHeight: 1.1
            }}>
              The Avenue
            </h2>
            
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--color-text-secondary)', 
              marginBottom: '2rem', 
              lineHeight: 1.8 
            }}>
              A curated district dedicated to luxury and premium contemporary brands. 
              With exclusive boutiques, tailored concierges, and high-net-worth customer demographics, 
              The Avenue provides the perfect backdrop for luxury flagships.
            </p>
            
            <ul style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Oversized glass facades with premium storefronts',
                'Dedicated VIP curbside drop-offs',
                'Marble concourses and luxury amenities',
                'High-net-worth demographic access'
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  <span style={{ 
                    color: 'var(--color-text-accent)',
                    fontSize: '0.8rem'
                  }}>◆</span>
                  {item}
                </motion.li>
              ))}
            </ul>
            
            <Link 
              id="retail-leasing-btn" 
              to="/leasing" 
              className="btn-primary" 
              style={{ display: 'inline-flex', textDecoration: 'none', gap: '0.75rem' }}
            >
              View Leasing Opportunities
              <ArrowRight size={18} />
            </Link>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              position: 'relative', 
              height: '550px', 
              borderRadius: 'var(--border-radius)', 
              overflow: 'hidden' 
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(201,169,98,0.1) 0%, transparent 50%)',
              zIndex: 1,
              pointerEvents: 'none'
            }} />
            <img 
              src="/luxury_avenue.png" 
              alt="Luxury Retail Storefront"
              loading="lazy"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                transition: 'transform 0.6s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                background: 'rgba(10, 10, 10, 0.9)',
                backdropFilter: 'blur(10px)',
                padding: '1rem 1.5rem',
                borderRadius: 'var(--border-radius-sm)',
                border: '1px solid var(--color-border)'
              }}
            >
              <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.25rem' }}>
                Average Tenant
              </p>
              <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-text-accent)' }}>
                $2.5M+ Annual Sales
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Incubate & Scale Section */}
      <div style={{
        background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-base) 100%)',
        padding: 'var(--spacing-3xl) 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ 
                position: 'relative', 
                height: '450px', 
                borderRadius: 'var(--border-radius)', 
                overflow: 'hidden',
                order: { base: -1, md: 0 }
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Bustling Retail Environment"
                loading="lazy"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }}
              />
              
              {/* Stats overlay */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(201, 169, 98, 0.95)',
                color: 'var(--color-base)',
                padding: '1rem 1.5rem',
                borderRadius: 'var(--border-radius-sm)',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-sans)' }}>520+</p>
                <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Stores</p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="text-label"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ display: 'block', marginBottom: '1rem' }}
              >
                <Zap size={14} style={{ marginRight: '0.5rem', display: 'inline' }} />
                Growth Platform
              </motion.span>
              
              <h2 style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                marginBottom: '1.5rem',
                lineHeight: 1.1
              }}>
                Incubate & Scale
              </h2>
              
              <p style={{ 
                fontSize: '1.1rem', 
                color: 'var(--color-text-secondary)', 
                marginBottom: '2rem', 
                lineHeight: 1.8 
              }}>
                From dynamic pop-up spaces testing new concepts to massive flagship environments, 
                we provide the foot traffic brands need to scale rapidly. Our spaces are built for 
                experiential retail that translates to organic marketing.
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                marginBottom: '2.5rem'
              }}>
                {[
                  { icon: <Store size={20} />, value: '520+', label: 'Stores' },
                  { icon: <Zap size={20} />, value: '30', label: 'Day Launch' },
                  { icon: <Sparkles size={20} />, value: '12M', label: 'Yearly Reach' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    style={{
                      background: 'var(--color-surface)',
                      padding: '1.5rem',
                      borderRadius: 'var(--border-radius-sm)',
                      border: '1px solid var(--color-border)',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ 
                      color: 'var(--color-text-accent)', 
                      marginBottom: '0.5rem',
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      {item.icon}
                    </div>
                    <p style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 700,
                      fontFamily: 'var(--font-sans)',
                      color: '#fff'
                    }}>
                      {item.value}
                    </p>
                    <p style={{ 
                      fontSize: '0.75rem', 
                      color: 'var(--color-text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <Link 
                to="/leasing" 
                className="btn-secondary" 
                style={{ display: 'inline-flex', textDecoration: 'none', gap: '0.75rem' }}
              >
                Explore Pop-Up Rates
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailLuxury;
