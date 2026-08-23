import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* TODO 2 */}
        <Route path="/about" element={<About />} />
        {/* TODO 3 */}
        <Route path="/projects" element={<Projects />} />
        {/* TODO 4 — dynamic route */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
        {/* TODO 5 */}
        <Route path="/contact" element={<Contact />} />
        {/* TODO 6 — MUST be LAST */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}