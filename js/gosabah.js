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
