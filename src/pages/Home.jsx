import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      maxWidth: '800px', 
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.8rem', marginBottom: '0.5rem', color: '#6b4e71' }}>
  Hello, I'm Shane Marian Dadulla!
</h1>

<h2 style={{ fontSize: '1.3rem', color: '#8b658f', marginBottom: '1.5rem', fontWeight: 'normal' }}>
  Student Developer
</h2>

<p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555', marginBottom: '2.5rem' }}>
  Welcome to my portfolio website! I'm a Computer Science student learning web development, 
  React, and full-stack applications.
</p>
      <Link 
        to="/projects" 
        style={{ 
          fontSize: '1.1rem', 
          padding: '0.75rem 1.5rem', 
          background: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)', 
          color: 'white', 
          borderRadius: '50px', 
          textDecoration: 'none',
          display: 'inline-block',
          fontWeight: '500',
          boxShadow: '0 4px 15px rgba(255, 117, 140, 0.4)',
          transition: '0.3s ease'
        }}>
        View My Projects →
      </Link>
    </div>
  );
}