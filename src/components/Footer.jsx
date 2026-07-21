import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>RBA<span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-tagline">Desenvolvedor Web Full Stack · Estudante de ADS</p>
        <div className="footer-socials">
          <a href="https://github.com/renanbessa05" target="_blank" rel="noreferrer" className="footer-social" id="footer-github" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:renanbessa65@gmail.com" className="footer-social" id="footer-email" aria-label="E-mail">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/5566992169482" target="_blank" rel="noreferrer" className="footer-social" id="footer-whatsapp" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <p className="footer-copy">&copy; {currentYear} Renan Bessa Abdo — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
