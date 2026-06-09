/* =======================================================
   RENAN BESSA ABDO — PORTFOLIO JAVASCRIPT
   Animations, Typed Effect, Filters, Form Validation
   ======================================================= */

'use strict';

/* ---- CURSOR PERSONALIZADO ---- */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;
  if ('ontouchstart' in window) return; // skip on touch

  let fx = 0, fy = 0;
  let tx = 0, ty = 0;

  document.addEventListener('mousemove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    cursor.style.left = tx + 'px';
    cursor.style.top  = ty + 'px';
  });

  function animateFollower() {
    fx += (tx - fx) * 0.12;
    fy += (ty - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();
})();

/* ---- PARTÍCULAS DE FUNDO ---- */
(function initParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;

  const colors = ['#e2e8f0', '#94a3b8', '#cbd5e1', '#64748b', '#f1f5f9'];
  const count = window.innerWidth < 768 ? 20 : 40;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * 15;
    const duration = Math.random() * 15 + 10;
    const left = Math.random() * 100;

    Object.assign(p.style, {
      width: size + 'px',
      height: size + 'px',
      background: color,
      left: left + '%',
      animationDuration: duration + 's',
      animationDelay: delay + 's',
    });

    container.appendChild(p);
  }
})();

/* ---- NAVBAR SCROLL ---- */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
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
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();

/* ---- TYPED TEXT EFFECT ---- */
(function initTyped() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const roles = [
    'Desenvolvedor Full Stack',
    'Vibe Coder com IA ⚡',
    'Back-end com Node.js',
    'Front-end com React',
    'Desenvolvedor JavaScript',
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function type() {
    const current = roles[roleIndex];

    if (isPaused) {
      isPaused = false;
      setTimeout(type, 1200);
      return;
    }

    if (!isDeleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isPaused = true;
        isDeleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(type, isDeleting ? 50 : 90);
  }

  setTimeout(type, 1000);
})();

/* ---- SCROLL REVEAL ---- */
(function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal], [data-reveal-right]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay for grid children
        const parent = entry.target.closest('.skills-grid, .projects-grid, .about-stats, .tools-grid');
        if (parent) {
          const siblings = [...parent.querySelectorAll('[data-reveal]')];
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = (idx * 0.1) + 's';
        }
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  elements.forEach(el => observer.observe(el));
})();

/* ---- COUNTER ANIMATION ---- */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const update = () => {
          current = Math.min(current + step, target);
          entry.target.textContent = Math.floor(current);
          if (current < target) {
            requestAnimationFrame(update);
          } else {
            entry.target.textContent = target;
            if (target === 999) entry.target.textContent = '∞';
            if (target === 100) entry.target.textContent = '100';
          }
        };

        requestAnimationFrame(update);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ---- SKILL BARS ---- */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar[data-width]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.skill-bar-fill');
        if (fill) {
          fill.style.width = entry.target.dataset.width + '%';
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(el => observer.observe(el));
})();

