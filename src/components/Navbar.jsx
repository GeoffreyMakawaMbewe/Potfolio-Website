import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="logo">Geoffrey.</a>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="nav-links">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
          <a href="#contact" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Contact Me</a>
          
          {/* Mobile Theme Toggle */}
          <div className="mobile-toggle-wrapper">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>

        <div className="desktop-toggle-wrapper">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
