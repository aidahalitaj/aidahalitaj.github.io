/* ============================================
   Aida Halitaj — Portfolio
   Vanilla JS — No dependencies
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  /* ---- Hamburger Menu Toggle ---- */
  var hamburger = document.querySelector('.nav__hamburger');
  var navLinks = document.querySelector('.nav__links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('nav__links--open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    /* Close menu when a link is clicked */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('nav__links--open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    /* Close menu on click outside */
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('nav__links--open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Nav Shadow on Scroll ---- */
  var navHeader = document.querySelector('.nav');

  function updateNavShadow() {
    if (window.scrollY > 50) {
      navHeader.classList.add('nav--scrolled');
    } else {
      navHeader.classList.remove('nav--scrolled');
    }
  }

  if (navHeader) {
    window.addEventListener('scroll', updateNavShadow, { passive: true });
    updateNavShadow();
  }

  /* ---- Scroll Spy — Active Section Highlight ---- */
  var sections = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav__links a');

  if (sections.length && navAnchors.length) {
    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute('id');
            navAnchors.forEach(function (a) {
              a.classList.toggle('active', a.getAttribute('href') === '#' + id);
            });
          }
        });
      },
      {
        rootMargin: '-' + (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72) + 'px 0px -40% 0px',
        threshold: 0.15
      }
    );

    sections.forEach(function (section) {
      spyObserver.observe(section);
    });
  }

  /* ---- Project Category Filter ---- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      /* Update active button */
      filterBtns.forEach(function (b) {
        b.classList.toggle('active', b === btn);
      });

      /* Show / hide cards */
      projectCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ---- Fade-in on Scroll ---- */
  var fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length) {
    var fadeObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeEls.forEach(function (el) {
      fadeObserver.observe(el);
    });
  }

  /* ---- CV Request Modal ---- */
  var cvBtn = document.getElementById('cv-request-btn');
  var cvModal = document.getElementById('cv-modal');
  var cvClose = document.getElementById('cv-modal-close');

  function openModal() {
    cvModal.classList.add('active');
    cvModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var firstInput = cvModal.querySelector('input[type="text"]');
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    cvModal.classList.remove('active');
    cvModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (cvBtn && cvModal) {
    cvBtn.addEventListener('click', openModal);
    cvClose.addEventListener('click', closeModal);

    cvModal.addEventListener('click', function (e) {
      if (e.target === cvModal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && cvModal.classList.contains('active')) {
        closeModal();
      }
    });
  }
});
