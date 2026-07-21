import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], header[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#cv-header" className="nav-logo">
          <span className="logo-bracket">&lt;</span>RBA<span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-links">
          <li>
            <a href="#profile" className="nav-link" onClick={closeMenu} style={{ color: activeSection === 'profile' ? '#f1f5f9' : '' }}>Perfil</a>
          </li>
          <li>
            <a href="#education" className="nav-link" onClick={closeMenu} style={{ color: activeSection === 'education' ? '#f1f5f9' : '' }}>Formação</a>
          </li>
          <li>
            <a href="#experience" className="nav-link" onClick={closeMenu} style={{ color: activeSection === 'experience' ? '#f1f5f9' : '' }}>Experiência</a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={closeMenu} style={{ color: activeSection === 'skills' ? '#f1f5f9' : '' }}>Habilidades</a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={closeMenu} style={{ color: activeSection === 'projects' ? '#f1f5f9' : '' }}>Projetos</a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMenu} style={{ color: activeSection === 'contact' ? '#f1f5f9' : '' }}>Contato</a>
          </li>
        </ul>

        <button 
          className={`hamburger ${menuOpen ? 'open' : ''}`} 
          id="hamburger" 
          aria-label="Menu" 
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
