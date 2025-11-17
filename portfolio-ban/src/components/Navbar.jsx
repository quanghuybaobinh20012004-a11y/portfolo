import React, { useState } from 'react';
import '../App.css';
import { Sun, Moon } from 'lucide-react'; // Import icon

function Navbar({ theme, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="header-footer-style">
      <div 
        onClick={() => handleScroll('home')} 
        style={{ fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer', color: 'var(--text-main)' }}
      >
        MyPortfolio
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        
        {/* Menu Desktop */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '15px' }}>
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Nút chuyển đổi Dark/Light Mode */}
        <button 
          onClick={toggleTheme}
          style={{
            background: 'transparent',
            /* 👇 ĐÃ SỬA: Dùng var(--text-main) để tự động đổi màu Đen/Trắng theo nền */
            border: '2px solid var(--text-main)', 
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            /* 👇 ĐÃ SỬA: Dùng var(--text-main) */
            color: 'var(--text-main)', 
            transition: 'all 0.3s ease'
          }}
          title={theme === 'dark' ? "Chuyển sang chế độ Sáng" : "Chuyển sang chế độ Tối"}
        >
          {/* Logic hiển thị icon */}
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;