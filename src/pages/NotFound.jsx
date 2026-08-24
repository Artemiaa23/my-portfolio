import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-container">
      <div className="card" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h1>404 — Page Not Found 😕</h1>
        <p style={{ fontSize: '1.1rem', margin: '1.5rem 0' }}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn">🏠 Go Back Home</Link>
      </div>
    </div>
  );
}