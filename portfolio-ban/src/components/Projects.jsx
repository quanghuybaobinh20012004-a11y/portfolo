import React, { useState, useEffect } from 'react';
import '../App.css';
import projects from '../projectData'; 
import { Github, ExternalLink, X } from 'lucide-react';

function Projects() {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', ...new Set(projects.map(item => item.type))];

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.type === filter));
    }
  }, [filter]);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section-placeholder projects-section">
      <div className="container" style={{width: '100%', padding: '0 20px'}}>
        <h2 className="section-heading" style={{textAlign: 'center', border: 'none'}}>3. Dự án tiêu biểu</h2>

        <div className="filter-buttons">
          {categories.map((cat, index) => (
            <button 
              key={index} 
              className={`filter-button ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => openModal(project)}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <div className="project-type-tag">{project.type}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                
                <div className="project-techs">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className={`modal-backdrop active`} onClick={closeModal}>
            <div className="modal-content active" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-button" onClick={closeModal}>
                <X size={24} />
              </button>

              <h2 className="modal-title">{selectedProject.title}</h2>
              
              <div className="modal-details-grid">
                <div>
                  <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                  <div className="modal-links">
                    <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="modal-link-button github">
                      <Github size={18} /> GitHub
                    </a>
                    <a href={selectedProject.demoLink} target="_blank" rel="noreferrer" className="modal-link-button demo">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>

                <div>
                  <div className="modal-role">
                    <strong>Vai trò:&nbsp;</strong> {selectedProject.role}
                  </div>
                  <h4 className="modal-subtitle">Mô tả chi tiết</h4>
                  <p className="modal-description">{selectedProject.details}</p>
                  <h4 className="modal-subtitle">Công nghệ sử dụng</h4>
                  <div className="modal-tech-list">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;