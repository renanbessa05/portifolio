import React, { useEffect, useRef } from 'react';

export default function Skills() {
  const headerRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const toolsRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    if (headerRef.current) observer.observe(headerRef.current);
    if (col1Ref.current) observer.observe(col1Ref.current);
    if (col2Ref.current) observer.observe(col2Ref.current);
    if (toolsRef.current) observer.observe(toolsRef.current);

    // Skill bars animation
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.width + '%';
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    barsRef.current.forEach(bar => {
      if (bar) barObserver.observe(bar);
    });

    return () => {
      observer.disconnect();
      barObserver.disconnect();
    };
  }, []);

  return (
    <section className="cv-section cv-section-alt" id="skills">
      <div className="container">
        <div className="cv-section-header" data-reveal ref={headerRef}>
          <div className="section-icon"><i className="fas fa-layer-group"></i></div>
          <h2 className="section-title">Habilidades Técnicas</h2>
        </div>

        <div className="skills-columns">
          {/* Coluna 1 — Desenvolvimento */}
          <div className="skills-group" data-reveal ref={col1Ref}>
            <h3 className="skills-group-title"><i className="fas fa-code"></i> Desenvolvimento</h3>
            
            <SkillRow icon="fab fa-js" color="yellow" label="JavaScript (ES6+) / React" value="90" barsRef={barsRef} index={0} />
            <SkillRow icon="fas fa-server" color="green" label="Node.js / APIs REST" value="85" barsRef={barsRef} index={1} />
            <SkillRow icon="fab fa-windows" color="blue" label="C# / .NET (Estudando)" value="60" barsRef={barsRef} index={2} />
            <SkillRow icon="fas fa-database" color="orange" label="SQL Server / MySQL" value="80" barsRef={barsRef} index={3} />
            <SkillRow icon="fas fa-cubes" color="purple" label="POO / SOLID" value="85" barsRef={barsRef} index={4} />
            <SkillRow icon="fab fa-git-alt" color="orange" label="Git / GitHub" value="85" barsRef={barsRef} index={5} />
            <SkillRow icon="fas fa-project-diagram" color="pink" label="Modelagem de Processos / Requisitos" value="75" barsRef={barsRef} index={6} />
          </div>

          {/* Coluna 2 — Complementares & IA */}
          <div className="skills-group" data-reveal ref={col2Ref}>
            <h3 className="skills-group-title"><i className="fas fa-brain"></i> Complementares & Metodologias</h3>

            <SkillRow icon="fas fa-users-cog" color="blue" label="Scrum / Metodologias Ágeis" value="85" barsRef={barsRef} index={7} />
            <SkillRow icon="fas fa-robot" color="purple" label="Vibe Coding + IA" value="92" barsRef={barsRef} index={8} isVibe />
            <SkillRow icon="fas fa-lightbulb" color="yellow" label="Raciocínio Lógico e Analítico" value="90" barsRef={barsRef} index={9} />
            <SkillRow icon="fas fa-comments" color="pink" label="Comunicação e Trabalho em Equipe" value="90" barsRef={barsRef} index={10} />
            <SkillRow icon="fas fa-tasks" color="green" label="Organização e Processos" value="85" barsRef={barsRef} index={11} />
            <SkillRow icon="fas fa-file-excel" color="green" label="Pacote Office" value="75" barsRef={barsRef} index={12} />
            <SkillRow icon="fas fa-network-wired" color="blue" label="Hardware, Software e Redes" value="70" barsRef={barsRef} index={13} />
          </div>
        </div>

        {/* Ferramentas */}
        <div className="tools-section" data-reveal ref={toolsRef}>
          <h3 className="tools-title">Ferramentas & Tecnologias</h3>
          <div className="tools-grid">
            <div className="tool-chip"><i className="fab fa-git-alt"></i><span>Git</span></div>
            <div className="tool-chip"><i className="fab fa-github"></i><span>GitHub</span></div>
            <div className="tool-chip"><i className="fas fa-code"></i><span>VS Code</span></div>
            <div className="tool-chip"><i className="fab fa-npm"></i><span>NPM</span></div>
            <div className="tool-chip"><i className="fab fa-linux"></i><span>Linux</span></div>
            <div className="tool-chip"><i className="fas fa-satellite-dish"></i><span>Postman</span></div>
            <div className="tool-chip"><i className="fas fa-file-word"></i><span>Office</span></div>
            <div className="tool-chip tool-chip-ai"><i className="fas fa-gem"></i><span>Gemini</span></div>
            <div className="tool-chip tool-chip-ai"><span className="tool-emoji">🤖</span><span>ChatGPT</span></div>
            <div className="tool-chip tool-chip-ai"><span className="tool-emoji">🧠</span><span>Claude</span></div>
            <div className="tool-chip tool-chip-ai"><i className="fas fa-bolt"></i><span>V0.dev</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillRow({ icon, color, label, value, barsRef, index, isVibe }) {
  return (
    <div className="skill-row">
      <div className="skill-info">
        <i className={`${icon} skill-color-${color}`}></i>
        <span>{label}</span>
      </div>
      <div className="skill-bar-track">
        <div 
          className={`skill-bar-fill ${isVibe ? 'vibe-bar' : ''}`} 
          data-width={value}
          ref={el => barsRef.current[index] = el}
        ></div>
      </div>
      <span className="skill-value">{value}%</span>
    </div>
  );
}
