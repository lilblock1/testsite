const toggleMenu = document.getElementById('toggle-menu');
const nav = document.querySelector('nav');

toggleMenu.addEventListener('click', () => {
  nav.classList.toggle('expanded');
});