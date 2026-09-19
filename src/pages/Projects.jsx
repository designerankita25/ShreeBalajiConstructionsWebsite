import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData, projectFilterCategories } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { FaArrowRight, FaFilter, FaMapMarkerAlt, FaCheckCircle, FaCamera } from 'react-icons/fa';

export default function Projects() {
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Multi-tier filtering: Status and Category
  const filteredProjects = projectsData.filter(project => {
    const matchesStatus =
      filterStatus === "ALL" || project.status === filterStatus;

    const matchesCategory =
      selectedCategory === "ALL" ||
      (selectedCategory === "HOTEL & RESORT" && (project.category.toLowerCase().includes("hotel") || project.category.toLowerCase().includes("resort"))) ||
      (selectedCategory === "INDUSTRIAL" && project.category.toLowerCase().includes("industrial")) ||
      (selectedCategory === "WAREHOUSE" && project.category.toLowerCase().includes("warehouse")) ||
      (selectedCategory === "COMMERCIAL" && project.category.toLowerCase().includes("commercial")) ||
      (selectedCategory === "INSTITUTIONAL" && project.category.toLowerCase().includes("institutional")) ||
      (selectedCategory === "MAINTENANCE" && (project.category.toLowerCase().includes("maintenance") || project.isMaintenance));

    return matchesStatus && matchesCategory;
  });

  // Preserve the exact client-specified project sequence (01 to 11)
  const sortedProjects = filteredProjects;

  return (
    <div className="projects-page">
      {/* 1. PAGE HERO */}
      <section className="page-hero" aria-label="Projects Hero">
        <div className="container">
          <span className="badge-tag">Portfolio & Execution Track Record</span>
          <h1 className="page-hero-title">
            Our Project <span>Experience</span>
          </h1>
          <p className="page-hero-subtitle">
            From industrial and commercial facilities to institutional, hospitality and maintenance work, our project experience reflects a diverse range of construction requirements across Haryana, NCR, and Rajasthan.
          </p>
        </div>
      </section>

      {/* 2. PORTFOLIO & FILTER SECTION */}
      <section className="section-pad section-dark" aria-label="Projects List">
        <div className="container">
          {/* Dual Filter Controls Bar */}
          <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-dark)', padding: '1.5rem', borderRadius: 'var(--radius-xs)', marginBottom: '2.5rem' }}>
            {/* Status Filters */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-dark)' }}>
              <span style={{ color: 'var(--gold-light)', fontSize: '0.78rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', marginRight: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <FaFilter style={{ fontSize: '0.7rem' }} /> Status:
              </span>
              <button
                type="button"
                className={`btn btn-sm ${filterStatus === 'ALL' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilterStatus('ALL')}
              >
                All Statuses
              </button>
              <button
                type="button"
                className={`btn btn-sm ${filterStatus === 'ONGOING' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilterStatus('ONGOING')}
              >
                ● Ongoing ({projectsData.filter(p => p.status === 'ONGOING').length})
              </button>
              <button
                type="button"
                className={`btn btn-sm ${filterStatus === 'COMPLETED' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilterStatus('COMPLETED')}
              >
                ● Completed ({projectsData.filter(p => p.status === 'COMPLETED').length})
              </button>
            </div>

            {/* Category Filters */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--gold-light)', fontSize: '0.78rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', marginRight: '0.5rem' }}>
                Sector:
              </span>
              {projectFilterCategories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    backgroundColor: selectedCategory === cat.id ? 'var(--gold-primary)' : 'var(--bg-main)',
                    color: selectedCategory === cat.id ? '#0B0C0E' : '#CBD5E1',
                    border: '1px solid',
                    borderColor: selectedCategory === cat.id ? 'var(--gold-primary)' : 'var(--border-dark)',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Showing <strong style={{ color: '#FFF' }}>{filteredProjects.length}</strong> of <strong style={{ color: 'var(--gold-light)' }}>{projectsData.length}</strong> verified projects
            </div>

            {(filterStatus !== 'ALL' || selectedCategory !== 'ALL') && (
              <button
                type="button"
                onClick={() => { setFilterStatus('ALL'); setSelectedCategory('ALL'); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--gold-light)',
                  fontSize: '0.82rem',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Architectural Editorial Showcase (80% Visual / 20% Text) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5.5rem' }}>
            {sortedProjects.map((project) => {
              const statusClass = project.status === 'ONGOING'
                ? 'ongoing'
                : project.status === 'COMPLETED'
                ? 'completed'
                : 'unconfirmed';

              const hasImages = project.gallery && project.gallery.length > 0;
              const heroImg = hasImages ? (typeof project.gallery[0] === 'string' ? project.gallery[0] : project.gallery[0].url) : null;
              const heroTitle = hasImages ? (typeof project.gallery[0] === 'object' && project.gallery[0].title ? project.gallery[0].title : project.title) : project.title;

              const supportingImgs = hasImages ? project.gallery.slice(1, 3) : [];
              const wideImg = hasImages && project.gallery.length >= 4 ? project.gallery[3] : null;

              return (
                <article
                  key={project.id}
                  id={project.id}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-dark)',
                    borderRadius: 'var(--radius-xs)',
                    overflow: 'hidden',
                    borderTop: '2px solid var(--gold-primary)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {/* Editorial Header Bar */}
                  <div
                    style={{
                      padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                      borderBottom: '1px solid var(--border-dark)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '1.5rem',
                      backgroundColor: 'var(--bg-surface-elevated)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                            fontWeight: '900',
                            color: 'var(--gold-light)',
                            letterSpacing: '0.04em'
                          }}
                        >
                          {project.number}
                        </span>
                        <div style={{ height: '24px', width: '1px', backgroundColor: 'var(--border-dark)' }} />
                        <span className={`status-pill ${statusClass}`}>
                          ● {project.status}
                        </span>
                        <span
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                            color: '#E2E8F0',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '2px',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
                          }}
                        >
                          {project.category}
                        </span>
                      </div>

                      <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#FFF', letterSpacing: '-0.01em', margin: '0.25rem 0' }}>
                        {project.title}
                      </h2>

                      {project.subtitle && (
                        <div style={{ color: 'var(--gold-light)', fontSize: '0.95rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                          {project.subtitle}
                        </div>
                      )}

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        <FaMapMarkerAlt style={{ color: 'var(--gold-light)' }} />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    <Link
                      to={`/projects/${project.id}`}
                      className="btn btn-secondary"
                      style={{ alignSelf: 'center' }}
                    >
                      <span>Project Details</span>
                      <FaArrowRight style={{ fontSize: '0.75rem' }} />
                    </Link>
                  </div>

                  {/* Editorial Visual Layout */}
                  {hasImages ? (
                    <div style={{ padding: 'clamp(1rem, 2vw, 1.75rem)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      {/* 1. Large Hero Image */}
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: 'clamp(340px, 48vw, 540px)',
                          borderRadius: '2px',
                          overflow: 'hidden',
                          backgroundColor: '#0B0C0E'
                        }}
                      >
                        <img
                          src={heroImg}
                          alt={heroTitle}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                          className="card-img-zoom"
                          loading="lazy"
                        />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(11, 12, 14, 0.9) 0%, rgba(11, 12, 14, 0.2) 60%, transparent 100%)'
                          }}
                        />
                        <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                          <div>
                            <span style={{ color: 'var(--gold-light)', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                              PRIMARY SITE VIEW • {project.title}
                            </span>
                            <h3 style={{ color: '#FFF', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: '700', marginTop: '0.2rem' }}>
                              {heroTitle}
                            </h3>
                          </div>
                          <span
                            style={{
                              backgroundColor: 'rgba(11, 12, 14, 0.85)',
                              border: '1px solid var(--gold-border)',
                              padding: '0.35rem 0.75rem',
                              borderRadius: '2px',
                              fontSize: '0.72rem',
                              color: 'var(--gold-light)',
                              fontWeight: '700',
                              letterSpacing: '0.06em',
                              textTransform: 'uppercase'
                            }}
                          >
                            ● AUTHENTIC PHOTO
                          </span>
                        </div>
                      </div>

                      {/* 2. Supporting 2-Image Grid */}
                      {supportingImgs.length > 0 && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
                          {supportingImgs.map((imgItem, idx) => {
                            const imgUrl = typeof imgItem === 'string' ? imgItem : imgItem.url;
                            const title = typeof imgItem === 'object' && imgItem.title ? imgItem.title : `Execution Perspective ${idx + 1}`;
                            const caption = typeof imgItem === 'object' && imgItem.caption ? imgItem.caption : null;

                            return (
                              <div
                                key={idx}
                                style={{
                                  backgroundColor: 'var(--bg-main)',
                                  border: '1px solid var(--border-dark)',
                                  borderRadius: '2px',
                                  overflow: 'hidden'
                                }}
                              >
                                <div style={{ height: 'clamp(260px, 32vw, 380px)', overflow: 'hidden', position: 'relative' }}>
                                  <img
                                    src={imgUrl}
                                    alt={title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    className="card-img-zoom"
                                    loading="lazy"
                                  />
                                </div>
                                <div style={{ padding: '1rem 1.25rem' }}>
                                  <h4 style={{ color: '#FFF', fontSize: '1rem', fontWeight: '700', marginBottom: caption ? '0.25rem' : 0 }}>
                                    {title}
                                  </h4>
                                  {caption && (
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                                      {caption}
                                    </p>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* 3. Wide Feature Shot (e.g. 4th photo) */}
                      {wideImg && (
                        <div
                          style={{
                            backgroundColor: 'var(--bg-main)',
                            border: '1px solid var(--border-dark)',
                            borderRadius: '2px',
                            overflow: 'hidden'
                          }}
                        >
                          <div style={{ height: 'clamp(300px, 38vw, 460px)', overflow: 'hidden', position: 'relative' }}>
                            <img
                              src={typeof wideImg === 'string' ? wideImg : wideImg.url}
                              alt={typeof wideImg === 'object' && wideImg.title ? wideImg.title : 'Feature Execution View'}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                              className="card-img-zoom"
                              loading="lazy"
                            />
                          </div>
                          <div style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                              <h4 style={{ color: '#FFF', fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>
                                {typeof wideImg === 'object' && wideImg.title ? wideImg.title : 'Structural Execution View'}
                              </h4>
                              {typeof wideImg === 'object' && wideImg.caption && (
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '0.25rem 0 0' }}>
                                  {wideImg.caption}
                                </p>
                              )}
                            </div>
                            <span style={{ color: 'var(--gold-light)', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                              STRUCTURAL COMPLETION
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Photo-Ready Architectural Frame for Projects Awaiting Upload */
                    <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                      <div
                        style={{
                          backgroundColor: 'var(--bg-main)',
                          border: '1px dashed rgba(197, 160, 89, 0.4)',
                          borderRadius: '2px',
                          padding: 'clamp(2rem, 4vw, 3.5rem)',
                          textAlign: 'center',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--gold-soft)',
                            color: 'var(--gold-light)',
                            fontSize: '1.5rem',
                            marginBottom: '1rem'
                          }}
                        >
                          <FaCamera />
                        </div>

                        <h3 style={{ color: '#FFF', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                          Site Documentation Photographic Series
                        </h3>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 1.5rem', fontSize: '0.92rem' }}>
                          Verified project record. Field photographs are scheduled to be displayed here:
                        </p>

                        {/* Planned Photo Perspectives */}
                        {project.photoGuide && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', justifyContent: 'center', maxWidth: '720px', margin: '0 auto' }}>
                            {project.photoGuide.map((item, pIdx) => (
                              <span
                                key={pIdx}
                                style={{
                                  backgroundColor: 'var(--bg-surface)',
                                  border: '1px solid var(--border-dark)',
                                  color: 'var(--gold-light)',
                                  fontSize: '0.8rem',
                                  padding: '0.35rem 0.85rem',
                                  borderRadius: '2px',
                                  fontWeight: '600'
                                }}
                              >
                                • {item}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Concise Narrative Block (20% Text) */}
                  <div
                    style={{
                      padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                      borderTop: '1px solid var(--border-dark)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '2.5rem',
                      alignItems: 'center',
                      backgroundColor: 'var(--bg-surface)'
                    }}
                  >
                    <div>
                      <span style={{ color: 'var(--gold-light)', fontSize: '0.78rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        PROJECT SCOPE & EXECUTION
                      </span>
                      <p style={{ color: '#E2E8F0', fontSize: '0.98rem', lineHeight: '1.75', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
                        {project.shortDescription}
                      </p>

                      {project.highlights && project.highlights.length > 0 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {project.highlights.slice(0, 2).map((hl, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                              <FaCheckCircle style={{ color: 'var(--gold-light)', fontSize: '0.85rem', flexShrink: 0 }} />
                              <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{hl}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-dark)', padding: '1.25rem 1.5rem', borderRadius: '2px', width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Client Engagement:</span>
                          <span style={{ color: '#FFF', fontSize: '0.85rem', fontWeight: '700' }}>{project.client}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Status Classification:</span>
                          <span style={{ color: 'var(--gold-light)', fontSize: '0.85rem', fontWeight: '700' }}>{project.status}</span>
                        </div>
                      </div>

                      <Button to={`/projects/${project.id}`} variant="primary" icon={<FaArrowRight />} style={{ width: '100%' }}>
                        Explore Full Project Case Study
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '5rem 1rem', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-dark)', borderRadius: '2px' }}>
              <h3 style={{ color: '#FFF', marginBottom: '0.75rem' }}>No projects found for selected filters.</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Try resetting your status or sector filter to view other verified projects.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => { setFilterStatus('ALL'); setSelectedCategory('ALL'); }}
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="section-pad-sm" aria-label="Call to Action">
        <div className="container">
          <div className="instagram-showcase-bar">
            <span className="badge-tag">Your Vision Realized</span>
            <h2 style={{ color: '#FFF', marginBottom: '1rem' }}>Have a Construction Project in Mind?</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '650px', marginBottom: '2rem' }}>
              Partner with a reliable civil contractor and engineering team with verified site experience across Haryana, the National Capital Region, and Rajasthan.
            </p>
            <Button to="/contact" variant="primary" size="lg" icon={<FaArrowRight />}>
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
