import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBuilding,
  FaRoad,
  FaIndustry,
  FaHome,
  FaTools,
  FaDraftingCompass,
  FaHardHat,
  FaArrowRight
} from 'react-icons/fa';

// Map icon names from data file to React components
const iconMap = {
  FaBuilding: FaBuilding,
  FaRoad: FaRoad,
  FaIndustry: FaIndustry,
  FaHome: FaHome,
  FaTools: FaTools,
  FaDraftingCompass: FaDraftingCompass
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.iconName] || FaHardHat;

  return (
    <div className="service-card">
      <div className="service-icon-box" aria-hidden="true">
        <IconComponent />
      </div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-desc">{service.shortDescription}</p>
      <Link to="/services" className="service-card-link" aria-label={`Learn more about ${service.title}`}>
        <span>Learn More & Capabilities</span>
        <FaArrowRight />
      </Link>
    </div>
  );
}
