import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee', marginBottom: '1rem' }}>
      {/* TODO 7 — replace <a> with <NavLink> */}
      <NavLink to="/" style={({ isActive }) => ({ margin: '0 0.5rem', fontWeight: isActive ? 'bold' : 'normal' })}>Home</NavLink>
      <NavLink to="/about" style={({ isActive }) => ({ margin: '0 0.5rem', fontWeight: isActive ? 'bold' : 'normal' })}>About</NavLink>
      <NavLink to="/projects" style={({ isActive }) => ({ margin: '0 0.5rem', fontWeight: isActive ? 'bold' : 'normal' })}>Projects</NavLink>
      <NavLink to="/contact" style={({ isActive }) => ({ margin: '0 0.5rem', fontWeight: isActive ? 'bold' : 'normal' })}>Contact</NavLink>
    </nav>
  );
}