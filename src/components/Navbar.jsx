import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ 
      padding: '1rem', 
      background: 'rgba(255, 255, 255, 0.6)', 
      marginBottom: '2rem',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.8)'
    }}>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({
          margin: '0 1rem',
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: 'none',
          color: isActive ? '#ff758c' : '#666'
        })}
      >
        Home
      </NavLink>

      <NavLink 
        to="/about" 
        style={({ isActive }) => ({
          margin: '0 1rem',
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: 'none',
          color: isActive ? '#ff758c' : '#666'
        })}
      >
        About
      </NavLink>

      <NavLink 
        to="/projects" 
        style={({ isActive }) => ({
          margin: '0 1rem',
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: 'none',
          color: isActive ? '#ff758c' : '#666'
        })}
      >
        Projects
      </NavLink>

      <NavLink 
        to="/contact" 
        style={({ isActive }) => ({
          margin: '0 1rem',
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: 'none',
          color: isActive ? '#ff758c' : '#666'
        })}
      >
        Contact
      </NavLink>
    </nav>
  );
}