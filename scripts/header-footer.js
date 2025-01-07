// Smooth scrolling and mobile navigation
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });
  
  document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  });
  