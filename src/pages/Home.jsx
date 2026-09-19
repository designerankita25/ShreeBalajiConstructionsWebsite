import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHardHat,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaBuilding,
  FaRoad,
  FaWarehouse,
  FaIndustry,
  FaWater,
  FaShieldAlt,
  FaThLarge,
  FaTools,
  FaDraftingCompass,
  FaAngleDoubleDown
} from 'react-icons/fa';
import { companyData } from '../data/company';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import CapabilityExecutionSection from '../components/CapabilityExecutionSection';
import ExecutiveOfficeSection from '../components/ExecutiveOfficeSection';

// Icon Map for the 10 Services
const serviceIconMap = {
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

export default function Home() {
  // Curated Showcase Projects: All 7 verified projects
  const showcaseProjectIds = [
    'swan-international',
    'sanjay-engineering',
    'hi-tech-warehouse',
    'nord-industries',
    'br-logistics',
    'eera-constructive-solution',
    'rao-sher-singh-memorial-school'
  ];

  const homepageProjects = showcaseProjectIds
    .map(id => projectsData.find(p => p.id === id))
    .filter(Boolean);

  return (
    <div className="home-page">
      {/* ===================================================================
          1. HERO SECTION
          =================================================================== */}
      <section className="hero-section" aria-label="Hero Section">
        <div className="hero-background">
          <img
            src="/assets/images/machinery/soil-compactor.jpg"
            alt="Active construction warehouse site by Shree Balaji Constructions"
            className="hero-bg-img"
          />
          <div className="hero-overlay-gradient"></div>
        </div>

        <div className="container">
          <div className="hero-content-wrap">
            <div className="hero-supporting-badge">
              <FaHardHat aria-hidden="true" />
              <span>{companyData.businessType} • Farrukhnagar, Gurugram</span>
            </div>

            <div className="hero-company-name">
              {companyData.name}
            </div>

            <h1 className="hero-title">
              {companyData.tagline}
            </h1>

            <div className="hero-supporting-line">
              {companyData.supportingLine}
            </div>

            <p className="hero-description">
              {companyData.heroParagraph}
            </p>

            <div className="hero-cta-group">
              <Button to="/contact" variant="primary" size="lg" icon={<FaArrowRight />}>
                Discuss Your Project
              </Button>
              <Button to="/projects" variant="outline" size="lg">
                View Our Projects
              </Button>
            </div>

            <div className="scroll-indicator">
              <FaAngleDoubleDown style={{ color: 'var(--gold-light)' }} />
              <span>Scroll to Explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          CREDIBILITY / HIGHLIGHTS BAR
          =================================================================== */}
      <section className="credibility-bar" aria-label="Company Highlights">
        <div className="container">
          <div className="highlights-grid">
            {companyData.highlights.map(item => (
              <div key={item.id} className="highlight-card">
                <div className="highlight-title">{item.title}</div>
                <div className="highlight-subtitle">{item.subtitle}</div>
                <div className="highlight-desc">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. COMPANY INTRODUCTION
          =================================================================== */}
      <section className="section-pad section-dark" aria-label="Company Introduction">
        <div className="container">
          <div className="intro-grid">
            <div>
              <span className="badge-tag">Company Profile</span>
              <h2 style={{ marginBottom: '1rem', color: '#FFF' }}>
                Built on Experience.<br />
                <span style={{ color: 'var(--gold-light)' }}>Delivered with Precision.</span>
              </h2>

              <div className="gold-divider"></div>

              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#EAEBED', marginBottom: '1.25rem' }}>
                {companyData.about.lead}
              </p>

              <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: '1.7' }}>
                {companyData.about.story}
              </p>

              <div className="intro-service-tags">
                <span className="intro-tag-pill">Industrial Warehouses</span>
                <span className="intro-tag-pill">Hotel & Resort Projects</span>
                <span className="intro-tag-pill">Institutional Campuses</span>
                <span className="intro-tag-pill">Manufacturing Plants</span>
                <span className="intro-tag-pill">Heavy Roadwork</span>
                <span className="intro-tag-pill">Civil Maintenance</span>
                <span className="intro-tag-pill">Pavement Concrete (PQC)</span>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Button to="/about" variant="secondary" icon={<FaArrowRight />}>
                  About Us
                </Button>
              </div>
            </div>

            <div className="intro-image-frame">
              <img
                src="/assets/images/machinery/slm-flori-mixer.jpg"
                alt="SLM Flori 4 cubic self loading mixer deployed on active construction site"
                loading="lazy"
              />
              <div className="intro-badge-overlay">
                <div>
                  <div style={{ color: 'var(--gold-light)', fontWeight: '800', fontSize: '1.1rem', textTransform: 'uppercase' }}>
                    Farrukhnagar, Gurugram
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    Active Site Execution Across Haryana & NCR
                  </div>
                </div>
                <div style={{ borderLeft: '1px solid var(--border-dark)', paddingLeft: '1rem', textAlign: 'right' }}>
                  <div style={{ color: '#FFF', fontWeight: '800', fontSize: '1.1rem' }}>EST. 2018</div>
                  <div style={{ color: 'var(--gold-light)', fontSize: '0.75rem' }}>CIVIL CONTRACTOR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. REAL EXECUTIVE OFFICE: "BUILT AROUND TRUST & EXECUTION"
          =================================================================== */}
      <ExecutiveOfficeSection />

      {/* ===================================================================
          4. SERVICES (WHAT WE BUILD)
          =================================================================== */}
      <section className="section-pad section-dark-elevated" aria-label="Services What We Build">
        <div className="container">
          <SectionHeading
            badge="Comprehensive Contracting"
            title="What We"
            highlight="Build"
            subtitle="From wide-span logistics warehouses and factory infrastructure to heavy civil roadwork and hospitality developments, we execute every phase with engineering discipline."
            center
          />

          <div className="services-grid-10">
            {servicesData.map((service) => {
              const IconComp = serviceIconMap[service.iconName] || FaHardHat;
              return (
                <article key={service.id} className="service-card-lux">
                  <div className="service-num-bar">
                    <span className="service-num">{service.number}</span>
                    <div className="service-icon-wrap">
                      <IconComp />
                    </div>
                  </div>

                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.shortDescription}</p>

                  <Link
                    to="/services"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--gold-light)',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    <span>Capabilities</span>
                    <FaArrowRight style={{ fontSize: '0.75rem' }} />
                  </Link>
                </article>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Button to="/services" variant="outline-gold" size="lg" icon={<FaArrowRight />}>
              View All 10 Services & Technical Capabilities
            </Button>
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. SELECTED PROJECTS (IMAGE-FIRST VISUAL SHOWCASE)
          =================================================================== */}
      <section className="section-pad section-dark" aria-label="Selected Projects Portfolio">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span className="badge-tag">IMAGE-FIRST PORTFOLIO</span>
              <h2 style={{ color: '#FFF' }}>
                SELECTED <span style={{ color: 'var(--gold-light)' }}>PROJECTS</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.4rem', fontSize: '1rem', maxWidth: '650px' }}>
                Real construction projects, wide-span logistics warehouses, and industrial infrastructure executed with engineering precision across Haryana, NCR, and Rajasthan.
              </p>
            </div>
            <Button to="/projects" variant="secondary" icon={<FaArrowRight />}>
              View All Projects ({projectsData.length})
            </Button>
          </div>

          {/* Large Visual Projects Grid */}
          <div className="projects-pair-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {homepageProjects.map(proj => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Button to="/projects" variant="primary" size="lg" icon={<FaArrowRight />}>
              Explore Full Portfolio ({projectsData.length} Projects)
            </Button>
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. "BUILT TO EXECUTE" — INTERACTIVE CAPABILITY & SITE RESOURCES
          =================================================================== */}
      <CapabilityExecutionSection />

      {/* ===================================================================
          7. WHY SHREE BALAJI CONSTRUCTIONS
          =================================================================== */}
      <section className="section-pad section-dark-elevated" aria-label="Why Shree Balaji">
        <div className="container">
          <SectionHeading
            badge="The SBC Standard"
            title="Why Shree Balaji"
            highlight="Constructions"
            subtitle="We prioritize disciplined project execution, uncompromising quality standards, and transparent client communication across every project."
            center
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {companyData.whyChooseUs.map(item => (
              <div
                key={item.number}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-dark)',
                  padding: '2.25rem 2rem',
                  borderTop: '2px solid var(--gold-primary)'
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '900', color: 'var(--gold-light)', marginBottom: '0.75rem' }}>
                  {item.number}
                </div>
                <h4 style={{ color: '#FFF', fontSize: '1.15rem', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          8. OUR APPROACH / PROCESS (7 PHASES)
          =================================================================== */}
      <section className="section-pad section-dark" aria-label="Construction Process">
        <div className="container">
          <SectionHeading
            badge="Systematic Methodology"
            title="Our Seven-Phase"
            highlight="Execution Process"
            subtitle="A transparent, disciplined construction sequence from initial consultation through design, fabrication, active execution, and final handover."
            center
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {companyData.process.map(step => (
              <div
                key={step.step}
                style={{
                  backgroundColor: 'var(--bg-main)',
                  border: '1px solid var(--border-dark)',
                  padding: '2rem 1.5rem',
                  position: 'relative'
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '900', color: 'var(--gold-light)', marginBottom: '0.75rem' }}>
                  {step.step}
                </div>
                <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          9. ABOUT / MISSION / VISION
          =================================================================== */}
      <section className="section-pad section-dark-elevated" aria-label="Mission Vision and Values">
        <div className="container">
          {/* Vision Typography Feature */}
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem' }}>
            <span className="badge-tag">Company Vision</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#FFF', letterSpacing: '-0.02em', margin: '1rem 0' }}>
              "{companyData.about.vision}"
            </h2>
            <div className="gold-divider center"></div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              {companyData.about.mission}
            </p>
          </div>

          {/* 6 Core Values */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {companyData.about.values.map(val => (
              <div
                key={val.number}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-dark)',
                  padding: '2rem',
                  borderLeft: '2px solid var(--gold-primary)'
                }}
              >
                <div style={{ color: 'var(--gold-light)', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  VALUE {val.number}
                </div>
                <h4 style={{ color: '#FFF', fontSize: '1.15rem', marginBottom: '0.5rem' }}>{val.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          10. FOLLOW THE BUILD — INSTAGRAM
          =================================================================== */}
      <section className="section-pad-sm section-dark" aria-label="Instagram Showcase">
        <div className="container">
          <div className="instagram-showcase-bar">
            <span className="badge-tag">Site Updates & Field Operations</span>
            <h2 style={{ color: '#FFF' }}>Follow the Build.</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', marginTop: '0.5rem' }}>
              Follow our latest construction work, site activity, equipment deployment and active project progress.
            </p>

            <div className="instagram-handle-large">
              <FaInstagram style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
              <span>{companyData.socials.instagram.handle}</span>
            </div>

            <a
              href={companyData.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <span>View Instagram</span>
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================================
          11. CONTACT CTA
          =================================================================== */}
      <section className="section-pad section-dark-elevated" aria-label="Contact Call to Action">
        <div className="container">
          <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--gold-border)', padding: 'clamp(3rem, 6vw, 5rem)', borderRadius: 'var(--radius-xs)', textAlign: 'center' }}>
            <span className="badge-tag">Let's Connect</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#FFF', marginBottom: '1rem' }}>
              Let's Build Something That Lasts.
            </h2>
            <p style={{ maxWidth: '680px', margin: '0 auto 2.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.75' }}>
              Have a construction or civil engineering project in mind? Contact Krishan Yadav and Ashok Yadav to discuss site requirements, scheduling, and estimates.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href={`tel:${companyData.contact.primaryPhone.replace(/[^0-9+]/g, '')}`} className="btn btn-primary btn-lg">
                <FaPhoneAlt />
                <span>Call Us: {companyData.contact.primaryPhone}</span>
              </a>
              <a href={`mailto:${companyData.contact.email}`} className="btn btn-secondary btn-lg">
                <FaEnvelope />
                <span>Email Us</span>
              </a>
              <Button to="/contact" variant="outline" size="lg">
                Discuss Your Project
              </Button>
            </div>

            <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <span>Location: Farrukhnagar, Gurugram, Haryana</span>
              <span>GST: {companyData.gstNumber}</span>
              <span>Email: {companyData.contact.email}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
