import React, { useEffect, useRef } from 'react';

export default function Experience() {
  const headerRef = useRef(null);
  const monacoRef = useRef(null);
  const ambiosRef = useRef(null);

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
    if (monacoRef.current) observer.observe(monacoRef.current);
    if (ambiosRef.current) observer.observe(ambiosRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cv-section" id="experience">
      <div className="container">
        <div className="cv-section-header" data-reveal ref={headerRef}>
          <div className="section-icon"><i className="fas fa-briefcase"></i></div>
          <h2 className="section-title">Experiência Profissional</h2>
        </div>

        <div className="timeline">
          {/* Monaco Centro Oeste */}
          <div className="timeline-item" data-reveal id="exp-monaco" ref={monacoRef}>
            <div className="timeline-dot">
              <i className="fas fa-tools"></i>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Monaco Centro Oeste Ltda</h3>
                  <span className="timeline-role">Aprendiz de Mecânica</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-badge badge-done"><i className="fas fa-check"></i> Concluído</span>
                  <span className="timeline-date">Abr/2025 — Set/2025</span>
                </div>
              </div>
              <ul className="timeline-list">
                <li>Organização de ferramentas e materiais</li>
                <li>Apoio na manutenção e ordens de serviço</li>
                <li>Colaboração com equipe técnica no controle e rotina do setor</li>
              </ul>
            </div>
          </div>

          {/* Ambios Fertilizantes */}
          <div className="timeline-item" data-reveal id="exp-ambios" ref={ambiosRef}>
            <div className="timeline-dot">
              <i className="fas fa-industry"></i>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Ambios Fertilizantes Ltda</h3>
                  <span className="timeline-role">Auxiliar de Produção</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-badge badge-done"><i className="fas fa-check"></i> Concluído</span>
                  <span className="timeline-date">Nov/2024 — Fev/2025</span>
                </div>
              </div>
              <ul className="timeline-list">
                <li>Operação de painel de controle</li>
                <li>Monitoramento de etapas do processo produtivo</li>
                <li>Suporte em preenchimento de relatórios operacionais</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
