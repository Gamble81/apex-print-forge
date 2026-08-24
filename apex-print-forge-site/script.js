const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.innerHTML = open ? 'Close <span>×</span>' : 'Menu <span>+</span>';
});

document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = 'Menu <span>+</span>';
}));

document.getElementById('year').textContent = new Date().getFullYear();
