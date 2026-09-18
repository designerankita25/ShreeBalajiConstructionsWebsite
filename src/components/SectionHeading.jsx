import React from 'react';

/**
 * Standardized Section Heading with pill badge, bold title, and description.
 */
export default function SectionHeading({
  badge,
  title,
  highlight = '',
  subtitle,
  center = false,
  theme = 'dark',
  className = ''
}) {
  return (
    <div className={`section-header ${center ? 'center' : ''} ${className}`}>
      {badge && (
        <span className={`badge-tag ${theme === 'light' ? 'light' : ''}`}>
          {badge}
        </span>
      )}
      <h2>
        {title}{' '}
        {highlight && <span style={{ color: 'var(--accent-primary)' }}>{highlight}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
