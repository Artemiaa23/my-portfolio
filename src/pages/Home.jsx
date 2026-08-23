import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '0 2rem' }}>
      <h1>Hi, I'm Shane Marian Dadulla</h1>
      <p>Aspiring Developer | Application Development Student</p>
      <Link to="/projects" style={{ fontSize: '1.2rem' }}>View My Projects →</Link>
    </div>
  );
}