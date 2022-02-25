/* #Header
  ======================================================= */
const header = document.querySelector('.header');

// Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-scroll');
  } else {
    header.classList.remove('header-scroll');
  }
});

if (window.scrollY > 50) {
  header.classList.add('header-scroll');
} else {
  header.classList.remove('header-scroll');
}

/* #Banner
  ======================================================= */
if (document.querySelector('.banner .swiper')) {
  new Swiper(".banner .swiper", {
    pagination: {
      el: ".banner .swiper-pagination",
    },
  });
}

/* #Media Box
  ======================================================= */
if (document.querySelector('.media-box .swiper')) {
  const mediaBoxes = document.querySelectorAll('.media-box');

  mediaBoxes.forEach((box) => {
    const slider = box.querySelector('.swiper');
    const pagination = box.querySelector('.swiper-pagination');
    const next = box.querySelector('.next');
    const prev = box.querySelector('.prev');

    new Swiper(slider, {
      pagination: {
        el: pagination,
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });
  })
}

/* #Graduates
  ======================================================= */
if (document.querySelector('.graduates .swiper')) {
  new Swiper(".graduates .swiper", {
      
      pagination: {
        el: ".graduates .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".graduates .next",
        prevEl: ".graduates .prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          grid: {
            rows: 1,
          },
        },
        1024: {
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
        }
      }
  });
}

/* #Logos
  ======================================================= */
if (document.querySelector('.running-logos .swiper')) {
  new Swiper(".running-logos .swiper", {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1
    },
    allowTouchMove: false,
    freeMode: true,
    speed: 4000,
    freeModeMomentum: false,
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 9,
      }
    }
  });
}