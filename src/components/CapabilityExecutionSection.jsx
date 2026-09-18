import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCheck,
  FaDraftingCompass,
  FaTools,
  FaHardHat,
  FaLayerGroup,
  FaCogs,
  FaWater,
  FaTruckLoading,
  FaCompass
} from 'react-icons/fa';
import { capabilitiesData } from '../data/capabilities';

export default function CapabilityExecutionSection({ isStandalonePage = false }) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = capabilitiesData.categories[activeCategoryIndex];

  return (
    <section className="built-to-execute-section" aria-label="Built to Execute Section">
      <div className="container">
        {/* ===================================================================
            1. SECTION HEADER
            =================================================================== */}
        <div className="bte-header text-center">
          <div className="badge-tag">Site Capability & Execution Resources</div>
          <h2 className="bte-main-heading">
            {capabilitiesData.mainHeading}
          </h2>
          <div className="bte-subheading">
            {capabilitiesData.subheading}
          </div>
          <div className="gold-divider center"></div>
          <p className="bte-main-copy">
            "{capabilitiesData.mainCopy}"
          </p>
        </div>

        {/* ===================================================================
            2. HERO VISUAL OVERLAY (Dominant Construction Site Visual)
            =================================================================== */}
        <div className="bte-hero-visual-frame">
          <img
            src="/assets/images/machinery/slm-flori-mixer.jpg"
            alt="Active construction execution by Shree Balaji Constructions"
            className="bte-hero-img"
            loading="lazy"
          />
          <div className="bte-hero-overlay">
            <div className="bte-hero-badge-strip">
              {capabilitiesData.capabilityAreas.map((area, idx) => (
                <span key={idx} className="bte-area-tag">
                  {area}
                </span>
              ))}
            </div>

            <div className="bte-hero-center-text">
              <span className="bte-hero-sub-title">FIELD OPERATIONS</span>
              <h3 className="bte-hero-headline">BUILT TO EXECUTE.</h3>
              <p className="bte-hero-desc">
                From ground measurement to heavy structural casting, disciplined execution is engineered at every phase.
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================================
            3. INTERACTIVE CATEGORY TABS (01 to 05)
            =================================================================== */}
        <div className="bte-tabs-nav" role="tablist">
          {capabilitiesData.categories.map((cat, idx) => {
            const isActive = idx === activeCategoryIndex;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                className={`bte-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategoryIndex(idx)}
              >
                <span className="bte-tab-num">{cat.number}</span>
                <span className="bte-tab-name">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* ===================================================================
            4. ACTIVE CATEGORY DISPLAY (Large Editorial View)
            =================================================================== */}
        <div className="bte-active-category-panel">
          <div className="bte-panel-grid">
            {/* Left: Featured Large Image */}
            <div className="bte-featured-img-wrap">
              <img
                src={activeCategory.featuredImage}
                alt={activeCategory.featuredAlt}
                className="bte-featured-img"
                loading="lazy"
              />
              <div className="bte-img-badge-overlay">
                <span className="bte-pill-gold">{activeCategory.number} — {activeCategory.tag}</span>
              </div>
            </div>

            {/* Right: Technical Category Details & Real Equipment */}
            <div className="bte-category-details">
              <div className="bte-cat-role">{activeCategory.role}</div>
              <h3 className="bte-cat-name">{activeCategory.name}</h3>
              <p className="bte-cat-desc">{activeCategory.description}</p>

              <div className="bte-equipment-list-heading">
                DEPLOYED SITE RESOURCES & EQUIPMENT
              </div>

              <div className="bte-equipment-cards-stack">
                {activeCategory.equipment.map((eq, i) => (
                  <div key={i} className="bte-eq-item-card">
                    <div className="bte-eq-item-thumb">
                      <img src={eq.image} alt={eq.name} loading="lazy" />
                    </div>
                    <div className="bte-eq-item-info">
                      <div className="bte-eq-role-tag">{eq.roleTag}</div>
                      <h4 className="bte-eq-name">{eq.name}</h4>
                      <p className="bte-eq-desc">{eq.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            5. "MORE THAN MACHINES" SECTION
            =================================================================== */}
        <div className="bte-more-than-machines-block">
          <div className="bte-mtm-header">
            <span className="badge-tag">Disciplined Construction Process</span>
            <h3 className="bte-mtm-heading">{capabilitiesData.moreThanMachines.heading}</h3>
            <p className="bte-mtm-copy">
              "{capabilitiesData.moreThanMachines.copy}"
            </p>
          </div>

          <div className="bte-flow-steps-grid">
            {capabilitiesData.moreThanMachines.flowSteps.map((step) => (
              <div key={step.step} className="bte-flow-step-card">
                <div className="bte-flow-step-num">{step.step}</div>
                <h4 className="bte-flow-step-title">{step.name}</h4>
                <p className="bte-flow-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================================
            6. "THE EXECUTION ECOSYSTEM" VISUAL DIAGRAM
            =================================================================== */}
        <div className="bte-ecosystem-block">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span className="badge-tag">Integrated Site Coordination</span>
            <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', color: '#FFF' }}>
              THE EXECUTION ECOSYSTEM
            </h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
              Every piece of equipment, instrument, and resource is synchronized with specific construction stages.
            </p>
          </div>

          <div className="bte-ecosystem-chain">
            {capabilitiesData.ecosystem.map((stage, idx) => (
              <div key={idx} className="bte-ecosystem-node">
                <div className="bte-node-step-index">Phase 0{idx + 1}</div>
                <div className="bte-node-stage-name">{stage.stage}</div>
                <div className="bte-node-eq-pill">
                  {stage.equipment}
                </div>
                <p className="bte-node-role">{stage.role}</p>
                {idx < capabilitiesData.ecosystem.length - 1 && (
                  <div className="bte-node-connector" aria-hidden="true">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================================
            7. "RESOURCES BEHIND THE WORK" (Portfolio Connection)
            =================================================================== */}
        <div className="bte-portfolio-connection-block">
          <div className="bte-pc-header">
            <span className="badge-tag">Proven Capability in the Field</span>
            <h3 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', color: '#FFF' }}>
              {capabilitiesData.portfolioConnection.title}
            </h3>
            <div className="bte-pc-concept">
              {capabilitiesData.portfolioConnection.concept}
            </div>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0.75rem auto 2.5rem' }}>
              {capabilitiesData.portfolioConnection.subtitle}
            </p>
          </div>

          <div className="bte-projects-chips-grid">
            {capabilitiesData.portfolioConnection.featuredProjects.map(proj => (
              <Link
                key={proj.id}
                to={`/projects/${proj.id}`}
                className="bte-proj-chip-card"
              >
                <div className="bte-proj-chip-cat">{proj.category}</div>
                <h4 className="bte-proj-chip-name">{proj.name}</h4>
                <div className="bte-proj-chip-loc">{proj.location}</div>
                <span className="bte-proj-chip-arrow">
                  <span>View Project</span>
                  <FaArrowRight style={{ fontSize: '0.75rem' }} />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ===================================================================
            8. FINAL SECTION COPY & CTA
            =================================================================== */}
        <div className="bte-final-cta-bar">
          <div className="bte-final-callout-text">
            <h4 style={{ color: '#FFF', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
              {capabilitiesData.secondaryHeading}
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7', maxWidth: '750px', margin: '0 auto 1.5rem' }}>
              {capabilitiesData.bodyText}
            </p>
            <div className="bte-flow-line-text">
              SURVEY. PREPARE. BUILD. EXECUTE.
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link to="/projects" className="btn btn-primary btn-lg">
              <span>EXPLORE OUR PROJECTS</span>
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
