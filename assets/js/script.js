document.addEventListener('DOMContentLoaded', function () {
  // SwiperJS initialisation
  var swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    grabCursor: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      505: {
        slidesPerView: 1.4,
        spaceBetween: 10,
      },
      990: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1080: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      1380: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // Delay hero image on load for fade in effect
  const image = document.getElementById('heroImage');
  setTimeout(() => {
    image.classList.add('visible');
  }, 2000);

  // Sticky header
  let lastScrollTop = 0;
  const header = document.querySelector('header');

  // Make sure the header is visible on first load
  header.classList.add('sticky');
  header.classList.add('visible');

  window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      header.classList.remove('sticky');
      header.classList.remove('visible');
    } else {
      // Scrolling up
      header.classList.add('sticky');
      // Use setTimeout to add the 'visible' class after a short delay
      setTimeout(() => {
        header.classList.add('visible');
      }, 50);
    }

    // Update lastScrollTop
    lastScrollTop = Math.max(currentScroll, 0);
  });
});
