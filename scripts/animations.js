document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transition = 'opacity 1s';
      setTimeout(() => el.style.opacity = 1, 300);
    });
  });
  