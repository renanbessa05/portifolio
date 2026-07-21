import React, { useEffect, useRef } from 'react';

export default function Header() {
  const revealRef1 = useRef(null);
  const revealRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    if (revealRef1.current) observer.observe(revealRef1.current);
    if (revealRef2.current) observer.observe(revealRef2.current);

    return () => observer.disconnect();
  }, []);

  return (
    <header className="cv-header" id="cv-header">
      <div className="cv-header-bg"></div>
      <div className="cv-header-content">
        <div className="cv-photo-wrapper" data-reveal ref={revealRef1}>
          <div className="cv-photo-ring"></div>
          <div className="cv-photo-container">
            <img src="/assets/images/profile.png" alt="Renan Bessa Abdo" className="cv-photo" id="profile-photo" />
          </div>
        </div>

        <div className="cv-header-info" data-reveal ref={revealRef2}>
          <h1 className="cv-name">Renan Bessa <span className="cv-name-accent">Abdo</span></h1>
          <p className="cv-title"><i className="fas fa-code"></i> Desenvolvedor Web Full Stack · Estudante de ADS</p>
          
          <div className="cv-contact-row">
            <a href="mailto:renanbessa65@gmail.com" className="cv-contact-item" id="cv-email">
              <i className="fas fa-envelope"></i>
              <span>renanbessa65@gmail.com</span>
            </a>
            <a href="tel:+5566992169482" className="cv-contact-item" id="cv-phone">
              <i className="fas fa-phone"></i>
              <span>(66) 99216-9482</span>
            </a>
            <a href="https://github.com/renanbessa05" target="_blank" rel="noreferrer" className="cv-contact-item" id="cv-github">
              <i className="fab fa-github"></i>
              <span>github.com/renanbessa05</span>
            </a>
            <span className="cv-contact-item cv-location">
              <i className="fas fa-map-marker-alt"></i>
              <span>Rondonópolis — MT</span>
            </span>
          </div>

          <div className="cv-availability">
            <span className="availability-dot"></span>
            <span>Disponível para novas oportunidades</span>
          </div>
        </div>
      </div>
    </header>
  );
}
