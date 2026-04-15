import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EventsPlatform = () => {
  const [formData, setFormData] = useState({ name: '', company: '', interest: 'leasing', message: '' });
  const [formStatus, setFormStatus] = useState({ status: 'idle', message: '' }); // idle, submitting, success, error

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
    } catch (error) {
      setFormStatus({ status: 'error', message: 'Network error. Please try again later.' });
    }
  };

  return (
    <section id="events-&-leasing" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ color: 'var(--color-text-accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontWeight: 600 }}>The Global Platform</p>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Events & Activations</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
              Mall of America is not just a building; it is a global media platform. 
              We host over 400 events annually, from celebrity appearances and concerts to massive brand activations. 
              Sponsor our spaces, book our venues, or activate an exclusive drop.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <li style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 600, display: 'block', color: 'var(--color-text-accent)' }}>Huntington Bank Rotunda</span>
                <span style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.5rem' }}>The iconic center stage for major concerts and media events.</span>
                <Link id="event-venues-link" to="/events" className="luxury-button" style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.8rem', textDecoration: 'none' }}>Explore Venues</Link>
              </li>
              <li style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 600, display: 'block', color: 'var(--color-text-accent)' }}>Brand Sponsorships</span>
                <span style={{ color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Naming rights, digital takeovers, and experiential domains.</span>
                <Link id="event-sponsorships-link" to="/sponsorship" className="luxury-button" style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.8rem', textDecoration: 'none' }}>View Tiers</Link>
              </li>
            </ul>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel"
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Partner With Us</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
              Reach out to our commercial team to discuss leasing, sponsorships, or event bookings.
            </p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input 
                id="contact-name" type="text" name="name" placeholder="Full Name" required
                value={formData.name} onChange={handleChange}
                style={{ padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--color-border)', borderRadius: '4px', color: '#fff', fontFamily: 'var(--font-sans)' }}
              />
              <input 
                id="contact-company" type="text" name="company" placeholder="Company / Brand" required
                value={formData.company} onChange={handleChange}
                style={{ padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--color-border)', borderRadius: '4px', color: '#fff', fontFamily: 'var(--font-sans)' }}
              />
              <select 
                id="contact-interest" name="interest" value={formData.interest} onChange={handleChange}
                style={{ padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--color-border)', borderRadius: '4px', color: '#fff', fontFamily: 'var(--font-sans)', appearance: 'none' }}
              >
                <option value="leasing" style={{ color: '#000' }}>Retail Leasing</option>
                <option value="sponsorship" style={{ color: '#000' }}>Brand Sponsorship</option>
                <option value="events" style={{ color: '#000' }}>Event Booking</option>
              </select>
              <textarea 
                id="contact-message" name="message" placeholder="Optional details..." rows="3"
                value={formData.message} onChange={handleChange}
                style={{ padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--color-border)', borderRadius: '4px', color: '#fff', fontFamily: 'var(--font-sans)', resize: 'none' }}
              />
              
              <button 
                id="contact-submit-btn" type="submit" 
                className="luxury-button" 
                disabled={formStatus.status === 'submitting'}
                style={{ background: 'var(--color-text-accent)', color: '#000', border: 'none', fontWeight: 600 }}
              >
                {formStatus.status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
              </button>
              
              {formStatus.message && (
                <p style={{ 
                  marginTop: '1rem', 
                  fontSize: '0.9rem', 
                  color: formStatus.status === 'success' ? '#4ade80' : '#f87171' 
                }}>
                  {formStatus.message}
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EventsPlatform;
