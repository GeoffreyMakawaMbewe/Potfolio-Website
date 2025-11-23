import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a fourth-year Education Computer Science student at the <strong>University of Malawi (UNIMA)</strong>.
              I am a super determined software developer, absorbed in creating full-fledged Web and Mobile Applications.
            </p>
            <p>
              My passion lies in building scalable solutions using the <strong>Spring Cloud Ecosystem</strong> and modern frontend technologies.
            </p>
          </div>
          <div className="skills-container">
            <h3>Tech Stack</h3>
            <div className="skills-grid">
              <span className="skill-item">Java</span>
              <span className="skill-item">Spring Boot</span>
              <span className="skill-item">React</span>
              <span className="skill-item">Kotlin</span>
              <span className="skill-item">TypeScript</span>
              <span className="skill-item">AWS</span>
              <span className="skill-item">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
