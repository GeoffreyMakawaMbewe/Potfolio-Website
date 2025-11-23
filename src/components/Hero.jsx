import React, { useState, useEffect } from 'react';
import './Hero.css';
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [hero1, hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="hero" className="hero section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="animate-fade-in">Hi, I'm <span className="gradient-text">Geoffrey Makawa</span></span>
            <br />
            <span className="animate-typing">Full Stack Developer.</span>
          </h1>
          <p className="hero-subtitle">
            A super determined software developer, absorbed in creating full-fledged Web and Mobile Applications.
            Specializing in the Spring Cloud Ecosystem and React.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
            <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="btn btn-resume">
              View Resume
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          {images.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`Geoffrey Makawa ${index + 1}`} 
              className={`hero-image ${index === currentImage ? 'active' : ''}`}
            />
          ))}
          <div className="hero-glow"></div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="hero-grid"></div>
      </div>

      <a href="#about" className="scroll-down">
        <span className="mouse">
          <span className="wheel"></span>
        </span>
        <span className="arrow"></span>
      </a>
    </section>
  );
};

export default Hero;
