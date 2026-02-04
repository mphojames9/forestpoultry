  const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

 document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.closest('.story-text');
      text.classList.toggle('open');
      btn.textContent = text.classList.contains('open')
        ? 'Read less'
        : 'Read more';
    });
  });

   const images = document.querySelectorAll('.hero-images img');
  let current = 0;

  // Initialize first image as active
  images[current].classList.add('active');

  setInterval(() => {
    // Remove active from current image
    images[current].classList.remove('active');

    // Move to next image (loop)
    current = (current + 1) % images.length;

    // Add active to next image
    images[current].classList.add('active');
  }, 6000); // 6000ms = 6 seconds