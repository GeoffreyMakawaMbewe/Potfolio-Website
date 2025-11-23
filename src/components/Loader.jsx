import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <div className="loader-logo">
          <div className="logo-circle">
            <span className="logo-text">GM</span>
          </div>
          <div className="loader-ring"></div>
          <div className="loader-ring-2"></div>
        </div>
        <h2 className="loader-title">Geoffrey Makawa</h2>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
        <p className="loader-subtitle">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default Loader;
