import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaArrowRight, FaCamera } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  const statusClass = project.status === 'ONGOING'
    ? 'ongoing'
    : project.status === 'COMPLETED'
    ? 'completed'
    : 'unconfirmed';

  // If the project has an authentic photograph (e.g. EERA CONSTRUCTIVE SOLUTION)
  if (project.image) {
    return (
      <article
        className="project-visual-card"
        style={{
          position: 'relative',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-dark)',
          borderRadius: 'var(--radius-xs)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transition: 'border-color 0.3s ease, transform 0.3s ease'
        }}
      >
        <Link
          to={`/projects/${project.id}`}
          style={{ display: 'block', position: 'relative', height: '100%', textDecoration: 'none', color: 'inherit' }}
          className="group"
        >
          {/* Large Visual Image Area */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '320px',
              overflow: 'hidden',
              backgroundColor: '#0B0C0E'
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="card-img-zoom"
              loading="lazy"
            />
            {/* Gradient Scrim */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(11, 12, 14, 0.95) 0%, rgba(11, 12, 14, 0.4) 50%, rgba(11, 12, 14, 0.1) 100%)'
              }}
            />

            {/* Top Badges */}
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                right: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: '900',
                  color: 'var(--gold-light)',
                  backgroundColor: 'rgba(11, 12, 14, 0.85)',
                  border: '1px solid var(--gold-border)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '2px',
                  letterSpacing: '0.08em'
                }}
              >
                {project.number}
              </span>

              <span className={`status-pill ${statusClass}`} style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                ● {project.status}
              </span>
            </div>

            {/* Minimal Bottom Info (Section 7 Spec) */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem'
              }}
            >
              <div
                style={{
                  color: 'var(--gold-light)',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <FaMapMarkerAlt style={{ fontSize: '0.7rem' }} />
                <span>{project.location}</span>
                <span style={{ color: 'var(--text-muted)' }}>•</span>
                <span>{project.category}</span>
              </div>

              <h3
                style={{
                  color: '#FFF',
                  fontSize: '1.35rem',
                  fontWeight: '800',
                  margin: 0,
                  letterSpacing: '-0.01em'
                }}
              >
                {project.title}
              </h3>

              <div
                style={{
                  marginTop: '0.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--gold-light)',
                  fontSize: '0.85rem',
                  fontWeight: '800',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase'
                }}
              >
                <span>View Project</span>
                <FaArrowRight style={{ fontSize: '0.75rem', transition: 'transform 0.2s ease' }} />
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  // Architectural Minimal Card for projects awaiting final photography
  return (
    <article
      className="project-card-arch no-front-image"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderTop: '2px solid var(--gold-primary)'
      }}
    >
      {/* Top Header Bar: Number + Status + Category */}
      <div className="project-card-top-bar">
        <span className="project-card-num">{project.number}</span>
        
        <div className="project-card-badges">
          <span className={`status-pill ${statusClass}`}>
            ● {project.status}
          </span>
          <span className="project-category-badge">
            {project.category}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="project-card-main">
        <div className="project-location-bar">
          <FaMapMarkerAlt className="location-icon" />
          <span>{project.location}</span>
        </div>

        <h3 className="project-card-title">
          {project.title}
        </h3>

        {project.subtitle && (
          <div className="project-card-subtitle">
            {project.subtitle}
          </div>
        )}

        <p className="project-card-desc">
          {project.shortDescription}
        </p>

        {/* Documentation slot note */}
        <div
          style={{
            marginTop: '1.25rem',
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--bg-main)',
            border: '1px dashed var(--border-dark)',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem'
          }}
        >
          <FaCamera style={{ color: 'var(--gold-light)', fontSize: '0.8rem', flexShrink: 0 }} />
          <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
            Site documentation photo series awaiting field upload
          </span>
        </div>
      </div>

      {/* Footer Link */}
      <div className="project-card-footer">
        <Link
          to={`/projects/${project.id}`}
          className="project-detail-link"
        >
          <span>View Project</span>
          <FaArrowRight className="arrow-icon" />
        </Link>
      </div>
    </article>
  );
}