/* ---- PROJECTS FILTER ---- */
(function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach((card, i) => {
        const category = card.dataset.category;
        const show = filter === 'all' || category === filter;

        if (show) {
          card.classList.remove('hidden');
          card.style.animationDelay = (i * 0.08) + 's';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();

/* ---- BACK TO TOP ---- */
(function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ---- FOOTER YEAR ---- */
(function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();

/* ---- CONTACT FORM ---- */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn  = document.getElementById('btn-submit-form');
  const btnText    = submitBtn?.querySelector('.btn-text');
  const btnLoading = submitBtn?.querySelector('.btn-loading');
  const successMsg = document.getElementById('form-success');

  const fields = {
    name:    { el: document.getElementById('contact-name'),    err: document.getElementById('error-name') },
    email:   { el: document.getElementById('contact-email'),   err: document.getElementById('error-email') },
    subject: { el: document.getElementById('contact-subject'), err: document.getElementById('error-subject') },
    message: { el: document.getElementById('contact-message'), err: document.getElementById('error-message') },
  };

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validate() {
    let valid = true;

    // Name
    if (!fields.name.el.value.trim()) {
      fields.name.err.textContent = 'Por favor, insira seu nome.';
      fields.name.el.style.borderColor = '#ef4444';
      valid = false;
    } else {
      fields.name.err.textContent = '';
      fields.name.el.style.borderColor = '';
    }

    // Email
    if (!fields.email.el.value.trim()) {
      fields.email.err.textContent = 'Por favor, insira seu e-mail.';
      fields.email.el.style.borderColor = '#ef4444';
      valid = false;
    } else if (!validateEmail(fields.email.el.value.trim())) {
      fields.email.err.textContent = 'E-mail inválido.';
      fields.email.el.style.borderColor = '#ef4444';
      valid = false;
    } else {
      fields.email.err.textContent = '';
      fields.email.el.style.borderColor = '';
    }

    // Subject
    if (!fields.subject.el.value.trim()) {
      fields.subject.err.textContent = 'Por favor, insira o assunto.';
      fields.subject.el.style.borderColor = '#ef4444';
      valid = false;
    } else {
      fields.subject.err.textContent = '';
      fields.subject.el.style.borderColor = '';
    }

    // Message
    if (!fields.message.el.value.trim() || fields.message.el.value.trim().length < 10) {
      fields.message.err.textContent = 'A mensagem deve ter pelo menos 10 caracteres.';
      fields.message.el.style.borderColor = '#ef4444';
      valid = false;
    } else {
      fields.message.err.textContent = '';
      fields.message.el.style.borderColor = '';
    }

    return valid;
  }

  // Real-time clear errors on input
  Object.values(fields).forEach(({ el, err }) => {
    el.addEventListener('input', () => {
      err.textContent = '';
      el.style.borderColor = '';
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Show loading state
    if (btnText && btnLoading) {
      btnText.hidden = true;
      btnLoading.hidden = false;
    }
    submitBtn.disabled = true;

    await new Promise(resolve => setTimeout(resolve, 1200));

    // Coleta os dados do formulário
    const name    = fields.name.el.value.trim();
    const email   = fields.email.el.value.trim();
    const subject = fields.subject.el.value.trim();
    const message = fields.message.el.value.trim();

    // Monta a mensagem formatada para o WhatsApp
    const whatsappMsg = 
      `👋 *Olá, Renan!*\n\n` +
      `*Nome:* ${name}\n` +
      `*E-mail:* ${email}\n` +
      `*Assunto:* ${subject}\n\n` +
      `*Mensagem:*\n${message}`;

    // Abre conversa no WhatsApp
    const whatsappUrl = `https://wa.me/5566992169482?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(whatsappUrl, '_blank');

    // Restaura botão
    if (btnText && btnLoading) {
      btnText.hidden = false;
      btnLoading.hidden = true;
    }
    submitBtn.disabled = false;

    // Exibe mensagem de sucesso
    if (successMsg) {
      successMsg.hidden = false;
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    form.reset();

    setTimeout(() => {
      if (successMsg) successMsg.hidden = true;
    }, 6000);
  });
})();

/* ---- SMOOTH ACTIVE NAV LINK ---- */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          link.style.fontWeight = '';
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

/* ---- HERO IMAGE TILT EFFECT ---- */
(function initTilt() {
  const wrapper = document.querySelector('.hero-image-wrapper');
  if (!wrapper || 'ontouchstart' in window) return;

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    wrapper.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    wrapper.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    wrapper.style.transition = 'transform 0.6s ease';
    setTimeout(() => { wrapper.style.transition = ''; }, 600);
  });
})();

/* ---- SCROLL PROGRESS BAR ---- */
(function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + '%';
  }, { passive: true });
})();

/* ---- MATRIX RAIN (GOLDEN) ---- */
(function initMatrixRain() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%アイウエオカキクケコ'.split('');
  const fontSize = 13;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(8, 8, 8, 0.045)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Gold gradient for characters
    ctx.font = fontSize + 'px JetBrains Mono, monospace';

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const opacity = Math.random() * 0.6 + 0.2;

      // Alternates between white-blue and muted slate
      if (Math.random() > 0.92) {
        ctx.fillStyle = `rgba(192, 207, 228, ${opacity + 0.3})`; // bright blue-silver
      } else {
        ctx.fillStyle = `rgba(100, 116, 139, ${opacity})`; // dim slate
      }

      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    // Recalculate columns on resize
    if (columns !== Math.floor(canvas.width / fontSize)) {
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    }
  }

  setInterval(draw, 50);
})();

/* ---- 3D TILT — PROJECT & SKILL CARDS ---- */
(function initCardTilt() {
  if ('ontouchstart' in window) return;

  const cards = document.querySelectorAll('.project-card, .skill-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;

      card.style.transform = `
        perspective(800px)
        rotateY(${x * 10}deg)
        rotateX(${-y * 10}deg)
        scale(1.02)
      `;
      card.style.transition = 'transform 0.1s ease';

      // Gold shine effect
      const shine = card.querySelector('.card-shine') || (() => {
        const s = document.createElement('div');
        s.className = 'card-shine';
        s.style.cssText = `
          position:absolute;inset:0;border-radius:inherit;
          pointer-events:none;z-index:1;
          background: radial-gradient(circle at ${(x+0.5)*100}% ${(y+0.5)*100}%,
            rgba(226,232,240,0.12) 0%, transparent 60%);
          transition: background 0.1s;
        `;
        card.style.position = 'relative';
        card.appendChild(s);
        return s;
      })();

      shine.style.background = `radial-gradient(circle at ${(x+0.5)*100}% ${(y+0.5)*100}%,
        rgba(226,232,240,0.12) 0%, transparent 60%)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)';
      card.style.transition = 'transform 0.5s var(--ease-out)';
      const shine = card.querySelector('.card-shine');
      if (shine) shine.style.background = 'none';
    });
  });
})();

console.log('%c Renan Bessa Abdo — Portfolio 🚀', 'color: #7c3aed; font-weight: 900; font-size: 16px;');
console.log('%c Feito com JavaScript puro e muito ☕', 'color: #94a3b8; font-size: 12px;');
