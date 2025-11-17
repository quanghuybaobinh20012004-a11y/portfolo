import React from 'react';
import '../App.css';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="header-footer-style" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '30px',
      paddingTop: '50px',
      paddingBottom: '30px',
      position: 'relative' 
    }}>
      
      <button 
        onClick={scrollToTop}
        style={{
          position: 'absolute',
          top: '-25px',
          background: 'var(--primary-gradient)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
          color: 'white',
          transition: 'transform 0.3s'
        }}
        title="Lên đầu trang"
        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <ArrowUp size={24} />
      </button>

      <div style={{ textAlign: 'center' }}>
        <h2 style={{ 
          margin: '0 0 10px 0', 
          fontSize: '1.8rem', 
          background: 'var(--secondary-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          Bùi Quang Huy
        </h2>
        <p style={{ color: 'var(--text-muted)', margin: 0 }}>
          Frontend Developer • React • UI/UX Passionate
        </p>
      </div>

      <div style={{ display: 'flex', gap: '25px' }}>
        <a 
          href="https://github.com/quanghuybaobinh20012004-a11y" 
          target="_blank" 
          rel="noreferrer"
          style={{ color: 'var(--text-main)', transition: 'color 0.3s, transform 0.3s' }}
          onMouseOver={(e) => { e.currentTarget.style.color = '#a855f7'; e.currentTarget.style.transform = 'scale(1.2)'; }}
          onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <Github size={28} />
        </a>
        
        <a 
          href="#" 
          target="_blank" 
          rel="noreferrer"
          style={{ color: 'var(--text-main)', transition: 'color 0.3s, transform 0.3s' }}
          onMouseOver={(e) => { e.currentTarget.style.color = '#0077b5'; e.currentTarget.style.transform = 'scale(1.2)'; }}
          onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <Linkedin size={28} />
        </a>

        <a 
          href="mailto:vuinhungrabuon113@gmail.com"
          style={{ color: 'var(--text-main)', transition: 'color 0.3s, transform 0.3s' }}
          onMouseOver={(e) => { e.currentTarget.style.color = '#ef4444'; e.currentTarget.style.transform = 'scale(1.2)'; }}
          onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <Mail size={28} />
        </a>
      </div>

      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.1)', 
        width: '100%', 
        textAlign: 'center', 
        paddingTop: '20px',
        fontSize: '0.9rem',
        color: 'var(--text-muted)'
      }}>
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', margin: 0 }}>
          © 2025 Designed & Built with <Heart size={16} fill="#ef4444" color="#ef4444" /> by Quang Huy
        </p>
      </div>
    </footer>
  );
}

export default Footer;