import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { companyData } from '../data/company';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="site-header" style={{ height: scrolled ? '72px' : '84px' }}>
      <div className="container nav-container" style={{ height: '100%' }}>
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" aria-label={`${companyData.name} Home`}>
          <img
            src={companyData.logo}
            alt="Shree Balaji Constructions Gold Emblem"
            className="brand-logo-img"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="brand-text-block">
            <span className="brand-title">Shree Balaji</span>
            <span className="brand-subtitle">Constructions</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Services
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Projects
          </NavLink>
          <NavLink to="/capability" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Capability
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop Action */}
        <div className="desktop-actions">
          <Link to="/contact" className="btn btn-primary btn-sm">
            <span>Discuss Project</span>
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu}>
          <div
            className="mobile-menu-drawer animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <NavLink
              to="/"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              end
            >
              <span>Home</span>
              <FaArrowRight aria-hidden="true" style={{ fontSize: '0.85rem' }} />
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              <span>About Us</span>
              <FaArrowRight aria-hidden="true" style={{ fontSize: '0.85rem' }} />
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              <span>Services (10)</span>
              <FaArrowRight aria-hidden="true" style={{ fontSize: '0.85rem' }} />
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              <span>Projects Portfolio</span>
              <FaArrowRight aria-hidden="true" style={{ fontSize: '0.85rem' }} />
            </NavLink>
            <NavLink
              to="/capability"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              <span>Execution Capability</span>
              <FaArrowRight aria-hidden="true" style={{ fontSize: '0.85rem' }} />
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              <span>Contact</span>
              <FaArrowRight aria-hidden="true" style={{ fontSize: '0.85rem' }} />
            </NavLink>

            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-dark)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`tel:${companyData.contact.primaryPhone.replace(/[^0-9+]/g, '')}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--gold-light)', fontWeight: '700' }}
              >
                <FaPhoneAlt />
                <span>{companyData.contact.primaryPhone} ({companyData.contact.primaryContactPerson})</span>
              </a>

              <a
                href={companyData.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-secondary)' }}
              >
                <FaInstagram />
                <span>{companyData.socials.instagram.handle}</span>
              </a>
            </div>

            <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              <span>Discuss Your Project</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
