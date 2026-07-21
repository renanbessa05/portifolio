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
            Estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> pela FATEC SENAI MT, com
            experiência em ambientes industriais e administrativos. Possuo habilidades em organização de
            tarefas, controle de processos e suporte à equipe. Tenho facilidade de comunicação, sou proativo,
            comprometido com prazos e metas, e busco sempre contribuir com soluções e melhorias no ambiente de trabalho.
          </p>
          <p>
            No desenvolvimento web, trabalho com <strong>HTML5</strong>, <strong>CSS3</strong> e
            <strong>JavaScript</strong> puro, criando interfaces modernas e responsivas. Estudo
            <strong>React</strong> e <strong>Node.js</strong> para expandir minhas habilidades no
            ecossistema JavaScript, além de trabalhar com bancos de dados <strong>SQL</strong> e aplicar
            princípios de <strong>Programação Orientada a Objetos</strong>. Utilizo <strong>Git</strong>
            para controle de versão e ferramentas de IA generativa para acelerar o desenvolvimento.
          </p>
        </div>
      </div>
    </section>
  );
}
