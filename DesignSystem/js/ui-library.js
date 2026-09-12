/* ==========================================================================
   UI Library — interactions
   Lightweight scroll-reveal for each section card. Progressive enhancement:
   the page looks correct with zero JS; this only adds a subtle fade/slide-in
   once a card scrolls into view.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('[data-animate]');

  if (!('IntersectionObserver' in window) || cards.length === 0) {
    return; // cards are visible by default in CSS — nothing to do
  }

  // Opt in to the animated state only now that we know JS + IO are available.
  document.documentElement.classList.add('js-ready');
  cards.forEach((card) => card.classList.add('pre-animate'));

  const revealNow = (card, delay) => {
    window.requestAnimationFrame(() => {
      setTimeout(() => card.classList.add('is-visible'), delay);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealNow(entry.target, 0);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  cards.forEach((card, index) => {
    // Reveal anything already on screen immediately (with a tiny stagger)
    // instead of waiting on an observer callback that may lag behind a
    // fast initial render.
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      revealNow(card, index * 80);
    } else {
      observer.observe(card);
    }
  });
});
