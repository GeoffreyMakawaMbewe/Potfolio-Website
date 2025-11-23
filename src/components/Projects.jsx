import React from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Melodify - Android Music Player",
    description: "Modern Android music player built with Jetpack Compose and Material Design 3. Features local media playback, playlist management, audio visualization, and a beautiful Material You interface with dynamic theming.",
    image: "/project-placeholder-1.jpg",
    tags: ["Kotlin", "Jetpack Compose", "Material Design 3", "Android", "MVVM", "Media3"],
    demoLink: "/melodify.apk", // APK download
    githubLink: "#", // Add your GitHub repo link
    impact: "Built with modern Android best practices"
  },
  {
    id: 2,
    title: "Exponent Tech",
    description: "A comprehensive full-stack software solution showcasing enterprise-level architecture with microservices, cloud deployment, and modern frontend. Built to handle high-traffic scenarios with scalability in mind.",
    image: "/project-placeholder-2.jpg",
    tags: ["Java", "Spring Boot", "React", "AWS", "Kotlin", "Microservices"],
    demoLink: "#", // User to add actual link
    githubLink: "#", // User to add actual link
    impact: "Improved system performance by 40%"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern, fully responsive portfolio website built with React and Vanilla CSS. Features dark/light theme toggle, smooth animations, email integration, and neon-styled UI components.",
    image: "/project-placeholder-3.jpg",
    tags: ["React", "Vite", "CSS", "EmailJS", "Responsive Design"],
    demoLink: "#",
    githubLink: "#",
    impact: "100% responsive across all devices"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-placeholder">
                <div className="project-image-overlay">
                  <div className="project-links-overlay">
                    {project.demoLink !== "#" && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="overlay-link">
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubLink !== "#" && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="overlay-link">
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.impact && (
                  <div className="project-impact">
                    <span className="impact-badge">📈 {project.impact}</span>
                  </div>
                )}
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.demoLink !== "#" && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-project btn-demo">
                      Live Demo →
                    </a>
                  )}
                  {project.githubLink !== "#" && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-project btn-code">
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
