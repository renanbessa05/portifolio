import React, { useEffect, useRef } from 'react';

export default function Education() {
  const headerRef = useRef(null);
  const adsRef = useRef(null);
  const medioRef = useRef(null);
  const coursesRef = useRef(null);

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
    if (adsRef.current) observer.observe(adsRef.current);
    if (medioRef.current) observer.observe(medioRef.current);
    if (coursesRef.current) observer.observe(coursesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cv-section cv-section-alt" id="education">
      <div className="container">
        <div className="cv-section-header" data-reveal ref={headerRef}>
          <div className="section-icon"><i className="fas fa-graduation-cap"></i></div>
          <h2 className="section-title">Formação Acadêmica</h2>
        </div>

        <div className="timeline">
          {/* ADS */}
          <div className="timeline-item" data-reveal id="edu-ads" ref={adsRef}>
            <div className="timeline-dot">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Análise e Desenvolvimento de Sistemas (ADS)</h3>
                  <span className="timeline-role">Curso Superior · FATEC SENAI MT — Rondonópolis</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-badge badge-progress"><i className="fas fa-spinner"></i> Em andamento</span>
                  <span className="timeline-date">2024 — 2027</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ensino Médio */}
          <div className="timeline-item" data-reveal id="edu-medio" ref={medioRef}>
            <div className="timeline-dot">
              <i className="fas fa-school"></i>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Ensino Médio</h3>
                  <span className="timeline-role">Escola Estadual Santa Elvira</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-badge badge-done"><i className="fas fa-check"></i> Concluído</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cursos Complementares */}
        <div className="courses-section" data-reveal ref={coursesRef}>
          <h3 className="courses-title"><i className="fas fa-certificate"></i> Cursos & Certificações</h3>
          <div className="courses-grid">
            <div className="course-chip">
              <i className="fas fa-check-circle"></i>
              <span>Agricultura de Precisão e Tecnologia — SENAI MT (40h)</span>
            </div>
            <div className="course-chip">
              <i className="fas fa-check-circle"></i>
              <span>Comunicação Empresarial (60h)</span>
            </div>
            <div className="course-chip">
              <i className="fas fa-check-circle"></i>
              <span>Interação Humano-Computador (60h)</span>
            </div>
            <div className="course-chip">
              <i className="fas fa-check-circle"></i>
              <span>Fundamentos de Estatística (30h)</span>
            </div>
            <div className="course-chip">
              <i className="fas fa-check-circle"></i>
              <span>Empreendedorismo e Estratégias de Negócio (60h)</span>
            </div>
            <div className="course-chip">
              <i className="fas fa-check-circle"></i>
              <span>Relações Humanas no Trabalho (60h)</span>
            </div>
            <div className="course-chip">
              <i className="fas fa-check-circle"></i>
              <span>Metodologia Científica (60h)</span>
            </div>
            <div className="course-chip course-chip-pending">
              <i className="fas fa-clock"></i>
              <span>Gestão de Projetos (60h) — em andamento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
