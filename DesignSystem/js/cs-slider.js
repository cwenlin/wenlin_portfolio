// ===========================
// Before / After Comparison Slider
// Extracted from: Beatrice Sung — Portfolio (main.js)
// ===========================

document.querySelectorAll('[data-slider]').forEach((slider) => {
  const beforeImg = slider.querySelector('.cs-slider__img--before');
  const divider = slider.querySelector('.cs-slider__divider');
  let dragging = false;

  function setPosition(clientX) {
    const rect = slider.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    beforeImg.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    divider.style.left = `${pct}%`;
  }

  slider.addEventListener('mousedown', (e) => { dragging = true; setPosition(e.clientX); });
  window.addEventListener('mousemove', (e) => { if (dragging) setPosition(e.clientX); });
  window.addEventListener('mouseup', () => { dragging = false; });

  slider.addEventListener('touchstart', (e) => { dragging = true; setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchmove', (e) => { if (dragging) setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('touchend', () => { dragging = false; });

  // Hint animation on scroll into view (plays once)
  const hintObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          slider.classList.add('is-hinting');
          divider.addEventListener('animationend', () => {
            slider.classList.remove('is-hinting');
          }, { once: true });
        }, 400);
        hintObserver.unobserve(slider);
      }
    });
  }, { threshold: 0.4 });

  hintObserver.observe(slider);
});
