/* ============================================
   Vita Raíz — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Header scroll shadow ---
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // --- Mobile menu ---
  const menuOpen = document.getElementById('mobile-menu-open');
  const menuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOverlay = document.getElementById('mobile-menu-overlay');
  const menuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  function openMenu() {
    mobileMenu.classList.add('open');
    menuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuOpen) menuOpen.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);
  if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);
  menuLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // --- Product filter tabs ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Update active tab
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      productCards.forEach(function (card) {
        const categories = card.getAttribute('data-categories');
        if (filter === 'todos' || categories.includes(filter)) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.9)';
          requestAnimationFrame(function () {
            card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.9)';
          setTimeout(function () { card.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');
      // Close all
      faqItems.forEach(function (i) { i.classList.remove('open'); });
      // Open clicked if was closed
      if (!isOpen) item.classList.add('open');
    });
  });

  // --- WhatsApp button ---
  const waBtn = document.querySelector('.whatsapp-btn');
  if (waBtn) {
    waBtn.addEventListener('click', function () {
      window.open('https://wa.me/573150999272?text=Hola%20Vita%20Raíz', '_blank', 'noopener,noreferrer');
    });
  }

  // --- Scroll animations (Intersection Observer) ---
  const animElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '-30px' });

    animElements.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show all
    animElements.forEach(function (el) { el.classList.add('visible'); });
  }

  // --- Stagger children animation delay ---
  document.querySelectorAll('[data-stagger]').forEach(function (parent) {
    const children = parent.children;
    for (var i = 0; i < children.length; i++) {
      children[i].style.transitionDelay = (i * 0.08) + 's';
    }
  });

  // --- Wholesale form ---
  const wholesaleForm = document.getElementById('wholesale-form');
  if (wholesaleForm) {
    wholesaleForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = wholesaleForm.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      // Simulate submission (replace with real endpoint)
      setTimeout(function () {
        btn.textContent = '¡Solicitud enviada!';
        btn.style.background = 'var(--olive)';
        wholesaleForm.reset();
        setTimeout(function () {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }
});
