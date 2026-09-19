import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFileInvoice, FaShieldAlt } from 'react-icons/fa';
import { companyData } from '../data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand & Slogan */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
              <img
                src={companyData.logo}
                alt="Shree Balaji Constructions Logo"
                style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: 'var(--radius-xs)', border: '1px solid var(--gold-border)' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <h3 className="footer-brand-title">Shree Balaji</h3>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700' }}>
                  Constructions
                </div>
              </div>
            </div>

            <p className="footer-slogan">{companyData.tagline}</p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Civil Contractor & Engineers specializing in civil engineering and on-site execution of industrial, commercial, and residential building projects across Haryana and NCR.
            </p>

            <div className="footer-gst-badge">
              <span>GSTIN: {companyData.gstNumber}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Quick Navigation
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>About Our Firm</Link></li>
              <li><Link to="/services" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>All Services (10)</Link></li>
              <li><Link to="/projects" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>Project Portfolio</Link></li>
              <li><Link to="/capability" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>Execution Capability</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}>Contact & Enquiries</Link></li>
            </ul>
          </div>

          {/* Column 3: Core Sectors */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Core Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/services" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Building Construction</Link></li>
              <li><Link to="/services" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Warehouse Construction</Link></li>
              <li><Link to="/services" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Factory Infrastructure</Link></li>
              <li><Link to="/services" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Roadwork & Paving</Link></li>
              <li><Link to="/services" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Drainage Systems</Link></li>
              <li><Link to="/services" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Metal Roofing & Cladding</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Instagram */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Office & Inquiries
            </h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <span>{companyData.contact.address.full}</span>
              </li>
              <li className="footer-contact-item">
                <FaPhoneAlt className="footer-contact-icon" />
                <div>
                  <a href={`tel:${companyData.contact.primaryPhone.replace(/[^0-9+]/g, '')}`} style={{ color: '#FFF', display: 'block', fontWeight: '700' }}>
                    {companyData.contact.primaryPhone}
                  </a>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)' }}>
                    {companyData.contact.primaryContactPerson} ({companyData.contact.primaryContactRole})
                  </span>
                  <a href={`tel:${companyData.contact.secondaryPhone.replace(/[^0-9+]/g, '')}`} style={{ color: '#FFF', display: 'block', fontWeight: '700', marginTop: '4px' }}>
                    {companyData.contact.secondaryPhone}
                  </a>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)' }}>
                    {companyData.contact.secondaryContactPerson}
                  </span>
                </div>
              </li>
              <li className="footer-contact-item">
                <FaEnvelope className="footer-contact-icon" />
                <div>
                  <a href={`mailto:${companyData.contact.email}`} style={{ color: '#FFF', display: 'block' }}>
                    {companyData.contact.email}
                  </a>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Official Inquiries</span>
                </div>
              </li>
              <li className="footer-contact-item">
                <FaInstagram className="footer-contact-icon" />
                <a
                  href={companyData.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--gold-light)', fontWeight: '700' }}
                >
                  {companyData.socials.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem' }}>
          <p>© {currentYear} {companyData.name}. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)' }}>
            <span>Civil Contractor & Engineers</span>
            <span>Gurugram, Haryana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
