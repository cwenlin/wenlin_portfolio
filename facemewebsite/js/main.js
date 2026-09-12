/* ==========================================================================
   FaceMe 官網設計 - Case Study Page interactions
   1. Header scroll state + scroll progress bar
   2. Mobile nav toggle
   3. Smooth-scroll active link close (mobile)
   4. Scroll-reveal animation (IntersectionObserver)
   5. Back-to-top button
   ========================================================================== */
(function () {
  'use strict';

  var header = document.getElementById('siteHeader');
  var progress = document.getElementById('scrollProgress');
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  var backToTop = document.getElementById('backToTop');
  var yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

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

  /* 5. Back-to-top button -----------------------------------------------------*/
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* 7. Before / After 互動比較切換 --------------------------------------------*/
  document.querySelectorAll('[data-compare]').forEach(function (widget) {
    var tabs = widget.querySelectorAll('.compare-tab');
    var panels = widget.querySelectorAll('.compare-panel');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var state = tab.getAttribute('data-state');
        tabs.forEach(function (t) { t.classList.toggle('is-active', t === tab); });
        panels.forEach(function (p) {
          p.classList.toggle('is-active', p.getAttribute('data-panel') === state);
        });
      });
    });
  });
})();
