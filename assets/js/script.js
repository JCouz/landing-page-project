document.addEventListener('DOMContentLoaded', function () {
  // SwiperJS initialisation
  var swiper = new Swiper('.swiper', {
    slidesPerView: '1',
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
  }, 1500);

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
  // Target element to insert USPs into
  const uspGrid = document.getElementById('uspGrid');
  // Insert USP for each object in data
  uspPoints.forEach((usp) => {
    const uspCard = document.createElement('div');
    uspCard.className = 'usp__card';
    uspCard.innerHTML = `
        <div class="usp__card-header">
        <div class="usp__icon-container">
            <img src="${usp.icon}" alt="${usp.title}" class="usp__icon">
            </div>
            <h6 class="usp__card-title">${usp.title}</h6>
        </div>
        <p class="usp__card-description">${usp.description}</p>

    `;
    uspGrid.appendChild(uspCard);
  });

  /* Script to update copyright year automatically. It's a pet peeve of mine to see out of date
   copyright years when a simple script can prevent it. */
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Accordion for image text section
  const accordionHeaders = document.querySelectorAll(
    '.image-text__accordion-header'
  );

  accordionHeaders.forEach((header) => {
    header.addEventListener('click', function () {
      // Toggle the active class and content display
      const content = this.nextElementSibling;
      const isActive = this.classList.toggle('active');
      // I like to use ternary operators when I remember they exist...
      content.style.display = isActive ? 'block' : 'none';

      // Close other open accordions
      accordionHeaders.forEach((otherHeader) => {
        if (otherHeader !== this) {
          // Ensure other accordion elements are closed
          otherHeader.classList.remove('active');
          otherHeader.nextElementSibling.style.display = 'none';
        }
      });
    });
  });
});
