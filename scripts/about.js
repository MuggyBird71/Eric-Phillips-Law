// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  
  // Carousel functionality
  let index = 0;
  const carousel = document.getElementById('carousel');
  const items = document.querySelectorAll('.carousel-item');
  
  setInterval(() => {
    index = (index + 1) % items.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);
  