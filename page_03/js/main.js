/* ==========================================================================
   Digital Media Design — stacked video case study inner page
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
    initVideoAutoplay();
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
   * Video autoplay: every <video> in the stack is muted + loop, so once
   * it starts playing the browser keeps repeating it on its own. We just
   * make sure playback only runs while a clip is actually on screen
   * (pausing off-screen clips saves CPU/battery) and nudge .play() again
   * in case the browser's native "autoplay" attribute was blocked.
   * ------------------------------------------------------------------- */
  function initVideoAutoplay() {
    var videos = Array.prototype.slice.call(
      document.querySelectorAll(".video-media")
    );
    if (!videos.length) return;

    function tryPlay(video) {
      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function () {
          /* no playable source yet, or autoplay blocked — the poster
             image keeps showing until a real file is in place */
        });
      }
    }

    if (!("IntersectionObserver" in window)) {
      videos.forEach(tryPlay);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            tryPlay(entry.target);
          } else {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.35 }
    );

    videos.forEach(function (video) {
      observer.observe(video);
    });
  }
})();
