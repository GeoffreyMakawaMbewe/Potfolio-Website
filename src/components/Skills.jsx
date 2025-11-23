import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "JavaScript/TypeScript", level: 85, icon: "📜" },
        { name: "HTML5 & CSS3", level: 95, icon: "🎨" },
        { name: "Vite", level: 80, icon: "⚡" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Java", level: 90, icon: "☕" },
        { name: "Spring Boot", level: 85, icon: "🍃" },
        { name: "Spring Cloud", level: 80, icon: "☁️" },
        { name: "RESTful APIs", level: 90, icon: "🔌" }
      ]
    },
    {
      category: "Mobile Development",
      skills: [
        { name: "Kotlin", level: 85, icon: "📱" },
        { name: "Android SDK", level: 85, icon: "🤖" },
        { name: "Jetpack Compose", level: 80, icon: "🎭" },
        { name: "MVVM Architecture", level: 85, icon: "🏗️" }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS (EC2, S3, Lambda)", level: 75, icon: "☁️" },
        { name: "Git & GitHub", level: 90, icon: "🔧" },
        { name: "CI/CD", level: 70, icon: "🔄" },
        { name: "Docker Basics", level: 65, icon: "🐳" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", level: 80, icon: "🐘" },
        { name: "MySQL", level: 80, icon: "🗄️" },
        { name: "Firebase", level: 75, icon: "🔥" },
        { name: "SQL", level: 85, icon: "💾" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`skill-category-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      >
                        <div className="skill-bar-glow"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
