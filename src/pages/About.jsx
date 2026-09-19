import React from 'react';
import { FaCheckCircle, FaArrowRight, FaHardHat, FaAward, FaDraftingCompass, FaShieldAlt } from 'react-icons/fa';
import { companyData } from '../data/company';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ExecutiveOfficeSection from '../components/ExecutiveOfficeSection';

export default function About() {
  return (
    <div className="about-page">
      {/* 1. PAGE HERO */}
      <section className="page-hero" aria-label="About Page Hero">
        <div className="container">
          <span className="badge-tag">Company Profile & Heritage</span>
          <h1 className="page-hero-title">
            Who We <span>Are</span>
          </h1>
          <p className="page-hero-subtitle">
            Shree Balaji Constructions is a civil contractor and engineering company established in 2018 in Farrukhnagar, Gurugram, specializing in civil engineering and robust on-site execution of durable building projects.
          </p>
        </div>
      </section>

      {/* 2. THE PLACE BEHIND THE PROJECTS (REAL EXECUTIVE OFFICE SECTION) */}
      <ExecutiveOfficeSection isAboutPage={true} />

      {/* 3. OUR STORY & FOUNDATION */}
      <section className="section-pad section-dark" aria-label="Our Story">
        <div className="container">
          <div className="intro-grid">
            <div>
              <span className="badge-tag">Our Foundation</span>
              <h2 style={{ color: '#FFF', marginBottom: '1rem' }}>Our Story & Site Practice</h2>
              <div className="gold-divider"></div>

              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#EAEBED', marginBottom: '1.25rem' }}>
                {companyData.about.lead}
              </p>

              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {companyData.about.story}
              </p>

              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Under the technical direction of civil engineering professionals, we combine hands-on site accountability with modern construction equipment — including self-loading mixers, vibratory compactors, backhoe loaders, and digital optical surveying instruments.
              </p>
            </div>

            <div className="intro-image-frame">
              <img
                src="/assets/images/machinery/slm-flori-mixer.jpg"
                alt="Construction machinery deployed on active site by Shree Balaji Constructions"
                loading="lazy"
              />
              <div className="intro-badge-overlay">
                <div>
                  <div style={{ color: 'var(--gold-light)', fontWeight: '800' }}>FIELD EXECUTION</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Civil Contractor & Engineers</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#FFF', fontWeight: '800' }}>ESTD. 2018</div>
                  <div style={{ color: 'var(--gold-light)', fontSize: '0.75rem' }}>HARYANA, INDIA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="section-pad section-dark-elevated" aria-label="Mission and Vision">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {/* Vision */}
            <div style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-dark)', padding: '3rem 2.5rem', borderTop: '3px solid var(--gold-primary)' }}>
              <span className="badge-tag">Our Vision</span>
              <h3 style={{ fontSize: '1.65rem', color: '#FFF', margin: '1rem 0' }}>
                "{companyData.about.vision}"
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', fontSize: '0.95rem' }}>
                To transform client visions, architectural sketches, and master plans into enduring, high-performance structural reality through disciplined civil engineering.
              </p>
            </div>

            {/* Mission */}
            <div style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-dark)', padding: '3rem 2.5rem', borderTop: '3px solid var(--gold-primary)' }}>
              <span className="badge-tag">Our Mission</span>
              <h3 style={{ fontSize: '1.65rem', color: '#FFF', margin: '1rem 0' }}>
                Excellence in Execution & Trust
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', fontSize: '0.95rem' }}>
                {companyData.about.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES (6 VALUES) */}
      <section className="section-pad section-dark" aria-label="Core Values">
        <div className="container">
          <SectionHeading
            badge="What Guides Us"
            title="Our Core"
            highlight="Values"
            subtitle="These principles guide every decision we make — from on-site material testing and worker safety protocols to transparent client accounting."
            center
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {companyData.about.values.map((val) => (
              <div
                key={val.number}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-dark)',
                  padding: '2.25rem 2rem',
                  borderLeft: '2px solid var(--gold-primary)'
                }}
              >
                <div style={{ color: 'var(--gold-light)', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  VALUE {val.number}
                </div>
                <h4 style={{ color: '#FFF', fontSize: '1.2rem', marginBottom: '0.75rem' }}>{val.title}</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE PEOPLE BEHIND THE BUILD */}
      <section className="section-pad section-dark-elevated" aria-label="The People Behind The Build">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-tag">FOUNDERS • ENGINEERING • EXECUTION</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFF', marginTop: '0.75rem', letterSpacing: '-0.02em' }}>
              THE PEOPLE <span style={{ color: 'var(--gold-light)' }}>BEHIND THE BUILD</span>
            </h2>
            <div className="gold-divider center" style={{ marginTop: '1rem', marginBottom: '1.25rem' }}></div>
            <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto', fontSize: '1rem' }}>
              Direct engineering leadership on-site. Combining technical structural precision with disciplined field operations across Haryana, NCR, and Rajasthan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', maxWidth: '1080px', margin: '0 auto', alignItems: 'stretch' }}>
            {/* KRISHAN YADAV - PROMINENT FOUNDER PROFILE */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '2px solid var(--gold-primary)',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6), 0 0 24px rgba(197, 160, 89, 0.15)',
                padding: 'clamp(2rem, 5vw, 3rem)',
                borderRadius: 'var(--radius-xs)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Featured Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '2rem',
                  backgroundColor: 'var(--gold-primary)',
                  color: '#0B0C0E',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.72rem',
                  fontWeight: '900',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '0.3rem 0.9rem',
                  borderRadius: '2px'
                }}
              >
                ENGINEERING LEADERSHIP
              </div>

              <div>
                <div style={{ color: 'var(--gold-light)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                  ENGINEERING & PROJECT DIRECTION
                </div>
                
                <h3 style={{ color: '#FFF', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: '800', marginBottom: '0.35rem', letterSpacing: '-0.01em' }}>
                  KRISHAN YADAV
                </h3>

                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(197, 160, 89, 0.15)',
                    border: '1px solid var(--gold-border)',
                    color: 'var(--gold-light)',
                    fontSize: '0.85rem',
                    fontWeight: '800',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '2px',
                    marginBottom: '1.5rem'
                  }}
                >
                  FOUNDER • B.TECH CIVIL ENGINEER
                </div>

                <p style={{ color: '#E2E8F0', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                  "Leads the engineering and technical direction of construction projects, with a focus on project planning, site engineering, structural execution, quality control, technical coordination, and project delivery."
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>
                    Direct Contact
                  </div>
                  <a
                    href={`tel:${companyData.contact.primaryPhone.replace(/[^0-9+]/g, '')}`}
                    style={{ color: 'var(--gold-light)', fontWeight: '800', fontSize: '1.05rem', textDecoration: 'none' }}
                  >
                    {companyData.contact.primaryPhone}
                  </a>
                </div>

                <a
                  href={`tel:${companyData.contact.primaryPhone.replace(/[^0-9+]/g, '')}`}
                  className="btn btn-sm btn-primary"
                >
                  Direct Call
                </a>
              </div>
            </div>

            {/* ASHOK YADAV - CO-FOUNDER PROFILE */}
            <div
              style={{
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-dark)',
                borderTop: '2px solid var(--gold-primary)',
                padding: 'clamp(2rem, 5vw, 3rem)',
                borderRadius: 'var(--radius-xs)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ color: 'var(--gold-light)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                  OPERATIONS & SITE COORDINATION
                </div>

                <h3 style={{ color: '#FFF', fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)', fontWeight: '800', marginBottom: '0.35rem', letterSpacing: '-0.01em' }}>
                  ASHOK YADAV
                </h3>

                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid var(--border-dark)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.82rem',
                    fontWeight: '800',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '2px',
                    marginBottom: '1.5rem'
                  }}
                >
                  FOUNDER • SITE OPERATIONS
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                  "Leads site operations and execution, coordinating equipment mobilization, contractors, material movement, workforce coordination, and day-to-day site activities."
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>
                    Direct Contact
                  </div>
                  <a
                    href={`tel:${companyData.contact.secondaryPhone.replace(/[^0-9+]/g, '')}`}
                    style={{ color: 'var(--gold-light)', fontWeight: '800', fontSize: '1.05rem', textDecoration: 'none' }}
                  >
                    {companyData.contact.secondaryPhone}
                  </a>
                </div>

                <a
                  href={`tel:${companyData.contact.secondaryPhone.replace(/[^0-9+]/g, '')}`}
                  className="btn btn-sm btn-secondary"
                >
                  Direct Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="section-pad-sm section-dark" aria-label="Call to Action">
        <div className="container">
          <div className="instagram-showcase-bar">
            <span className="badge-tag">Build With Confidence</span>
            <h2 style={{ color: '#FFF', marginBottom: '1rem' }}>Ready to Discuss Your Project?</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '650px', marginBottom: '2rem' }}>
              Speak with our engineering directors today to review your structural drawings, site requirements, and timeline goals.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button to="/contact" variant="primary" size="lg" icon={<FaArrowRight />}>
                Discuss Your Project
              </Button>
              <Button to="/projects" variant="outline" size="lg">
                View Project Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
