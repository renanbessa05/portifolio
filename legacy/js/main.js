/* =======================================================
   RENAN BESSA ABDO — CURRÍCULO ONLINE
   Navbar, Mobile Menu, Scroll Reveal, Skill Bars
   ======================================================= */

'use strict';

/* ---- NAVBAR SCROLL ---- */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
})();

/* ---- MOBILE MENU ---- */
(function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  const toggle = () => {
    const isOpen = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggle);

  // Close on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();

/* ---- SCROLL REVEAL ---- */
(function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Stagger delay for timeline items and similar grid children
        const parent = entry.target.closest('.timeline, .skills-columns, .contact-cards, .tools-grid');
        if (parent) {
          const siblings = [...parent.querySelectorAll('[data-reveal]')];
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = (idx * 0.12) + 's';
        }
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
})();

/* ---- SKILL BARS ANIMATION ---- */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill[data-width]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(el => observer.observe(el));
})();

/* ---- ACTIVE NAV LINK ---- */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
        });
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) {
          active.style.color = '#f1f5f9';
        }
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
})();

/* ---- FOOTER YEAR ---- */
(function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();

console.log('%c Renan Bessa Abdo — Currículo Online 📄', 'color: #94a3b8; font-weight: 900; font-size: 14px;');
