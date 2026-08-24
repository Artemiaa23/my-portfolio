import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ 
      padding: '1.2rem 2rem', 
      background: 'rgba(255, 255, 255, 0.65)', 
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            margin: '0 1rem',
            fontWeight: isActive ? '700' : '500',
            textDecoration: 'none',
            color: isActive ? '#ff758c' : '#6b5f67',
            fontSize: '1.05rem'
          })}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          style={({ isActive }) => ({
            margin: '0 1rem',
            fontWeight: isActive ? '700' : '500',
            textDecoration: 'none',
            color: isActive ? '#ff758c' : '#6b5f67',
            fontSize: '1.05rem'
          })}
        >
          About
        </NavLink>
        <NavLink 
          to="/projects" 
          style={({ isActive }) => ({
            margin: '0 1rem',
            fontWeight: isActive ? '700' : '500',
            textDecoration: 'none',
            color: isActive ? '#ff758c' : '#6b5f67',
            fontSize: '1.05rem'
          })}
        >
          Projects
        </NavLink>
        <NavLink 
          to="/contact" 
          style={({ isActive }) => ({
            margin: '0 1rem',
            fontWeight: isActive ? '700' : '500',
            textDecoration: 'none',
            color: isActive ? '#ff758c' : '#6b5f67',
            fontSize: '1.05rem'
          })}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}