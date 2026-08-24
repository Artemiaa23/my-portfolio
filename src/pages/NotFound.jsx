import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', marginTop: '4rem' }}>
      <h1>404 — Page Not Found 😕</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.5rem 1.5rem', background: '#007bff', color: 'white', borderRadius: '4px', textDecoration: 'none' }}>
        Go Back Home
      </Link>
    </div>
  );
}