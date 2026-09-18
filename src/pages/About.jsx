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
            Shree Balaji Constructions is a civil contractor and engineering company established in 2018 in Farrukhnagar, Gurugram, specializing in the design, fabrication, and execution of durable building projects.
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
      <section className="section-pad section-dark-elevated" aria-label="People Behind The Build">
        <div className="container">
          <SectionHeading
            badge="Execution Leadership"
            title="The People"
            highlight="Behind the Build"
            subtitle="PEOPLE + PLANNING + RESOURCES + EXECUTION. Meet the engineering and site leadership overseeing operations, quality control, and client collaboration."
            center
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '900px', margin: '0 auto' }}>
            {/* Krishan Yadav */}
            <div style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-dark)', padding: '2.5rem', borderTop: '2px solid var(--gold-primary)' }}>
              <div style={{ color: 'var(--gold-light)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                Engineering & Project Direction
              </div>
              <h3 style={{ color: '#FFF', fontSize: '1.45rem', marginBottom: '0.25rem' }}>
                {companyData.contact.primaryContactPerson}
              </h3>
              <div style={{ color: 'var(--gold-light)', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem' }}>
                {companyData.contact.primaryContactRole}
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Leads technical feasibility, structural rebar calculations, layout accuracy, concrete quality testing, and project site engineering.
              </p>
              <div style={{ color: '#FFF', fontSize: '0.85rem' }}>
                Direct Phone: <a href={`tel:${companyData.contact.primaryPhone.replace(/[^0-9+]/g, '')}`} style={{ color: 'var(--gold-light)', fontWeight: '700' }}>{companyData.contact.primaryPhone}</a>
              </div>
            </div>

            {/* Ashok Yadav */}
            <div style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-dark)', padding: '2.5rem', borderTop: '2px solid var(--gold-primary)' }}>
              <div style={{ color: 'var(--gold-light)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                Operations & Site Coordination
              </div>
              <h3 style={{ color: '#FFF', fontSize: '1.45rem', marginBottom: '0.25rem' }}>
                {companyData.contact.secondaryContactPerson}
              </h3>
              <div style={{ color: 'var(--gold-light)', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem' }}>
                Co-Founder & Site Operations
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Manages on-site equipment mobilization, trade contractor scheduling, material deliveries, and day-to-day site execution across projects.
              </p>
              <div style={{ color: '#FFF', fontSize: '0.85rem' }}>
                Direct Phone: <a href={`tel:${companyData.contact.secondaryPhone.replace(/[^0-9+]/g, '')}`} style={{ color: 'var(--gold-light)', fontWeight: '700' }}>{companyData.contact.secondaryPhone}</a>
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
