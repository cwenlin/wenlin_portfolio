/* ==========================================================================
   Wenlin Chen — Design Portfolio
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
    initScrollSpy();
    initScrollReveal();
    initCountUp();
    initBackToTop();
    initScrollProgress();
    initFooterYear();
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
   * Scrollspy: highlights the nav link matching the section in view.
   * ------------------------------------------------------------------- */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll(".nav-link")
    );
    if (!links.length || !("IntersectionObserver" in window)) return;

    var sections = links
      .map(function (link) {
        var id = link.getAttribute("href");
        if (!id || id.charAt(0) !== "#") return null;
        return document.querySelector(id);
      })
      .filter(Boolean);

    if (!sections.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = links.find(function (l) {
            return l.getAttribute("href") === "#" + entry.target.id;
          });
          if (!link) return;
          if (entry.isIntersecting) {
            links.forEach(function (l) {
              l.classList.remove("is-active");
            });
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
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
   * Count-up: animates the hero stat numbers once they scroll into view.
   * ------------------------------------------------------------------- */
  function initCountUp() {
    var counters = Array.prototype.slice.call(
      document.querySelectorAll(".count-up")
    );
    if (!counters.length) return;

    function animateCounter(el) {
      var target = parseInt(el.getAttribute("data-count-to"), 10) || 0;

      if (prefersReducedMotion) {
        el.textContent = String(target);
        return;
      }

      var duration = 1400;
      var start = null;

      function step(timestamp) {
        if (start === null) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.round(eased * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCounter);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    counters.forEach(function (el) {
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
})();
