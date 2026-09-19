import React from 'react';
import {
  FaCheckCircle,
  FaArrowRight,
  FaBuilding,
  FaRoad,
  FaWarehouse,
  FaIndustry,
  FaWater,
  FaShieldAlt,
  FaHardHat,
  FaThLarge,
  FaTools,
  FaDraftingCompass
} from 'react-icons/fa';
import { servicesData } from '../data/services';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';

const iconMap = {
  FaBuilding: FaBuilding,
  FaRoad: FaRoad,
  FaWarehouse: FaWarehouse,
  FaIndustry: FaIndustry,
  FaWater: FaWater,
  FaShieldAlt: FaShieldAlt,
  FaHardHat: FaHardHat,
  FaThLarge: FaThLarge,
  FaTools: FaTools,
  FaDraftingCompass: FaDraftingCompass
};

export default function Services() {
  return (
    <div className="services-page">
      {/* 1. PAGE HERO */}
      <section className="page-hero" aria-label="Services Page Hero">
        <div className="container">
          <span className="badge-tag">Comprehensive Construction Solutions</span>
          <h1 className="page-hero-title">
            What We <span>Build</span>
          </h1>
          <p className="page-hero-subtitle">
            Explore our ten specialized construction and civil engineering services — designed, fabricated, and executed with technical rigor across commercial, industrial, and residential sectors.
          </p>
        </div>
      </section>

      {/* 2. DETAILED SERVICES CATALOG */}
      <section className="section-pad section-dark" aria-label="Services Catalog">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || FaHardHat;
            const isReversed = index % 2 === 1;

            return (
              <article
                key={service.id}
                id={service.id}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden',
                  borderTop: '2px solid var(--gold-primary)'
                }}
              >
                {service.image ? (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      alignItems: 'stretch'
                    }}
                  >
                    {/* Image Frame */}
                    <div
                      style={{
                        height: '100%',
                        minHeight: '380px',
                        order: isReversed ? 2 : 1,
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        loading="lazy"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '1rem',
                          left: '1rem',
                          backgroundColor: 'rgba(11, 12, 14, 0.85)',
                          border: '1px solid var(--gold-border)',
                          padding: '0.4rem 0.85rem',
                          borderRadius: '2px',
                          fontSize: '0.75rem',
                          color: 'var(--gold-light)',
                          fontWeight: '700',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase'
                        }}
                      >
                        ● Verified Site Documentation
                      </div>
                    </div>

                    {/* Body Content */}
                    <div
                      style={{
                        padding: 'clamp(2rem, 5vw, 3.5rem)',
                        order: isReversed ? 1 : 2
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                        <div
                          style={{
                            width: '46px',
                            height: '46px',
                            backgroundColor: 'var(--gold-soft)',
                            color: 'var(--gold-light)',
                            border: '1px solid var(--gold-border)',
                            borderRadius: '2px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.3rem'
                          }}
                        >
                          <IconComponent />
                        </div>
                        <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold-light)', fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.1em' }}>
                          SERVICE {service.number}
                        </span>
                      </div>

                      <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', color: '#FFF', marginBottom: '0.35rem' }}>
                        {service.title}
                      </h2>
                      <div style={{ color: 'var(--gold-light)', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1.25rem' }}>
                        {service.tagline}
                      </div>

                      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '2rem' }}>
                        {service.fullDescription}
                      </p>

                      {/* Capabilities */}
                      <div style={{ marginBottom: '2rem' }}>
                        <div style={{ fontSize: '0.8rem', color: '#FFF', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', marginBottom: '0.85rem' }}>
                          Key Technical Capabilities
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                          {service.capabilities.map((cap, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                              <FaCheckCircle style={{ color: 'var(--gold-light)', marginTop: '4px', flexShrink: 0, fontSize: '0.85rem' }} />
                              <span style={{ fontSize: '0.9rem', color: '#E2E8F0' }}>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div style={{ marginBottom: '2.5rem' }}>
                        <div style={{ fontSize: '0.8rem', color: '#FFF', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', marginBottom: '0.65rem' }}>
                          Typical Project Applications
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {service.applications.map((app, idx) => (
                            <span
                              key={idx}
                              style={{
                                backgroundColor: 'var(--bg-main)',
                                border: '1px solid var(--border-dark)',
                                padding: '0.35rem 0.75rem',
                                borderRadius: '2px',
                                fontSize: '0.78rem',
                                color: 'var(--text-muted)'
                              }}
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button to="/contact" variant="primary" icon={<FaArrowRight />}>
                        Inquire About This Service
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Clean Typographic Service Card */
                  <div
                    style={{
                      padding: 'clamp(2rem, 5vw, 3.5rem)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '3rem',
                      alignItems: 'start'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                        <div
                          style={{
                            width: '46px',
                            height: '46px',
                            backgroundColor: 'var(--gold-soft)',
                            color: 'var(--gold-light)',
                            border: '1px solid var(--gold-border)',
                            borderRadius: '2px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.3rem'
                          }}
                        >
                          <IconComponent />
                        </div>
                        <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold-light)', fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.1em' }}>
                          SERVICE {service.number} • ENGINEERING SPECIFICATION
                        </span>
                      </div>

                      <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', color: '#FFF', marginBottom: '0.35rem' }}>
                        {service.title}
                      </h2>
                      <div style={{ color: 'var(--gold-light)', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1.25rem' }}>
                        {service.tagline}
                      </div>

                      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '2rem' }}>
                        {service.fullDescription}
                      </p>

                      <Button to="/contact" variant="primary" icon={<FaArrowRight />}>
                        Inquire About This Service
                      </Button>
                    </div>

                    <div style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-dark)', padding: '2rem', borderRadius: 'var(--radius-xs)' }}>
                      {/* Capabilities */}
                      <div style={{ marginBottom: '2rem' }}>
                        <div style={{ fontSize: '0.8rem', color: '#FFF', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', marginBottom: '0.85rem' }}>
                          Key Technical Capabilities
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                          {service.capabilities.map((cap, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                              <FaCheckCircle style={{ color: 'var(--gold-light)', marginTop: '4px', flexShrink: 0, fontSize: '0.85rem' }} />
                              <span style={{ fontSize: '0.9rem', color: '#E2E8F0' }}>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#FFF', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', marginBottom: '0.65rem' }}>
                          Typical Project Applications
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {service.applications.map((app, idx) => (
                            <span
                              key={idx}
                              style={{
                                backgroundColor: 'var(--bg-surface)',
                                border: '1px solid var(--border-dark)',
                                padding: '0.35rem 0.75rem',
                                borderRadius: '2px',
                                fontSize: '0.78rem',
                                color: 'var(--text-muted)'
                              }}
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="section-pad-sm" aria-label="Call to Action">
        <div className="container">
          <div className="instagram-showcase-bar">
            <span className="badge-tag">Custom Civil Solutions</span>
            <h2 style={{ color: '#FFF', marginBottom: '1rem' }}>Need a Specialized Construction Scope?</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '650px', marginBottom: '2rem' }}>
              We review site topographies, structural drawings, and material schedules to offer customized execution packages.
            </p>
            <Button to="/contact" variant="primary" size="lg" icon={<FaArrowRight />}>
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
