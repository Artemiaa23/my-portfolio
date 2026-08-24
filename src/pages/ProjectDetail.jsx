import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="page-container">
        <div className="card" style={{ textAlign: 'center' }}>
          <h1>Oops! ❌</h1>
          <p>This project doesn't exist.</p>
          <Link to="/projects" className="btn">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="card">
        <h1>{project.title}</h1>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', marginTop: '1.5rem' }}>
          {project.description}
        </p>
        {project.link && project.link !== '#' && (
          <p style={{ marginTop: '1.5rem' }}>
            <a href={project.link} target="_blank" rel="noreferrer" className="btn">
              🔗 View on GitHub
            </a>
          </p>
        )}
        <Link to="/projects" style={{ display: 'inline-block', marginTop: '2rem' }}>
          ← Back to All Projects
        </Link>
      </div>
    </div>
  );
}