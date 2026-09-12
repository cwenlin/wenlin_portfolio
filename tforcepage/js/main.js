/* ==========================================================================
   T-FORCE Gaming Campaign｜Case Study interactions
   架構沿用同一作品集 facemewebsite 5 / DesignSystem / petcareapp 的 main.js：
   1. Header scroll state + scroll progress bar
   2. Mobile nav toggle
   3. Smooth-scroll close (mobile)
   4. Scroll-reveal animation (IntersectionObserver)
   5. Stat counter animation
   6. Back-to-top button
   ========================================================================== */
(function () {
  'use strict';

  var header = document.getElementById('siteHeader');
  var progress = document.getElementById('scrollProgress');
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  var backToTop = document.getElementById('backToTop');

  /* 1. Header scroll state + progress bar --------------------------------- */
  function onScroll() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progress) progress.style.width = pct + '%';

    if (header) {
      if (scrollTop > 24) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }

    if (backToTop) {
      if (scrollTop > 480) backToTop.classList.add('visible');
      else backToTop.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* 2. Mobile nav toggle ----------------------------------------------------*/
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* 3. Close mobile nav after tapping a link */
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* 4. Scroll-reveal animation ----------------------------------------------*/
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* 5. Stat counter animation ------------------------------------------------*/
  var statEls = document.querySelectorAll('.stat-number');
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-target')) || 0;
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = parseInt(el.getAttribute('data-decimal'), 10) || 0;
    var duration = 1100;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progressRatio = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progressRatio, 3); /* ease-out-cubic */
      var current = target * eased;
      el.textContent = prefix + current.toFixed(decimals) + suffix;
      if (progressRatio < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target.toFixed(decimals) + suffix;
      }
    }
    window.requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window && statEls.length) {
    var statObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    statEls.forEach(function (el) { statObserver.observe(el); });
  } else {
    statEls.forEach(function (el) {
      var target = parseFloat(el.getAttribute('data-target')) || 0;
      var decimals = parseInt(el.getAttribute('data-decimal'), 10) || 0;
      el.textContent = (el.getAttribute('data-prefix') || '') + target.toFixed(decimals) + (el.getAttribute('data-suffix') || '');
    });
  }

  /* 6. Back-to-top button -----------------------------------------------------*/
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
