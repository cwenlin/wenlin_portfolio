/* ==========================================================================
   Digital Media Design — case study inner page
   main.js — all interactivity and micro-animations live here.
   ========================================================================== */

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  document.addEventListener("DOMContentLoaded", function () {
    initHeaderScrollState();
    initMobileNav();
    initScrollReveal();
    initBackToTop();
    initScrollProgress();
    initFooterYear();
    initLightbox();
  });

  /* ---------------------------------------------------------------------
   * Header: adds a background/shadow once the page has scrolled a bit.
   * ------------------------------------------------------------------- */
  function initHeaderScrollState() {
    var header = document.getElementById("siteHeader");
    if (!header) return;

    function update() {
      if (window.scrollY > 8) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ---------------------------------------------------------------------
   * Mobile nav: hamburger toggle + auto-close on link click / resize.
   * ------------------------------------------------------------------- */
  function initMobileNav() {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("mainNav");
    if (!toggle || !nav) return;

    function closeNav() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    function openNav() {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.contains("is-open");
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    nav.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 780) {
        closeNav();
      }
    });
  }

  /* ---------------------------------------------------------------------
   * Scroll reveal: fades/slides elements in as they enter the viewport.
   * ------------------------------------------------------------------- */
  function initScrollReveal() {
    var items = Array.prototype.slice.call(
      document.querySelectorAll("[data-reveal]")
    );
    if (!items.length) return;

    items.forEach(function (el) {
      var delay = el.getAttribute("data-reveal-delay");
      if (delay) {
        el.style.setProperty("--reveal-delay", delay);
      }
    });

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------------------------------------------------------------------
   * Back-to-top button.
   * ------------------------------------------------------------------- */
  function initBackToTop() {
    var btn = document.getElementById("backToTop");
    if (!btn) return;

    function update() {
      if (window.scrollY > 480) {
        btn.classList.add("is-visible");
      } else {
        btn.classList.remove("is-visible");
      }
    }

    update();
    window.addEventListener("scroll", update, { passive: true });

    btn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  }

  /* ---------------------------------------------------------------------
   * Scroll progress bar across the very top of the page.
   * ------------------------------------------------------------------- */
  function initScrollProgress() {
    var bar = document.getElementById("scrollProgress");
    if (!bar) return;

    function update() {
      var scrollTop = window.scrollY;
      var docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + "%";
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  /* ---------------------------------------------------------------------
   * Footer year.
   * ------------------------------------------------------------------- */
  function initFooterYear() {
    var el = document.getElementById("year");
    if (!el) return;
    el.textContent = String(new Date().getFullYear());
  }

  /* ---------------------------------------------------------------------
   * Lightbox: fullscreen modal gallery with Previous / Next / Close.
   * ------------------------------------------------------------------- */
  function initLightbox() {
    var cards = Array.prototype.slice.call(
      document.querySelectorAll(".gallery-card")
    );
    var lightbox = document.getElementById("lightbox");
    if (!cards.length || !lightbox) return;

    var overlay = document.getElementById("lightboxOverlay");
    var closeBtn = document.getElementById("lightboxClose");
    var prevBtn = document.getElementById("lightboxPrev");
    var nextBtn = document.getElementById("lightboxNext");
    var stageImage = document.getElementById("lightboxImage");
    var counter = document.getElementById("lightboxCounter");

    var items = cards.map(function (card) {
      var img = card.querySelector("img");
      return {
        src: img ? img.getAttribute("src") : "",
        alt: img ? img.getAttribute("alt") : "",
      };
    });

    var currentIndex = 0;
    var lastFocusedEl = null;

    function renderImage(index, animate) {
      var item = items[index];
      if (!item) return;

      if (animate && !prefersReducedMotion) {
        stageImage.classList.add("is-swapping");
        window.setTimeout(function () {
          stageImage.src = item.src;
          stageImage.alt = item.alt;
          stageImage.classList.remove("is-swapping");
        }, 150);
      } else {
        stageImage.src = item.src;
        stageImage.alt = item.alt;
      }

      counter.textContent = (index + 1) + " / " + items.length;
    }

    function open(index) {
      currentIndex = index;
      lastFocusedEl = document.activeElement;
      renderImage(currentIndex, false);
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("lightbox-open");
      closeBtn.focus();
      document.addEventListener("keydown", handleKeydown);
    }

    function close() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("lightbox-open");
      document.removeEventListener("keydown", handleKeydown);
      if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
        lastFocusedEl.focus();
      }
    }

    function showPrev() {
      var nextIndex = (currentIndex - 1 + items.length) % items.length;
      currentIndex = nextIndex;
      renderImage(currentIndex, true);
    }

    function showNext() {
      var nextIndex = (currentIndex + 1) % items.length;
      currentIndex = nextIndex;
      renderImage(currentIndex, true);
    }

    function handleKeydown(event) {
      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowLeft") {
        showPrev();
      } else if (event.key === "ArrowRight") {
        showNext();
      }
    }

    cards.forEach(function (card, index) {
      card.addEventListener("click", function () {
        open(index);
      });
    });

    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", close);
    prevBtn.addEventListener("click", showPrev);
    nextBtn.addEventListener("click", showNext);
  }
})();
