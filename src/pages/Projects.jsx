import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Projects 📂</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 style={{ color: '#703d57', marginBottom: '0.5rem' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#6b5f67', marginBottom: '1rem' }}>
              {project.description.substring(0, 85)}...
            </p>
            <Link 
              to={`/projects/${project.id}`}
              style={{ fontWeight: '600', textDecoration: 'none' }}
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}