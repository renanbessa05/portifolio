import React, { useEffect, useRef } from 'react';

export default function Contact() {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

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
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cv-section cv-section-alt" id="contact">
      <div className="container">
        <div className="cv-section-header" data-reveal ref={headerRef}>
          <div className="section-icon"><i className="fas fa-paper-plane"></i></div>
          <h2 className="section-title">Contato</h2>
        </div>

        <div className="contact-cards" data-reveal ref={cardsRef}>
          <a href="mailto:renanbessa65@gmail.com" className="contact-card-cv" id="contact-email-card">
            <div className="contact-card-icon-cv"><i className="fas fa-envelope"></i></div>
            <div>
              <h4>E-mail</h4>
              <span>renanbessa65@gmail.com</span>
            </div>
          </a>

          <a href="https://wa.me/5566992169482" target="_blank" rel="noreferrer" className="contact-card-cv" id="contact-whatsapp-card">
            <div className="contact-card-icon-cv whatsapp"><i className="fab fa-whatsapp"></i></div>
            <div>
              <h4>WhatsApp</h4>
              <span>(66) 99216-9482</span>
            </div>
          </a>

          <a href="https://github.com/renanbessa05" target="_blank" rel="noreferrer" className="contact-card-cv" id="contact-github-card">
            <div className="contact-card-icon-cv github"><i className="fab fa-github"></i></div>
            <div>
              <h4>GitHub</h4>
              <span>github.com/renanbessa05</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
