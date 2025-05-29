// Password Gate
const gate = document.getElementById('password-gate');
const input = document.getElementById('gate-input');
const submit = document.getElementById('gate-submit');
const errorMsg = document.getElementById('gate-error');

// 🔐 Change this password
const PASSWORD = 'butterflies';

submit.addEventListener('click', () => {
  if (input.value === PASSWORD) {
    gate.style.display = 'none';
  } else {
    errorMsg.hidden = false;
  }
});
input.addEventListener('keyup', e => {
  if (e.key === 'Enter') submit.click();
});

// Scroll-triggered animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.page').forEach(section => {
  observer.observe(section);
});