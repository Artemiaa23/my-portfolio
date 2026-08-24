import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Project Not Found ❌</h1>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/projects" style={{ color: '#007bff' }}>← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{project.title}</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{project.description}</p>
      {project.link && project.link !== '#' && (
        <p><a href={project.link} target="_blank" rel="noreferrer" style={{ color: '#007bff' }}>View on GitHub →</a></p>
      )}
      <Link to="/projects" style={{ display: 'inline-block', marginTop: '2rem', color: '#007bff' }}>
        ← Back to All Projects
      </Link>
    </div>
  );
}