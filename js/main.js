// Toggle mobile nav
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('nav ul');
if (burger) {
  burger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(r => observer.observe(r));
