import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaArrowRight, FaWrench, FaCheck } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  const statusClass = project.status === 'ONGOING'
    ? 'ongoing'
    : project.status === 'COMPLETED'
    ? 'completed'
    : 'unconfirmed';

  return (
    <article className="project-card-arch no-front-image">
      {/* Top Header Bar: Number + Status + Category */}
      <div className="project-card-top-bar">
        <span className="project-card-num">{project.number}</span>
        
        <div className="project-card-badges">
          <span className={`status-pill ${statusClass}`}>
            ● {project.status}
          </span>
          <span className="project-category-badge">
            {project.isMaintenance ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <FaWrench style={{ fontSize: '0.65rem', color: 'var(--gold-light)' }} />
                MAINTENANCE WORK
              </span>
            ) : (
              project.category
            )}
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

        {/* Highlights Preview */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="project-card-highlights">
            {project.highlights.slice(0, 2).map((hl, idx) => (
              <li key={idx}>
                <FaCheck className="check-bullet" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer Link */}
      <div className="project-card-footer">
        <Link
          to={`/projects/${project.id}`}
          className="project-detail-link"
        >
          <span>Explore Project Details</span>
          <FaArrowRight className="arrow-icon" />
        </Link>
      </div>
    </article>
  );
}
