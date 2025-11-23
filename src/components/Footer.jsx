import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-gradient-border"></div>
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Geoffrey.</h3>
            <p>Building digital experiences that matter.</p>
          </div>
          
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/GeoffreyMakawaMbewe" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/geoffrey-makawa-14100b2a4/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://www.facebook.com/geoffrey.auspicious" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
              <a href="https://wa.me/265881337853" target="_blank" rel="noopener noreferrer" className="social-link">WhatsApp</a>
              <a href="tel:+265992877820" className="social-link">Call Me</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Geoffrey Makawa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
