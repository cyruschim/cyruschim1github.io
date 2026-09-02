// Show mobile bottom nav on small screens
function handleResize() {
  const mobileNav = document.querySelector('.mobile-bottom-nav');
  if (window.innerWidth <= 768) {
    mobileNav.style.display = 'flex';
  } else {
    mobileNav.style.display = 'none';
  }
}
handleResize();
window.addEventListener('resize', handleResize);

// Header scroll behavior
const header = document.querySelector('.site-header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
}, { passive: true });

// Interest card selection
document.querySelectorAll('.interest-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.interest-card').forEach(c => {
      c.classList.remove('selected');
      c.setAttribute('aria-pressed', 'false');
    });
    card.classList.add('selected');
    card.setAttribute('aria-pressed', 'true');
  });
});

// Duration chip selection
document.querySelectorAll('.duration-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.duration-chip').forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
  });
});

// Alert bar dismiss
const alertBar = document.querySelector('.alert-bar');
const dismissBtn = alertBar?.querySelector('.dismiss-btn');
if (dismissBtn) {
  dismissBtn.addEventListener('click', () => {
    alertBar.style.display = 'none';
  });
}

// ==========================================
// HERO SLIDER — Five Wonders
// ==========================================
(function heroSlider() {
  const hero = document.querySelector('.hero');
  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  const dots = Array.from(document.querySelectorAll('.carousel-dot'));
  const pauseBtn = document.querySelector('.carousel-pause');
  const wonderLabel = document.getElementById('wonderLabel');
  const eyebrow = document.getElementById('heroEyebrow');
  if (!hero || !slides.length || !dots.length) return;

  const ACCENT_VARS = {
    olive: 'var(--rainforest-olive)',
    teal: 'var(--sea-route-teal)',
    earth: 'var(--borneo-earth)',
    orange: 'var(--journey-orange)',
  };

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const AUTOPLAY_MS = 6500;

  let index = slides.findIndex((s) => s.classList.contains('active'));
  if (index < 0) index = 0;
  let playing = !prefersReducedMotion;
  let timer = null;

  function applySlide(i) {
    slides.forEach((s, si) => s.classList.toggle('active', si === i));
    dots.forEach((d, di) => {
      const active = di === i;
      d.classList.toggle('active', active);
      d.setAttribute('aria-selected', String(active));
      d.tabIndex = active ? 0 : -1;
    });

    const slide = slides[i];
    const wonder = slide.dataset.wonder || '';
    const place = slide.dataset.place || '';
    const accentKey = slide.dataset.accent;

    if (wonderLabel) wonderLabel.textContent = `${wonder} — ${place}`;
    if (eyebrow && accentKey && ACCENT_VARS[accentKey]) {
      hero.style.setProperty('--wonder-accent', ACCENT_VARS[accentKey]);
    }
  }

  function goTo(i, { restart = true } = {}) {
    index = (i + slides.length) % slides.length;
    applySlide(index);
    if (restart) restartTimer();
  }

  function next() { goTo(index + 1); }

  function startTimer() {
    if (!playing) return;
    stopTimer();
    timer = window.setInterval(next, AUTOPLAY_MS);
  }

  function stopTimer() {
    if (timer) { window.clearInterval(timer); timer = null; }
  }

  function restartTimer() {
    if (playing) startTimer();
  }

  function setPlaying(next) {
    playing = next;
    if (pauseBtn) {
      pauseBtn.setAttribute('aria-pressed', String(!playing));
      pauseBtn.setAttribute('aria-label', playing ? 'Pause slideshow' : 'Play slideshow');
      pauseBtn.textContent = playing ? '❚❚' : '▶';
    }
    if (playing) startTimer(); else stopTimer();
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });

  // Arrow-key navigation across the tablist, per ARIA carousel/tablist pattern
  const dotsContainer = document.querySelector('.carousel-dots');
  if (dotsContainer) {
    dotsContainer.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); dots[index].focus(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); dots[index].focus(); }
    });
  }

  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => setPlaying(!playing));
  }

  // Pause on hover/focus within the hero so a reader isn't fighting the slide change
  hero.addEventListener('mouseenter', stopTimer);
  hero.addEventListener('mouseleave', restartTimer);
  hero.addEventListener('focusin', stopTimer);
  hero.addEventListener('focusout', restartTimer);

  // Pause when the tab isn't visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopTimer(); else restartTimer();
  });

  applySlide(index);
  setPlaying(playing);
})();
