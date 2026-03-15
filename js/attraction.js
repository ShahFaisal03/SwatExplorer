/* ============================================
   SWATEXPLORER — attraction.js
   Shared across ALL attraction pages
   ============================================ */

// ── LIGHTBOX ──
function openLightbox(el) {
  const src = el.querySelector('img').src;
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// Close lightbox with Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// ── PACKAGE SELECTOR ──
function selectPkg(el) {
  document.querySelectorAll('.pkg').forEach(p => p.classList.remove('active'));
  el.classList.add('active');

  // Sync select dropdown if exists
  const sel = document.getElementById('pkgSelect');
  if (!sel) return;
  const name = el.querySelector('h4').textContent.replace(/[^\w\s]/g, '').trim();
  for (let o of sel.options) {
    if (o.text.toLowerCase().includes(name.toLowerCase().split(' ')[0])) {
      sel.value = o.value;
      break;
    }
  }
}

// ── BOOKING SUBMIT ──
function submitBooking() {
  const name = document.querySelector('.booking-form input[type="text"]');
  if (name && !name.value.trim()) {
    alert('Please enter your name to continue.');
    name.focus();
    return;
  }
  const pageName = document.title.split('–')[0].trim();
  alert(`🎉 Booking received!\n\nWe will confirm your ${pageName} trip within 24 hours via WhatsApp.\n\nThank you for choosing SwatExplorer! 🏔`);
}