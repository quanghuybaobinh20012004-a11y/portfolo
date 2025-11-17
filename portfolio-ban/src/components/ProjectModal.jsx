import React from 'react';
import { X, Github, Link as LinkIcon, Briefcase } from 'lucide-react';
import '../App.css'; 

// Modal Component để hiển thị chi tiết dự án
const ProjectModal = ({ project, onClose }) => {
  // Không hiển thị modal nếu không có dự án nào được chọn
  if (!project) return null;

  return (
    // Backdrop
    <div className="modal-backdrop" onClick={onClose}>
      {/* Modal chính (ngăn chặn đóng khi click vào nội dung modal) */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Nút đóng */}
        <button className="modal-close-button" onClick={onClose}>
          <X size={24} />
        </button>

        <h3 className="modal-title">{project.title}</h3>

        <div className="modal-details-grid">
          {/* Cột trái: Ảnh và vai trò */}
          <div className="modal-col-left">
            <img 
              src={project.image} 
              alt={`Demo của dự án ${project.title}`} 
              className="modal-image" 
            />
            
            <div className="modal-role">
                <Briefcase size={20} style={{ marginRight: '8px' }} />
                <strong>Vai trò:</strong> {project.role}
            </div>
          </div>

          {/* Cột phải: Chi tiết và công nghệ */}
          <div className="modal-col-right">
            
            <p className="modal-type-tag">{project.type}</p>

            <h4 className="modal-subtitle">Mục tiêu & Chi tiết</h4>
            <p className="modal-description">{project.details}</p>

            <h4 className="modal-subtitle">Công nghệ sử dụng</h4>
            <div className="modal-tech-list">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            {/* Links */}
            <div className="modal-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="modal-link-button github">
                <Github size={20} /> GitHub
              </a>
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="modal-link-button demo">
                  <LinkIcon size={20} /> Demo Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;