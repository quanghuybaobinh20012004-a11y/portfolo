import React, { useRef, useState } from 'react';
import '../App.css';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        'service_s1q05ml',   
        'template_8non8qj', 
        form.current, 
        '_c3BdpYG1FGSNhpkf'    
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert("Tin nhắn đã được gửi thành công!");
          e.target.reset();
          setIsLoading(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Gửi thất bại. Vui lòng thử lại sau.");
          setIsLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="section-placeholder contact-section">
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px', width: '100%' }}>
        <h2 className="section-heading" style={{ textAlign: 'center', border: 'none' }}>5. Liên hệ</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', marginTop: '40px' }} className="contact-grid">
          
          <div className="contact-info">
            <h3 className="sub-heading" style={{ marginTop: 0 }}>Thông tin liên lạc</h3>
            <p>Tôi luôn sẵn sàng trao đổi về các cơ hội hợp tác hoặc công việc mới.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Mail color="#d4af37" /> 
                <a href="mailto:vuinhungrabuon113@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>vuinhungrabuon113@gmail.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Phone color="#d4af37" /> 
                <a href="tel:0396131659" style={{ color: 'inherit', textDecoration: 'none' }}>0396 131 659</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                <MapPin color="#d4af37" style={{ minWidth: '24px' }} /> 
                <span>111 Đặng Thùy Trâm, Phường 13, Quận Bình Thạnh, TP.HCM</span>
              </div>
            </div>

            <h3 className="sub-heading">Mạng xã hội</h3>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: '#d4af37', opacity: 0.5, cursor: 'not-allowed' }}>
                <Linkedin size={32} />
              </a>
              <a href="https://github.com/quanghuybaobinh20012004-a11y" target="_blank" rel="noreferrer" style={{ color: '#ffffff' }}>
                <Github size={32} />
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#fff' }}>Họ và tên</label>
                <input type="text" name="name" required placeholder="Nhập tên của bạn" style={{ width: '100%', padding: '12px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#fff' }}>Email</label>
                <input type="email" name="email" required placeholder="example@email.com" style={{ width: '100%', padding: '12px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', color: '#fff' }}>Nội dung</label>
                <textarea name="message" required rows="5" placeholder="Bạn muốn trao đổi về công việc gì?" style={{ width: '100%', padding: '12px' }}></textarea>
              </div>
              <button type="submit" className="cv-button" disabled={isLoading} style={{ marginTop: '10px', width: 'fit-content', cursor: isLoading ? 'wait' : 'pointer' }}>
                {isLoading ? 'Đang gửi...' : <><Send size={18} style={{ marginRight: '8px' }} /> Gửi tin nhắn</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;