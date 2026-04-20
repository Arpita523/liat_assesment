import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Mic, Monitor, ArrowRight, Send, Check, Sparkles } from 'lucide-react';

const EventsPlatform = () => {
  const [formData, setFormData] = useState({ name: '', company: '', interest: 'leasing', message: '' });
  const [formStatus, setFormStatus] = useState({ status: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ status: 'submitting', message: 'Sending inquiry...' });
    
    try {
      const response = await fetch('http://localhost:5001/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (response.ok) {
        setFormStatus({ status: 'success', message: data.message });
        setFormData({ name: '', company: '', interest: 'leasing', message: '' });
      } else {
        setFormStatus({ status: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch {
      setFormStatus({ status: 'error', message: 'Network error. Please try again later.' });
    }
  };

  const venueFeatures = [
    {
      icon: <Calendar size={24} />,
      title: 'Huntington Bank Rotunda',
      desc: 'The iconic center stage for major concerts and media events. 4-story ceiling with full A/V integration.',
      link: '/events',
      linkText: 'Explore Venues'
    },
    {
      icon: <Mic size={24} />,
      title: 'Expo Hall',
      desc: '25,000 sq ft of flexible convention space with modular walls and drive-in loading bays.',
      link: '/events',
      linkText: 'View Floorplans'
    },
    {
      icon: <Monitor size={24} />,
      title: 'Digital Screens Network',
      desc: '300+ digital displays throughout the property with programmable content management.',
      link: '/sponsorship',
      linkText: 'View Media Kit'
    }
  ];

  return (
    <section id="events-leasing" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>
            The Global Platform
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            marginBottom: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto 1.5rem'
          }}>
            Events & Activations
          </h2>
          <p style={{ 
            color: 'var(--color-text-secondary)', 
            fontSize: '1.15rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            Mall of America is not just a building; it is a global media platform. 
            We host over 400 events annually, from celebrity appearances and concerts to massive brand activations.
          </p>
        </motion.div>

        {/* Venue Features */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {venueFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                background: 'var(--color-base)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--border-radius)',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Gold accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: 'var(--gradient-gold)'
              }} />
              
              <div style={{
                color: 'var(--color-text-accent)',
                marginBottom: '1.5rem',
                display: 'inline-flex',
                padding: '0.75rem',
                background: 'rgba(201, 169, 98, 0.1)',
                borderRadius: '50%',
                border: '1px solid rgba(201, 169, 98, 0.2)'
              }}>
                {feature.icon}
              </div>
              
              <h3 style={{ 
                fontSize: '1.4rem', 
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-serif)'
              }}>
                {feature.title}
              </h3>
              
              <p style={{ 
                color: 'var(--color-text-secondary)', 
                fontSize: '0.95rem',
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}>
                {feature.desc}
              </p>
              
              <Link 
                to={feature.link} 
                className="btn-secondary"
                style={{ 
                  display: 'inline-flex',
                  padding: '0.6rem 1.2rem',
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  gap: '0.5rem'
                }}
              >
                {feature.linkText}
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Two Column Layout: CTA + Form */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '4rem', 
          alignItems: 'flex-start' 
        }}>
          
          {/* Left Column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label" style={{ display: 'block', marginBottom: '1rem' }}>
              <Sparkles size={12} style={{ marginRight: '0.5rem', display: 'inline' }} />
              Partnership Opportunities
            </span>
            
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }}>
              Let's Create Something Extraordinary
            </h2>
            
            <p style={{ 
              color: 'var(--color-text-secondary)', 
              fontSize: '1.1rem', 
              marginBottom: '2rem', 
              lineHeight: 1.8 
            }}>
              Reach out to our commercial team to discuss leasing, sponsorships, or event bookings. 
              We partner with brands who want to create unforgettable experiences.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'var(--color-base)',
                borderRadius: 'var(--border-radius-sm)',
                border: '1px solid var(--color-border)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(201, 169, 98, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-accent)'
                }}>
                  <Calendar size={20} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>400+ Events</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Hosted annually</p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'var(--color-base)',
                borderRadius: 'var(--border-radius-sm)',
                border: '1px solid var(--color-border)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(201, 169, 98, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-accent)'
                }}>
                  <Mic size={20} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Celebrity Appearances</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>A-list talent regularly</p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'var(--color-base)',
                borderRadius: 'var(--border-radius-sm)',
                border: '1px solid var(--color-border)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(201, 169, 98, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-accent)'
                }}>
                  <Monitor size={20} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>300+ Digital Screens</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Programmable displays</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'var(--color-base)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--border-radius)',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'var(--gradient-gold)'
            }} />
            
            <h3 style={{ 
              fontSize: '1.8rem', 
              marginBottom: '0.5rem',
              fontFamily: 'var(--font-serif)'
            }}>
              Partner With Us
            </h3>
            
            <p style={{ 
              color: 'var(--color-text-secondary)', 
              marginBottom: '2rem',
              fontSize: '0.95rem'
            }}>
              Fill out the form below and our commercial team will reach out within 24 hours.
            </p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '0.8rem', 
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '0.5rem',
                  color: 'var(--color-text-secondary)'
                }}>
                  Full Name
                </label>
                <input 
                  id="contact-name"
                  type="text" 
                  name="name" 
                  placeholder="John Smith"
                  required
                  value={formData.name} 
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--border-radius-sm)',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-text-accent)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(201, 169, 98, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '0.8rem', 
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '0.5rem',
                  color: 'var(--color-text-secondary)'
                }}>
                  Company / Brand
                </label>
                <input 
                  id="contact-company"
                  type="text" 
                  name="company" 
                  placeholder="Acme Corporation"
                  required
                  value={formData.company} 
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--border-radius-sm)',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-text-accent)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(201, 169, 98, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '0.8rem', 
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '0.5rem',
                  color: 'var(--color-text-secondary)'
                }}>
                  I'm Interested In
                </label>
                <select 
                  id="contact-interest"
                  name="interest" 
                  value={formData.interest} 
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--border-radius-sm)',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s ease'
                  }}
                >
                  <option value="leasing" style={{ color: '#000' }}>Retail Leasing</option>
                  <option value="sponsorship" style={{ color: '#000' }}>Brand Sponsorship</option>
                  <option value="events" style={{ color: '#000' }}>Event Booking</option>
                </select>
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '0.8rem', 
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '0.5rem',
                  color: 'var(--color-text-secondary)'
                }}>
                  Message (Optional)
                </label>
                <textarea 
                  id="contact-message"
                  name="message" 
                  placeholder="Tell us about your project or inquiry..."
                  rows="4"
                  value={formData.message} 
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--border-radius-sm)',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    resize: 'none',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-text-accent)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(201, 169, 98, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <motion.button 
                id="contact-submit-btn" 
                type="submit" 
                className="btn-primary"
                disabled={formStatus.status === 'submitting'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  width: '100%', 
                  marginTop: '0.5rem',
                  justifyContent: 'center',
                  opacity: formStatus.status === 'submitting' ? 0.7 : 1
                }}
              >
                {formStatus.status === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>
                    Submit Inquiry
                    <Send size={16} />
                  </>
                )}
              </motion.button>
              
              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--border-radius-sm)',
                    background: formStatus.status === 'success' ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)',
                    border: `1px solid ${formStatus.status === 'success' ? 'rgba(74, 222, 128, 0.3)' : 'rgba(248, 113, 113, 0.3)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}
                >
                  {formStatus.status === 'success' ? (
                    <Check size={18} color="#4ade80" />
                  ) : (
                    <span style={{ color: '#f87171', fontSize: '1.2rem' }}>!</span>
                  )}
                  <p style={{ 
                    fontSize: '0.9rem',
                    color: formStatus.status === 'success' ? '#4ade80' : '#f87171'
                  }}>
                    {formStatus.message}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsPlatform;
