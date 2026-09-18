import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button component supporting internal routing, external links,
 * and standard button clicks.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon = null,
  type = 'button',
  disabled = false,
  ...props
}) {
  const variantClass = `btn-${variant}`;
  const sizeClass = size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '';
  const combinedClasses = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </>
  );

  // If internal router link
  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  // If external web link
  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Standard interactive button
  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
