import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ padding: '0 2rem' }}>
      <h1>404 — Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      {/* TODO 8 — use <Link>, NOT <a> */}
      <Link to="/">← Return to Home Page</Link>
    </div>
  );
}