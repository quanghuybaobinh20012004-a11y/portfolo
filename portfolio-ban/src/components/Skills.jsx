import React from 'react';
import '../App.css';
import { Code2, Database, PenTool } from 'lucide-react'; // Import icon cho đẹp

function Skills() {
  // Dữ liệu kỹ năng
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 size={24} color="#a855f7" />, // Icon màu tím neon
      skills: [
        { name: "ReactJS / Hooks", level: 90 },
        { name: "HTML5 / CSS3", level: 85 },
        { name: "JavaScript (ES6+)", level: 80 },
        { name: "Tailwind CSS / Bootstrap", level: 85 }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database size={24} color="#3b82f6" />, // Icon màu xanh dương
      skills: [
        { name: "Node.js / Express", level: 70 },
        { name: "MongoDB / MySQL", level: 65 },
        { name: "RESTful API", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <PenTool size={24} color="#06b6d4" />, // Icon màu Cyan
      skills: [
        { name: "Git / GitHub", level: 85 },
        { name: "Figma / UI Design", level: 70 },
        { name: "Agile / Scrum", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-placeholder skills-section">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 className="section-heading">2. Kỹ năng chuyên môn</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card glass-effect">
              {/* Tiêu đề nhóm kỹ năng */}
              <h3 className="category-heading" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {category.icon} 
                {category.title}
              </h3>
              
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    {/* Hàng 1: Tên và Phần trăm nằm 2 bên */}
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>{skill.level}%</span>
                    </div>
                    
                    {/* Hàng 2: Thanh Progress Bar (FR-2.2) */}
                    <div className="progress-bar-container">
                      <div 
                        className="progress-bar-fill" 
                        style={{ 
                          width: `${skill.level}%`,
                          // Hiệu ứng chạy từ 0 ra khi load
                          transition: 'width 1.5s ease-in-out' 
                        }}
                      ></div>
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
}

export default Skills;