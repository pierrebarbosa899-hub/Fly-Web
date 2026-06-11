

// Form submit
function handleSubmit(e) {
  const btn = e.target;
  btn.textContent = '✓ Mensagem enviada!';
  btn.style.background = 'var(--teal)';
  btn.style.color = 'var(--dark)';
  setTimeout(() => {
    btn.textContent = 'Enviar mensagem →';
    btn.style.background = '';
    btn.style.color = '';
  }, 3000);
}

// Smooth active nav highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--purple)' : '';
  });
});
