import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight,
  FaBuilding,
  FaWrench,
  FaTools,
  FaCalendarAlt
} from 'react-icons/fa';
import { projectsData } from '../data/projects';
import Button from '../components/Button';

export default function ProjectDetails() {
  const { id } = useParams();
  const currentIndex = projectsData.findIndex(p => p.id === id);
  const project = projectsData[currentIndex];

  // Fallback if project is not found
  if (!project) {
    return (
      <div className="section-pad section-dark" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge-tag">Portfolio</span>
          <h1 style={{ marginBottom: '1.5rem', color: '#FFF' }}>Project Not Found</h1>
          <p style={{ maxWidth: '500px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}>
            The requested construction project was not found in our database.
          </p>
          <Button to="/projects" variant="primary" icon={<FaArrowLeft />}>
            Back to All Projects
          </Button>
        </div>
      </div>
    );
  }

  // Next project helper
  const nextIndex = (currentIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextIndex];

  const statusClass = project.status === 'ONGOING'
    ? 'ongoing'
    : project.status === 'COMPLETED'
    ? 'completed'
    : 'unconfirmed';

  return (
    <div className="project-details-page">
      {/* 1. PROJECT HERO */}
      <section className="project-detail-hero" aria-label="Project Hero">
        <img
          src={project.image}
          alt={project.title}
          className="project-detail-hero-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/images/machinery/soil-compactor.jpg";
          }}
        />
        <div className="project-detail-hero-overlay">
          <div className="container">
            <Link
              to="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--gold-light)',
                fontFamily: 'var(--font-heading)',
                fontWeight: '700',
                fontSize: '0.85rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}
            >
              <FaArrowLeft />
              <span>Back to All Projects</span>
            </Link>

            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '1rem', letterSpacing: '0.05em' }}>
                PROJECT {project.number}
              </span>
              <span className={`status-pill ${statusClass}`}>
                ● {project.status}
              </span>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#FFF', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-xs)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>
                {project.category}
              </span>
              {project.isMaintenance && (
                <span style={{ backgroundColor: 'rgba(197, 160, 89, 0.25)', color: 'var(--gold-light)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-xs)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', border: '1px solid var(--gold-border)' }}>
                  <FaWrench style={{ marginRight: '0.35rem' }} />
                  MAINTENANCE WORK
                </span>
              )}
            </div>

            <h1 style={{ color: '#FFF', textShadow: '0 2px 12px rgba(0,0,0,0.8)', maxWidth: '950px', fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              {project.title}
            </h1>

            {project.subtitle && (
              <div style={{ color: 'var(--gold-light)', fontSize: '1.15rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.35rem' }}>
                {project.subtitle}
              </div>
            )}

            <p style={{ color: '#EAEBED', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', fontSize: '1.05rem' }}>
              <FaMapMarkerAlt style={{ color: 'var(--gold-light)' }} />
              <span>{project.location}</span>
            </p>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION METADATA BAR (Honest, verified fields only) */}
      <section style={{ transform: 'translateY(-30px)', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="project-meta-table">
            <div>
              <div className="meta-item-label">Client / Developer</div>
              <div className="meta-item-val">{project.client || "Client name editable"}</div>
            </div>
            <div>
              <div className="meta-item-label">Project Status</div>
              <div className="meta-item-val" style={{ color: 'var(--gold-light)' }}>
                ● {project.status}
              </div>
            </div>
            <div>
              <div className="meta-item-label">Sector / Category</div>
              <div className="meta-item-val">{project.category}</div>
            </div>
            <div>
              <div className="meta-item-label">Scope Classification</div>
              <div className="meta-item-val">{project.isMaintenance ? "Facility Maintenance Work" : "Civil & Structural Execution"}</div>
            </div>
            <div>
              <div className="meta-item-label">Project Location</div>
              <div className="meta-item-val" style={{ fontSize: '0.95rem' }}>
                {project.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE PROJECT & SCOPE OF WORK */}
      <section className="section-pad section-dark" aria-label="About the Project">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            {/* Overview */}
            <div>
              <span className="badge-tag">Case Study</span>
              <h2 style={{ marginBottom: '1.25rem', color: '#FFF' }}>About the Project</h2>
              <div className="gold-divider"></div>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#EAEBED', marginBottom: '1.75rem' }}>
                {project.fullDescription}
              </p>

              <h3 style={{ fontSize: '1.25rem', color: '#FFF', marginTop: '2.5rem', marginBottom: '1rem' }}>
                Execution Highlights
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {project.highlights.map((high, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <FaCheckCircle style={{ color: 'var(--gold-light)', flexShrink: 0 }} />
                    <span style={{ color: '#E2E8F0', fontWeight: '500' }}>{high}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope of Work */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-xs)',
                padding: '2.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.75rem' }}>
                Scope of Work Executed
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.scopeOfWork.map((scope, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span
                      style={{
                        backgroundColor: 'var(--gold-soft)',
                        color: 'var(--gold-light)',
                        width: '24px',
                        height: '24px',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        marginTop: '2px',
                        flexShrink: 0
                      }}
                    >
                      0{idx + 1}
                    </span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                      {scope}
                    </span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-dark)' }}>
                <Button to="/contact" variant="primary" style={{ width: '100%' }} icon={<FaArrowRight />}>
                  Discuss Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECT GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="section-pad-sm section-dark-elevated" aria-label="Project Visual Gallery">
          <div className="container">
            <span className="badge-tag">Site Documentation</span>
            <h2 style={{ marginBottom: '2.5rem', color: '#FFF' }}>Project Gallery & Documentation</h2>

            <div className="gallery-grid">
              {project.gallery.map((imgUrl, index) => (
                <div key={index} className="gallery-thumb">
                  <img
                    src={imgUrl}
                    alt={`${project.title} photographic documentation ${index + 1}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/images/machinery/soil-compactor.jpg";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. NEXT PROJECT NAVIGATION */}
      <section className="section-pad-sm section-dark" aria-label="Next Project">
        <div className="container">
          <div style={{ border: '1px solid var(--border-dark)', backgroundColor: 'var(--bg-surface)', padding: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ color: 'var(--gold-light)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>
                Next Project Showcase ({nextProject.number})
              </div>
              <h3 style={{ color: '#FFF', marginTop: '0.25rem' }}>{nextProject.title}</h3>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {nextProject.location} • {nextProject.category}
              </div>
            </div>

            <Button to={`/projects/${nextProject.id}`} variant="primary" icon={<FaArrowRight />}>
              View Next Project ({nextProject.number}) →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
