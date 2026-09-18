import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShieldAlt, FaCompass, FaCheckCircle, FaBuilding } from 'react-icons/fa';
import { companyData } from '../data/company';

export default function ExecutiveOfficeSection({ isAboutPage = false }) {
  return (
    <section className="executive-office-section" aria-label="Company Office & Executive Presence">
      <div className="container">
        <div className="office-editorial-grid">
          {/* Left Column: Large Editorial Office Photograph */}
          <div className="office-photo-frame">
            <img
              src="/assets/images/company/office-executive.jpg"
              alt="Shree Balaji Constructions Executive Office and Consultation Suite in Farrukhnagar Gurugram"
              className="office-img"
              loading="lazy"
            />
            <div className="office-photo-tagline">
              <div className="office-logo-callout">
                <span className="gold-accent-dot">●</span>
                <span>SHREE BALAJI CONSTRUCTIONS HEADQUARTERS</span>
              </div>
              <div className="office-location-sub">
                Farrukhnagar, Gurugram, Haryana
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Editorial Content */}
          <div className="office-content-wrap">
            <span className="badge-tag">
              {isAboutPage ? "The Place Behind the Projects" : "About Shree Balaji"}
            </span>

            <h2 className="office-headline">
              BUILT AROUND<br />
              <span className="gold-gradient-text">TRUST & EXECUTION.</span>
            </h2>

            <div className="gold-divider"></div>

            <p className="office-lead-p">
              "From the planning desk to the project site, every assignment is approached with a focus on precision, coordination and dependable execution."
            </p>

            <p className="office-body-p">
              Established in 2018 in Farrukhnagar, Gurugram, Shree Balaji Constructions operates as a trusted civil contractor and engineering firm. We undertake civil, structural, and infrastructure works across industrial, commercial, residential, and institutional sectors throughout Haryana and the National Capital Region.
            </p>

            {/* Strategic Pillars / Story Bridge */}
            <div className="office-pillars-grid">
              <div className="office-pillar-item">
                <div className="pillar-label">ESTABLISHED</div>
                <div className="pillar-val">2018</div>
              </div>
              <div className="office-pillar-item">
                <div className="pillar-label">LOCATION</div>
                <div className="pillar-val">GURUGRAM, HARYANA</div>
              </div>
              <div className="office-pillar-item">
                <div className="pillar-label">DISCIPLINE</div>
                <div className="pillar-val">CIVIL CONTRACTOR & ENGINEERS</div>
              </div>
            </div>

            {/* Visual Storytelling Flow: OFFICE → PLANNING → SITE → EXECUTION → COMPLETED PROJECT */}
            <div className="office-story-flow">
              <div className="flow-title">THE EXECUTION PATHWAY</div>
              <div className="flow-chain">
                <span className="flow-node active">OFFICE</span>
                <span className="flow-arr">→</span>
                <span className="flow-node">PLANNING</span>
                <span className="flow-arr">→</span>
                <span className="flow-node">SITE</span>
                <span className="flow-arr">→</span>
                <span className="flow-node">EXECUTION</span>
                <span className="flow-arr">→</span>
                <span className="flow-node highlight">COMPLETED PROJECT</span>
              </div>
            </div>

            <div style={{ marginTop: '2.25rem' }}>
              {isAboutPage ? (
                <Link to="/contact" className="btn btn-primary">
                  <span>Schedule an Office Consultation</span>
                  <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                </Link>
              ) : (
                <Link to="/about" className="btn btn-secondary">
                  <span>More About Us</span>
                  <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
