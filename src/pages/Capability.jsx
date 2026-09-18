import React from 'react';
import { FaArrowRight, FaHardHat, FaPhoneAlt } from 'react-icons/fa';
import { capabilitiesData } from '../data/capabilities';
import { companyData } from '../data/company';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import CapabilityExecutionSection from '../components/CapabilityExecutionSection';

export default function Capability() {
  return (
    <div className="capability-page">
      {/* 1. PAGE HERO */}
      <section className="page-hero" aria-label="Execution Capability Hero">
        <div className="container">
          <span className="badge-tag">Resource Coordination & Site Mastery</span>
          <h1 className="page-hero-title">
            Built to <span>Execute</span>
          </h1>
          <p className="page-hero-subtitle">
            {capabilitiesData.bodyText}
          </p>
          <div style={{ marginTop: '1.25rem', color: 'var(--gold-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>
            ● Equipment and site resources deployed according to project requirements
          </div>
        </div>
      </section>

      {/* 2. FULL INTERACTIVE EXECUTION CAPABILITY SECTION */}
      <CapabilityExecutionSection isStandalonePage={true} />

      {/* 3. CTA BANNER */}
      <section className="section-pad-sm" aria-label="Call to Action">
        <div className="container">
          <div className="instagram-showcase-bar">
            <span className="badge-tag">Ready to Mobilize</span>
            <h2 style={{ color: '#FFF', marginBottom: '1rem' }}>Have a Construction Project in Mind?</h2>
            <p style={{ maxWidth: '650px', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Contact Krishan Yadav and our execution team to discuss site feasibility, equipment allocation, and quotation details.
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
