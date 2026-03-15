/* ============================================
   SWATEXPLORER — main.js
   Shared across ALL pages
   ============================================ */

// ── NAV SCROLL EFFECT ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);

  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) scrollBtn.classList.toggle('show', window.scrollY > 400);
});

// ── MOBILE DRAWER ──
function toggleDrawer() {
  const h = document.getElementById('hamburger');
  const d = document.getElementById('mobileDrawer');
  const o = document.getElementById('drawerOverlay');
  if (!h || !d || !o) return;
  h.classList.toggle('open');
  d.classList.toggle('open');
  o.classList.toggle('open');
  document.body.style.overflow = d.classList.contains('open') ? 'hidden' : '';
}

// ── CLICK-BASED DROPDOWN ──
document.querySelectorAll('.has-drop').forEach(el => {
  el.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = el.classList.contains('open');
    document.querySelectorAll('.has-drop').forEach(d => d.classList.remove('open'));
    if (!isOpen) el.classList.add('open');
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.has-drop').forEach(d => d.classList.remove('open'));
});

// ── SCROLL ANIMATIONS ──
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll(
  '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger'
).forEach(el => revealObserver.observe(el));

// ── SMOOTH SCROLL for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ── SCROLL TO TOP ──
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── BOOKING SUBMIT (main page) ──
function submitBooking() {
  const nameEl = document.querySelector('#booking input[placeholder="Full name"]');
  if (nameEl && !nameEl.value.trim()) {
    alert('Please enter your name to continue.');
    nameEl.focus();
    return;
  }
  const name = nameEl ? nameEl.value.trim() : 'Traveller';
  alert(`🎉 Thank you, ${name}!\n\nYour booking request has been received. Our team will contact you within 24 hours to confirm your Swat adventure!\n\n✈ SwatExplorer Team`);
}