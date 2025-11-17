import React, { useState } from 'react';
import '../App.css';
import blogs from '../blogData'; 
import { X, Calendar, Tag } from 'lucide-react'; 

function Blog() {
  const [filter, setFilter] = useState('All');
  const [selectedBlog, setSelectedBlog] = useState(null); 

  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

  const filteredBlogs = filter === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === filter);

  const openBlog = (blog) => {
    setSelectedBlog(blog);
    document.body.style.overflow = 'hidden'; 
  };

  const closeBlog = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'auto'; 
  };

  return (
    <section id="blog" className="section-placeholder blog-section">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 className="section-heading" style={{ textAlign: 'center', border: 'none' }}>6. Bài viết chia sẻ</h2>
        
        <div className="filter-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
          {categories.map((cat, index) => (
            <button 
              key={index} 
              onClick={() => setFilter(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '20px',
                border: filter === cat ? '1px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.2)',
                background: filter === cat ? 'var(--accent-gold)' : 'transparent',
                color: filter === cat ? '#000' : 'var(--text-muted)',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {filteredBlogs.map((blog) => (
            <article key={blog.id} style={{ 
              background: 'var(--bg-card)', 
              padding: '25px', 
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s'
            }}
            className="project-card" 
            >
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Calendar size={14} />
                <span>{blog.date}</span> • <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>{blog.category}</span>
              </div>
              
              <h3 style={{ marginTop: '0', fontSize: '1.4rem', color: 'var(--text-main)', lineHeight: '1.4' }}>{blog.title}</h3>
              
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>
                {blog.summary}
              </p>

              <div style={{ marginTop: '15px', marginBottom: '20px' }}>
                {blog.tags.map((tag, idx) => (
                  <span key={idx} style={{ 
                    background: 'rgba(255,255,255,0.1)', 
                    padding: '4px 10px', 
                    fontSize: '0.75rem', 
                    marginRight: '8px',
                    color: 'var(--text-main)',
                    display: 'inline-block',
                    marginBottom: '5px'
                  }}>
                    #{tag}
                  </span>
                ))}
              </div>
              
              <button 
                onClick={() => openBlog(blog)}
                style={{ 
                  background: 'transparent', 
                  border: 'none', 
                  color: 'var(--accent-gold)', 
                  fontWeight: 'bold', 
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '1rem',
                  textAlign: 'left',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                Đọc chi tiết →
              </button>
            </article>
          ))}
        </div>

        {selectedBlog && (
          <div className="modal-backdrop active" onClick={closeBlog}>
            <div className="modal-content active" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px' }}>
              <button className="modal-close-button" onClick={closeBlog}>
                <X size={24} />
              </button>

              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '20px' }}>
                <span style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  {selectedBlog.category}
                </span>
                <h2 className="modal-title" style={{ marginBottom: '10px', marginTop: '5px', fontSize: '2.2rem' }}>
                  {selectedBlog.title}
                </h2>
                <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Calendar size={16} /> {selectedBlog.date}
                </div>
              </div>
              
              <div className="modal-description" style={{ fontSize: '1.1rem', whiteSpace: 'pre-line' }}>
                {selectedBlog.content}
              </div>

              <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <Tag size={18} color="var(--accent-gold)" />
                  {selectedBlog.tags.map((tag, idx) => (
                    <span key={idx} style={{ color: 'var(--text-muted)' }}>#{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Blog;