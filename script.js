// Dynamically load modular sections
const sections = [
  { id: 'hero', file: 'hero.html' },
  { id: 'about', file: 'about.html' },
  { id: 'projects', file: 'projects.html' },
  { id: 'footer', file: 'footer.html' }
];
sections.forEach(section => {
  fetch(section.file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(section.id).innerHTML = html;
    });
});
// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
}); 