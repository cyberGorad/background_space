document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.element-to-animate');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Ajoute la classe "visible"
        observer.unobserve(entry.target); // Stop l'observation après l'animation
      }
    });
  }, { threshold: 0.1 }); // 10% de visibilité suffit pour déclencher

  elements.forEach(el => observer.observe(el));
});
