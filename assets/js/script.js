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

  // JS to inject USPs into html for the USP section

  // USP data
  const uspPoints = [
    {
      icon: '/assets/images/clock-dark.svg',
      title: 'Timeless Icon Since 1873',
      description:
        'The original blue jeans that set the standard for over 150 years.',
    },
    {
      icon: '/assets/images/heart.svg',
      title: 'Classic Design, Eternal Appeal',
      description: 'Signature straight fit with a modern cropped silhouette.',
    },
    {
      icon: '/assets/images/canvas.svg',
      title: 'Canvas for Your Style',
      description: 'A blank canvas for customization and self-expression.',
    },
    {
      icon: '/assets/images/scissors.svg',
      title: 'Iconic Fit Details',
      description: 'Sits at waist, 11 1/4" front rise, 16" leg opening.',
    },
    {
      icon: '/assets/images/wrench.svg',
      title: 'Quality Construction',
      description:
        '100% Cotton, non-stretch fabric, button fly, 5-pocket styling.',
    },
  ];

  const uspGrid = document.getElementById('uspGrid');

  uspPoints.forEach((usp) => {
    const uspItem = document.createElement('div');
    uspItem.className = 'usp__item';
    uspItem.innerHTML = `
        <div class="usp__item-header">
        <div class="usp__icon-container">
            <img src="${usp.icon}" alt="${usp.title}" class="usp__icon">
            </div>
            <h6 class="usp__item-title">${usp.title}</h6>
        </div>
        <p class="usp__item-description">${usp.description}</p>

    `;
    uspGrid.appendChild(uspItem);
  });
});
