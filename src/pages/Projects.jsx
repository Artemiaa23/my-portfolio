import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div style={{ padding: '0 2rem' }}>
      <h1>My Projects</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {/* Render dynamically with .map() — NOT hardcoded! */}
        {projects.map((project) => (
          <div key={project.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>
              <Link to={`/projects/${project.id}`}>{project.title}</Link>
            </h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}