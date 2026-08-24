import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-container">
      <div className="card" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Hi, I'm Shane Marian Dadulla!</h1>
        <p style={{ fontSize: '1.2rem', color: '#a06580', marginTop: '-0.5rem' }}>
          Student Developer
        </p>
        <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '1.5rem auto' }}>
          Welcome to my portfolio! I'm a Computer Science student from the Philippines, 
          learning web development, React, and full-stack applications. I love building 
          pretty and functional websites! ✨
        </p>
        <Link to="/projects" className="btn">
          View My Projects 🎀
        </Link>
      </div>
    </div>
  );
}