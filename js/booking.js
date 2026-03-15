/* ============================================
   SWATEXPLORER — booking.js
   booking.html only
   ============================================ */

const WA_NUM = '923305412327';
let selectedPkg = { name: 'Day Trip', price: 'Rs 2,500/person' };

// ── PACKAGE SELECT ──
function selectPkg(el, name, price) {
  document.querySelectorAll('.pkg-opt').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
  selectedPkg = { name, price };
}

// ── GENERATE REF ──
function genRef() {
  return 'SWT-' + Math.floor(100000 + Math.random() * 900000);
}

// ── FORMAT DATE ──
function fmtDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-PK', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ── CONFIRM BOOKING ──
function confirmBooking() {
  const name   = document.getElementById('f-name').value.trim();
  const phone  = document.getElementById('f-phone').value.trim();
  const dest   = document.getElementById('f-dest').value;
  const date   = document.getElementById('f-date').value;

  if (!name)  { alert('Please enter your full name.');     document.getElementById('f-name').focus();  return; }
  if (!phone) { alert('Please enter your WhatsApp number.'); document.getElementById('f-phone').focus(); return; }
  if (!dest)  { alert('Please choose a destination.');     document.getElementById('f-dest').focus();  return; }
  if (!date)  { alert('Please select your travel date.');  document.getElementById('f-date').focus();  return; }

  const guests     = document.getElementById('f-guests').value;
  const type       = document.getElementById('f-type').value   || '—';
  const hotel      = document.getElementById('f-hotel').value;
  const budget     = document.getElementById('f-budget').value;
  const notes      = document.getElementById('f-notes').value.trim();
  const returnDate = document.getElementById('f-return').value;
  const ref        = genRef();

  // Fill summary modal
  document.getElementById('s-name').textContent   = name;
  document.getElementById('s-phone').textContent  = phone;
  document.getElementById('s-dest').textContent   = dest;
  document.getElementById('s-type').textContent   = type;
  document.getElementById('s-pkg').textContent    = `${selectedPkg.name} – ${selectedPkg.price}`;
  document.getElementById('s-guests').textContent = guests;
  document.getElementById('s-date').textContent   = fmtDate(date) + (returnDate ? ` → ${fmtDate(returnDate)}` : '');
  document.getElementById('s-hotel').textContent  = hotel;
  document.getElementById('s-budget').textContent = budget;
  document.getElementById('s-ref').textContent    = ref;

  // Build WhatsApp message
  const msg = encodeURIComponent(
    `🏔 *SwatExplorer Booking Request*\n` +
    `Ref: ${ref}\n\n` +
    `👤 Name: ${name}\n` +
    `📱 Phone: ${phone}\n` +
    `🗺 Destination: ${dest}\n` +
    `🎯 Trip Type: ${type}\n` +
    `📦 Package: ${selectedPkg.name} – ${selectedPkg.price}\n` +
    `👥 Guests: ${guests}\n` +
    `📅 Date: ${fmtDate(date)}${returnDate ? ' → ' + fmtDate(returnDate) : ''}\n` +
    `🏨 Stay: ${hotel}\n` +
    `💰 Budget: ${budget}\n` +
    (notes ? `✏️ Notes: ${notes}\n` : '') +
    `\nPlease confirm my booking. Thank you!`
  );

  document.getElementById('modalWaBtn').href = `https://wa.me/${WA_NUM}?text=${msg}`;
  document.getElementById('step2').classList.add('active');
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── CLOSE MODAL ──
function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ── QUICK WHATSAPP BUTTON ──
document.addEventListener('DOMContentLoaded', () => {
  const waQuick = document.getElementById('waQuickBtn');
  if (waQuick) {
    waQuick.addEventListener('click', e => {
      e.preventDefault();
      const name = document.getElementById('f-name').value.trim() || 'a visitor';
      const dest = document.getElementById('f-dest').value || 'Swat Valley';
      const msg  = encodeURIComponent(`Hi! I'm ${name} and I want to book a trip to ${dest}. Please help me plan!`);
      window.open(`https://wa.me/${WA_NUM}?text=${msg}`, '_blank');
    });
  }

  // Step 3 when WhatsApp clicked
  const modalWa = document.getElementById('modalWaBtn');
  if (modalWa) {
    modalWa.addEventListener('click', () => {
      document.getElementById('step3').classList.add('active', 'done');
      document.getElementById('step2').classList.add('done');
      setTimeout(() => closeModal(), 400);
    });
  }
});