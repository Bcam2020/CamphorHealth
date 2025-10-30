// Camphor Health interactions (light theme)

// Year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
});

// Reveal-on-scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Subtle parallax on hero logo
const p = document.querySelector('.parallax');
if (p) {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 6;
    const y = (e.clientY / window.innerHeight - 0.5) * 6;
    p.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}

// Demo form handler
function submitted(){
  alert('Thanks for your message — this demo form is not yet wired up.');
}
