import React, { useEffect, useRef } from 'react';

export default function Profile() {
  const headerRef = useRef(null);
  const contentRef = useRef(null);

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
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cv-section" id="profile">
      <div className="container">
        <div className="cv-section-header" data-reveal ref={headerRef}>
          <div className="section-icon"><i className="fas fa-user"></i></div>
          <h2 className="section-title">Perfil Profissional</h2>
        </div>

        <div className="profile-content" data-reveal ref={contentRef}>
          <p>
            Estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> pela FATEC SENAI MT. 
            Possuo forte interesse no desenvolvimento de software, análise de sistemas e evolução de sistemas complexos, como <strong>plataformas ERP</strong>. 
            Com experiência prévia em rotinas operacionais e industriais, desenvolvi boa capacidade de organização, 
            raciocínio lógico e analítico. Sou proativo, possuo ótima comunicação e muita vontade de aprender e colaborar com a equipe.
          </p>
          <p>
            Tenho experiência na criação de <strong>Aplicações Web</strong> e consumo de <strong>APIs</strong> modernas, aplicando conceitos sólidos de <strong>Lógica de Programação</strong> e <strong>Programação Orientada a Objetos (POO)</strong>. 
            Trabalho com modelagem e consultas em bancos de dados relacionais (<strong>SQL Server</strong>, MySQL) e possuo noções práticas de <strong>levantamento de requisitos</strong> e regras de negócio.
            Atualmente focado no ecossistema JavaScript (React, Node.js), porém com forte interesse e disposição para atuar e me aprofundar em <strong>C# e ecossistema .NET</strong>. Utilizo <strong>Git</strong> e aplico conceitos de metodologias ágeis (Scrum) nos meus projetos.
          </p>
        </div>
      </div>
    </section>
  );
}
