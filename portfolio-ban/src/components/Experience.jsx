import React from 'react';
import '../App.css';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

function Experience() {
  const history = [
    {
      id: 1,
      type: 'work',
      title: 'Developer Intern',
      organization: 'Bosch Vietnam',
      time: 'Thời gian làm việc: 7 tháng',
      description: 'Tham gia vào quy trình phát triển phần mềm: thiết kế, xây dựng và bảo trì ứng dụng. Thực hiện viết mã nguồn (coding), sửa lỗi (bug fixing), thử nghiệm (testing) và nghiên cứu công nghệ mới để tối ưu hóa sản phẩm.'
    },
    {
      id: 2,
      type: 'education',
      title: 'Kỹ sư Kỹ thuật Phần mềm',
      organization: 'Trường Đại học Văn Lang',
      time: '2022 - 2026 (Dự kiến)',
      description: 'Hiện đang là sinh viên năm 3. Điểm trung bình (GPA): 2.9 (Khá). Chuyên sâu vào lập trình ứng dụng và công nghệ phần mềm hiện đại.'
    }
  ];

  return (
    <section id="experience" className="section-placeholder section-alt-bg experience-section">
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', width: '100%' }}>
        <h2 className="section-heading" style={{ textAlign: 'center', border: 'none' }}>4. Kinh nghiệm & Học vấn</h2>
        
        <div className="timeline">
          {history.map((item) => (
            <div key={item.id} className="timeline-item" style={{
              display: 'flex', 
              gap: '20px', 
              marginBottom: '30px',
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}>
              <div className="timeline-icon" style={{ minWidth: '50px' }}>
                <div style={{ 
                  background: item.type === 'work' ? '#e7f1ff' : '#e0f7fa', 
                  color: item.type === 'work' ? '#007bff' : '#009688',
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {item.type === 'work' ? <Briefcase size={24} /> : <GraduationCap size={24} />}
                </div>
              </div>

              <div className="timeline-content">
                <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>{item.title}</h3>
                <h4 style={{ margin: '0 0 10px 0', fontWeight: '500', color: '#555' }}>{item.organization}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#777', fontSize: '0.9rem', marginBottom: '10px' }}>
                  <Calendar size={16} />
                  <span>{item.time}</span>
                </div>
                <p style={{ margin: 0, lineHeight: '1.5', color: '#666' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;