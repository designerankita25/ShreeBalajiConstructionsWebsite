import React from 'react';

/**
 * Reusable Credibility Stat Card
 */
export default function StatCard({ number, label, detail }) {
  return (
    <div className="stat-card">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
      {detail && <div className="stat-detail">{detail}</div>}
    </div>
  );
}
