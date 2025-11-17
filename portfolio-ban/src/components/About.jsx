import React from 'react';
import '../App.css';
import { Target, Zap, Code, Cpu, Globe } from 'lucide-react';

function About() {
  return (
    <section id="about" className="section-placeholder about-section">
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        
        <h2 className="section-heading">1. Giới thiệu về tôi</h2>
        
        <div className="about-grid">
          
          {/* CỘT TRÁI: Câu chuyện & Tầm nhìn */}
          <div className="about-left">
            <div className="about-card glass-effect">
              <h3 className="card-title">
                <span className="icon-box"><Code size={20} /></span> 
                Câu chuyện của tôi
              </h3>
              <p className="about-text">
                Tôi là một <strong>Frontend Developer</strong> với niềm đam mê mãnh liệt trong việc tạo ra các giao diện web không chỉ đẹp mà còn có hiệu suất cao. 
                <br/><br/>
                Với <strong>3 năm kinh nghiệm</strong> thực chiến, tôi luôn tìm cách chuyển đổi những ý tưởng thiết kế phức tạp thành các dòng code React sạch sẽ, mượt mà và tối ưu trải nghiệm người dùng (UX).
              </p>
            </div>

            <div className="about-card glass-effect mt-30">
              <h3 className="card-title">
                <span className="icon-box"><Target size={20} /></span> 
                Định hướng sự nghiệp
              </h3>
              <p className="about-text">
                Mục tiêu dài hạn của tôi là trở thành một <strong>Software Architect</strong> (Kiến trúc sư phần mềm), chuyên sâu trong hệ sinh thái JavaScript. Tôi khao khát xây dựng những hệ thống quy mô lớn, bền vững và dễ dàng mở rộng trong tương lai.
              </p>
            </div>
          </div>

          {/* CỘT PHẢI: Điểm mạnh & Chỉ số */}
          <div className="about-right">
            
            {/* Các chỉ số nhanh (Stats) */}
            <div className="stats-grid">
              <div className="stat-box glass-effect">
                <span className="stat-number">3+</span>
                <span className="stat-label">Năm kinh nghiệm</span>
              </div>
              <div className="stat-box glass-effect">
                <span className="stat-number">20+</span>
                <span className="stat-label">Dự án đã làm</span>
              </div>
              <div className="stat-box glass-effect">
                <span className="stat-number">100%</span>
                <span className="stat-label">Hài lòng</span>
              </div>
            </div>

            {/* Danh sách điểm mạnh cốt lõi */}
            <div className="about-card glass-effect mt-30">
              <h3 className="card-title">
                <span className="icon-box"><Zap size={20} /></span> 
                Điểm mạnh cốt lõi
              </h3>
              <ul className="strength-list-modern">
                <li>
                  <Cpu size={18} className="bullet-icon" />
                  <span>Thành thạo <strong>ReactJS, Hooks</strong> & Redux/Context API.</span>
                </li>
                <li>
                  <Globe size={18} className="bullet-icon" />
                  <span>Hiểu sâu về <strong>HTML5, CSS3</strong> & JavaScript (ES6+).</span>
                </li>
                <li>
                  <Zap size={18} className="bullet-icon" />
                  <span>Tư duy giải quyết vấn đề & làm việc nhóm hiệu quả.</span>
                </li>
                <li>
                  <Code size={18} className="bullet-icon" />
                  <span>Kinh nghiệm tối ưu hóa hiệu năng (Performance Optimization).</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;