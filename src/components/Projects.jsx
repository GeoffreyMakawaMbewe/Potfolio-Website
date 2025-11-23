import React, { useState } from 'react';
import './Projects.css';
import Modal from './Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const projectsData = [
  {
    id: 1,
    title: "Melodify - Android Music Player",
    description: "Modern Android music player built with Jetpack Compose and Material Design 3. Features local media playback, playlist management, audio visualization, and a beautiful Material You interface with dynamic theming.",
    image: "/project-placeholder-1.jpg",
    tags: ["Kotlin", "Jetpack Compose", "Material Design 3", "Android", "MVVM", "Media3"],
    category: "Android",
    demoLink: "/melodify.apk",
    githubLink: "#",
    impact: "Built with modern Android best practices"
  },
  {
    id: 2,
    title: "Exponent Tech",
    description: "A comprehensive full-stack software solution showcasing enterprise-level architecture with microservices, cloud deployment, and modern frontend. Built to handle high-traffic scenarios with scalability in mind.",
    image: "/project-placeholder-2.jpg",
    tags: ["Java", "Spring Boot", "React", "AWS", "Kotlin", "Microservices"],
    category: "Full‑Stack",
    demoLink: "#",
    githubLink: "#",
    impact: "Improved system performance by 40%"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern, fully responsive portfolio website built with React and Vanilla CSS. Features dark/light theme toggle, smooth animations, email integration, and neon‑styled UI components.",
    image: "/project-placeholder-3.jpg",
    tags: ["React", "Vite", "CSS", "EmailJS", "Responsive Design"],
    category: "Web",
    demoLink: "#",
    githubLink: "#",
    impact: "100% responsive across all devices"
  }
];

const categories = ["All", "Android", "Full‑Stack", "Web"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const handleOpenModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        {/* Category filter buttons */}
        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Swiper carousel */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="projects-swiper"
        >
          {filteredProjects.map(project => (
            <SwiperSlide key={project.id}>
              <div className="project-card">
                <div className="project-image-placeholder">
                  <div className="project-image-overlay">
                    <div className="project-links-overlay">
                      {project.demoLink !== "#" && (
                        <button onClick={() => handleOpenModal(project)} className="overlay-link">Live Demo</button>
                      )}
                      {project.githubLink !== "#" && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="overlay-link">View Code</a>
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
                      <button onClick={() => handleOpenModal(project)} className="btn-project btn-demo">Live Demo →</button>
                    )}
                    {project.githubLink !== "#" && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-project btn-code">View Code</a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Live Demo Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={currentProject?.title || "Live Demo"}
        content={
          <div className="demo-content">
            {currentProject?.demoLink && currentProject.demoLink.endsWith('.apk') ? (
              <div className="apk-download-container">
                <p>This is an Android application. You can download the APK below:</p>
                <a href={currentProject.demoLink} className="btn-project btn-demo" download>Download APK</a>
              </div>
            ) : (
              <iframe
                src={currentProject?.demoLink}
                title="Live Demo"
                className="demo-iframe"
                width="100%"
                height="500px"
                style={{ border: 'none', borderRadius: '8px' }}
              />
            )}
          </div>
        }
      />
    </section>
  );
};

export default Projects;
