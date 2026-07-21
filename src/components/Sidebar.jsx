import React from 'react';

export default function Sidebar({ activeSection }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-sticky">
        <header className="sidebar-header">
          <div className="avatar-container">
            <img src="/assets/images/profile.png" alt="Renan Bessa Abdo" className="avatar-img" />
          </div>
          <h1 className="sidebar-name">Renan Bessa Abdo</h1>
          <h2 className="sidebar-title">Desenvolvedor Web Full Stack</h2>
          <p className="sidebar-subtitle">Estudante de ADS · Cuiabá, MT</p>
          <div className="availability-badge">
            <span className="dot"></span>
            Disponível para oportunidades
          </div>
        </header>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li>
              <a href="#profile" className={`nav-link ${activeSection === 'profile' ? 'active' : ''}`}>
                <span className="nav-indicator"></span>
                <span className="nav-text">Perfil</span>
              </a>
            </li>
            <li>
              <a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}>
                <span className="nav-indicator"></span>
                <span className="nav-text">Formação</span>
              </a>
            </li>
            <li>
              <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
                <span className="nav-indicator"></span>
                <span className="nav-text">Experiência</span>
              </a>
            </li>
            <li>
              <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
                <span className="nav-indicator"></span>
                <span className="nav-text">Habilidades</span>
              </a>
            </li>
            <li>
              <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
                <span className="nav-indicator"></span>
                <span className="nav-text">Projetos</span>
              </a>
            </li>
          </ul>
        </nav>

        <footer className="sidebar-footer">
          <div className="social-links">
            <a href="https://github.com/renanbessa05" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:renanbessa65@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://wa.me/5566992169482" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </footer>
      </div>
    </aside>
  );
}
