import React from 'react';
import '../App.css';
import { FileText, Github, Linkedin, Mail, ArrowRight, Code2, Terminal } from 'lucide-react'; 

const personalData = {
  name: "Bùi Quang Huy", 
  title: "Frontend Developer",
  description: "Tôi là một lập trình viên đam mê kiến tạo giao diện web hiện đại. Với nền tảng vững chắc về ReactJS và tư duy UI/UX, tôi biến những ý tưởng phức tạp thành trải nghiệm người dùng mượt mà, hiệu suất cao và thân thiện.",
  profileImage: "/avatar.jpg", 
  cvUrl: "/cv.pdf",
  techStack: ["React", "JavaScript", "Tailwind", "Node.js", "Figma"]
};

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        
        <div className="home-text-col">
          <div className="intro-badge">
            <Terminal size={16} style={{ marginRight: '8px' }} />
            <span>Welcome to my portfolio</span>
          </div>

          <h1 className="name-title">{personalData.name}</h1>
          
          <h2 className="job-title-large">
            {personalData.title} <span style={{ color: 'var(--text-muted)', fontWeight: '300' }}>& UI Designer</span>
          </h2>

          <p className="current-role-expanded">
            {personalData.description}
          </p>

          <div className="home-buttons">
            <a href={personalData.cvUrl} target="_blank" rel="noopener noreferrer" className="cv-button primary" download="BuiQuangHuy_CV.pdf">
              <FileText size={20} style={{ marginRight: '8px' }} />
              Tải CV
            </a>
            <a href="#contact" className="cv-button secondary">
              Liên hệ ngay <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
          </div>

          <div className="home-footer-info">
            <div className="tech-stack-home">
              <p className="label-text">Tech Stack:</p>
              <div className="stack-icons">
                {personalData.techStack.map((tech, index) => (
                  <span key={index} className="stack-badge">{tech}</span>
                ))}
              </div>
            </div>
            <div className="social-home">
              <a href="https://github.com/quanghuybaobinh20012004-a11y" target="_blank" rel="noreferrer"><Github /></a>
              <a href="#" target="_blank" rel="noreferrer"><Linkedin /></a>
              <a href="mailto:vuinhungrabuon113@gmail.com"><Mail /></a>
            </div>
          </div>
        </div>

        <div className="home-image-wrapper">
            <img src={personalData.profileImage} alt="Profile" className="profile-image" />
            <div className="floating-card">
              <div className="floating-icon"><Code2 /></div>
              <div>
                <b>React Expert</b>
                <span>Always priority</span>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
}

export default Home;