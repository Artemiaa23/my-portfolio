import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>My Projects</h1>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {projects.map((project) => (
          <div key={project.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
            <h3>{project.title}</h3>
            <p>{project.description.substring(0, 80)}...</p>
            <Link to={`/projects/${project.id}`} style={{ color: '#007bff', textDecoration: 'none' }}>
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}