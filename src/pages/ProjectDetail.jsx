import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams(); // Read URL parameter

  // Find matching project
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div style={{ padding: '0 2rem' }}>
        <h2>Project Not Found</h2>
        <p>No project matches ID: {id}</p>
        <Link to="/projects">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '0 2rem' }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {project.link && <a href={project.link} target="_blank" rel="noreferrer">View Source →</a>}
      <br /><br />
      <Link to="/projects">← Back to All Projects</Link>
    </div>
  );
}