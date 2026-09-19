import React, { useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaPaperPlane,
  FaInstagram,
  FaFileInvoice
} from 'react-icons/fa';
import { companyData } from '../data/company';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    projectType: 'Warehouse Construction',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact phone number is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your construction requirement.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters describing your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    /**
     * =======================================================================
     * EMAIL & BACKEND INTEGRATION NOTE:
     * =======================================================================
     * This form currently performs client-side validation and records the entry.
     * When you are ready for real email delivery to your inbox:
     * 1. Connect Formspree (POST to https://formspree.io/f/YOUR_FORM_ID)
     * 2. Or use EmailJS (npm install emailjs-com)
     * 3. Or forward to a custom Node/Express API endpoint.
     * =======================================================================
     */

    const ref = 'SBC-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      projectType: 'Warehouse Construction',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="contact-page">
      {/* 1. PAGE HERO */}
      <section className="page-hero" aria-label="Contact Page Hero">
        <div className="container">
          <span className="badge-tag">Direct Communication</span>
          <h1 className="page-hero-title">
            Discuss Your <span>Project</span>
          </h1>
          <p className="page-hero-subtitle">
            Have a construction project in mind? Contact Krishan Yadav and Ashok Yadav to discuss project drawings, timelines, machinery requirements, and quotation details.
          </p>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT */}
      <section className="section-pad section-dark" aria-label="Contact Form and Details">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Office Information */}
            <div className="contact-info-card">
              <div>
                <h3 style={{ fontSize: '1.45rem', color: '#FFF', marginBottom: '0.5rem' }}>
                  Headquarters
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  Shree Balaji Constructions (Civil Contractor & Engineers)
                </p>
              </div>

              {/* Physical Location */}
              <div className="contact-item-group">
                <div className="contact-icon-bubble" aria-hidden="true">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="contact-item-title">Office Location</div>
                  <div className="contact-item-text">
                    {companyData.contact.address.full}
                  </div>
                </div>
              </div>

              {/* Phones */}
              <div className="contact-item-group">
                <div className="contact-icon-bubble" aria-hidden="true">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="contact-item-title">Phone Inquiries</div>
                  <div className="contact-item-text">
                    <a href={`tel:${companyData.contact.primaryPhone.replace(/[^0-9+]/g, '')}`} style={{ color: '#FFF', fontWeight: '700', display: 'block' }}>
                      {companyData.contact.primaryPhone}
                    </a>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gold-light)' }}>
                      {companyData.contact.primaryContactPerson} ({companyData.contact.primaryContactRole})
                    </span>

                    <a href={`tel:${companyData.contact.secondaryPhone.replace(/[^0-9+]/g, '')}`} style={{ color: '#FFF', fontWeight: '700', display: 'block', marginTop: '0.5rem' }}>
                      {companyData.contact.secondaryPhone}
                    </a>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gold-light)' }}>
                      {companyData.contact.secondaryContactPerson} (Site Operations)
                    </span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item-group">
                <div className="contact-icon-bubble" aria-hidden="true">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="contact-item-title">Email Inquiries</div>
                  <div className="contact-item-text">
                    <a href={`mailto:${companyData.contact.email}`} style={{ color: '#FFF', display: 'block' }}>
                      {companyData.contact.email}
                    </a>
                    <a href={`mailto:${companyData.contact.alternateEmail}`} style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      {companyData.contact.alternateEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="contact-item-group">
                <div className="contact-icon-bubble" aria-hidden="true">
                  <FaInstagram />
                </div>
                <div>
                  <div className="contact-item-title">Official Instagram</div>
                  <div className="contact-item-text">
                    <a
                      href={companyData.socials.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--gold-light)', fontWeight: '700' }}
                    >
                      {companyData.socials.instagram.handle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="contact-item-group">
                <div className="contact-icon-bubble" aria-hidden="true">
                  <FaClock />
                </div>
                <div>
                  <div className="contact-item-title">Working Hours</div>
                  <div className="contact-item-text">
                    {companyData.contact.businessHours.weekdays}<br />
                    {companyData.contact.businessHours.sunday}
                  </div>
                </div>
              </div>

              {/* GST Identification */}
              <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-xs)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-light)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>
                  <FaFileInvoice />
                  <span>GST Registered Contractor</span>
                </div>
                <div style={{ fontSize: '1.05rem', color: '#FFF', fontWeight: '800', marginTop: '0.35rem' }}>
                  {companyData.gstNumber}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="form-wrapper">
              {!isSubmitted ? (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div>
                    <h3 style={{ fontSize: '1.45rem', color: '#FFF', marginBottom: '0.35rem' }}>
                      Project Consultation Request
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                      Complete this form with your project requirements and our engineering team will respond promptly.
                    </p>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="e.g. +91 98000 00000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="e.g. ramesh@company.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company / Organization</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="form-input"
                        placeholder="e.g. Logistics / Manufacturing Co."
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="projectType">Service / Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="form-select"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="Warehouse Construction">Warehouse Construction</option>
                      <option value="Building Construction">Building Construction (Commercial / Residential)</option>
                      <option value="Factory Infrastructure">Factory Infrastructure</option>
                      <option value="Roadwork & Paving">Roadwork & Heavy Paving</option>
                      <option value="Drainage Systems">Drainage & Stormwater Systems</option>
                      <option value="Waterproofing">Waterproofing Solutions</option>
                      <option value="Metal Roofing">Metal Roofing & Cladding</option>
                      <option value="Tiling">Tiling & Floor Finishes</option>
                      <option value="Maintenance">Facility Maintenance & Repairs</option>
                      <option value="Civil Engineering & Execution">Civil Engineering & Project Execution</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Project Requirements & Location *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Please share project location, estimated plot/built area, target schedule, and any specific structural requirements..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<FaPaperPlane />}
                  >
                    Request a Consultation
                  </Button>
                </form>
              ) : (
                <div className="form-success-banner animate-fade-in">
                  <FaCheckCircle className="form-success-icon" style={{ color: 'var(--gold-light)' }} />
                  <h3 style={{ color: '#FFF', fontSize: '1.65rem' }}>Project Enquiry Recorded</h3>
                  <p style={{ color: '#D4D8E0', maxWidth: '480px' }}>
                    Thank you, <strong>{formData.name}</strong>. Your enquiry regarding <strong>{formData.projectType}</strong> has been received under reference code <strong>{referenceId}</strong>.
                  </p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Our engineering team will review your specifications and contact you directly at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong>.
                  </p>
                  <Button variant="secondary" onClick={handleReset} style={{ marginTop: '1rem' }}>
                    Submit Another Enquiry
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
