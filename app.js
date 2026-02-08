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

  const animate = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          // 🔥 remove class so animation replays every time
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      threshold: 0.35
    }
   
  );

  animate.forEach(card => observer.observe(card));