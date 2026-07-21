import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="layout-split">
      <div className="bg-mesh"></div>
      <Sidebar activeSection={activeSection} />
      
      <main className="content">
        <Profile />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        
        <footer className="content-footer">
          <p>&copy; {new Date().getFullYear()} Renan Bessa Abdo. Desenvolvido com React.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
