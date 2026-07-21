import React, { useEffect, useRef } from 'react';

export default function Projects() {
  const headerRef = useRef(null);
  const auraRef = useRef(null);
  const hellenRef = useRef(null);
  const originariaRef = useRef(null);
  const ctaRef = useRef(null);

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
    if (auraRef.current) observer.observe(auraRef.current);
    if (hellenRef.current) observer.observe(hellenRef.current);
    if (originariaRef.current) observer.observe(originariaRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cv-section" id="projects">
      <div className="container">
        <div className="cv-section-header" data-reveal ref={headerRef}>
          <div className="section-icon"><i className="fas fa-rocket"></i></div>
          <h2 className="section-title">Projetos de Desenvolvimento</h2>
        </div>

        <div className="timeline">
          {/* AuraJuris */}
          <div className="timeline-item" data-reveal id="proj-aurajuris" ref={auraRef}>
            <div className="timeline-dot">
              <i className="fas fa-gavel"></i>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">AuraJuris</h3>
                  <span className="timeline-role">Plataforma jurídica com IA</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-badge badge-production"><i className="fas fa-circle"></i> Em produção</span>
                  <span className="timeline-badge badge-vibe"><i className="fas fa-brain"></i> Vibe Coding</span>
                </div>
              </div>
              <p className="timeline-description">
                Plataforma jurídica com geração de peças processuais via API de IA.
                O sistema interpreta o caso do cliente e redige documentos jurídicos automaticamente.
              </p>
              <div className="timeline-techs">
                <span>JavaScript</span>
                <span>API de IA</span>
                <span>Vibe Coding</span>
                <span>Vercel</span>
              </div>
              <a href="https://aura-juriss.vercel.app/" target="_blank" rel="noreferrer" className="timeline-link">
                <i className="fas fa-external-link-alt"></i> Ver projeto ao vivo
              </a>
            </div>
          </div>

          {/* Hellen CRM */}
          <div className="timeline-item" data-reveal id="proj-hellen" ref={hellenRef}>
            <div className="timeline-dot">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Hellen CRM</h3>
                  <span className="timeline-role">Formulário inteligente para personal chef</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-badge badge-done"><i className="fas fa-check"></i> Entregue</span>
                </div>
              </div>
              <p className="timeline-description">
                Formulário inteligente para personal chef: o cliente preenche suas preferências,
                restrições e ocasião, e o sistema elabora a proposta de cardápio personalizada.
              </p>
              <div className="timeline-techs">
                <span>JavaScript</span>
                <span>HTML/CSS</span>
                <span>Formulário</span>
                <span>Vercel</span>
              </div>
              <a href="https://hellen-crm.vercel.app/" target="_blank" rel="noreferrer" className="timeline-link">
                <i className="fas fa-external-link-alt"></i> Ver projeto ao vivo
              </a>
            </div>
          </div>

          {/* Originária Cozinha */}
          <div className="timeline-item" data-reveal id="proj-originaria" ref={originariaRef}>
            <div className="timeline-dot">
              <i className="fas fa-utensils"></i>
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Originária Cozinha</h3>
                  <span className="timeline-role">Sistema de pedidos online</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-badge badge-study"><i className="fas fa-flask"></i> Projeto de estudo</span>
                </div>
              </div>
              <p className="timeline-description">
                Sistema de pedidos de comidas online com cardápio interativo,
                seleção de pratos e fluxo de pedido completo.
              </p>
              <div className="timeline-techs">
                <span>JavaScript</span>
                <span>HTML/CSS</span>
                <span>Vercel</span>
              </div>
              <a href="https://originaria-cozinha.vercel.app/" target="_blank" rel="noreferrer" className="timeline-link">
                <i className="fas fa-external-link-alt"></i> Ver projeto ao vivo
              </a>
            </div>
          </div>
        </div>

        <div className="github-cta" data-reveal ref={ctaRef}>
          <a href="https://github.com/renanbessa05" target="_blank" rel="noreferrer" className="btn-github">
            <i className="fab fa-github"></i> Ver mais projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
