import React, { useState } from 'react';
import { projectsData, projectFilterCategories } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { FaArrowRight, FaFilter } from 'react-icons/fa';

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

  // Explicitly guarantee that ONGOING projects always come before COMPLETED projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.status === 'ONGOING' && b.status !== 'ONGOING') return -1;
    if (a.status !== 'ONGOING' && b.status === 'ONGOING') return 1;
    return 0;
  });

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

          {/* Architectural Typographic Grid (NO FRONT COVER IMAGES) */}
          <div className="projects-pair-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
            {sortedProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
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
