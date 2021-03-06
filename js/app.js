/* #Header
  ======================================================= */
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header-hamburger');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    hamburgerBtn.classList.toggle('is-active');
    header.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');

    if (header.classList.contains('show-search')) {
      header.classList.remove('show-search');
    }
  });
}

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
  if (!document.querySelector('.graduates-page')) {
    if (document.querySelector('.donates-page') || document.querySelector('.category-page')) {
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
          },
          1024: {
            slidesPerView: 3,
          }
        }
      });
    } else {
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
  }
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

/* #About Section 2 Slider
  ======================================================= */
if (document.querySelector('.about-section-2 .swiper')) {
  new Swiper(".about-section-2 .swiper", {
    pagination: {
      el: ".about-section-2 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".about-section-2 .next",
      prevEl: ".about-section-2 .prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.15,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });
}

/* #Popup Video Iframe
  ======================================================= */
function stopIframeVideo(iframe) {
  const url = iframe.getAttribute('src');
  iframe.setAttribute('src', '');
  iframe.setAttribute('src', url);
}

const videoPopup = document.querySelector('.video-popup');
const videoPopupIframe = document.querySelector('.video-popup iframe');

if (videoPopup) {
  videoPopup.addEventListener('click', (e) => {
    if (e.target.closest('.popup-close') || !e.target.closest('.video')) {
      stopIframeVideo(videoPopupIframe);
    }
  });
}

/* #Commercial
  ======================================================= */
if (document.querySelector('.commercial .swiper')) {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach((slider) => {
    const swiper = slider.querySelector('.swiper');
    const next = slider.querySelector('.next');
    const prev = slider.querySelector('.prev');
    const pagination = slider.querySelector('.swiper-pagination');

    new Swiper(swiper, {
      pagination: {
        el: pagination,
        clickable: true,
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
        0: {
          slidesPerView: 2.3,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });
  });
}

/* #Gallery
  ======================================================= */
if (document.querySelector('.gallery .swiper')) {
  const slider = document.querySelector('.gallery .swiper');
  const pagination = document.querySelector('.gallery .swiper-pagination');
  const next = document.querySelector('.gallery .next');
  const prev = document.querySelector('.gallery .prev');

  new Swiper(slider, {
    breakpoints: {
      0: {
        slidesPerView: 1.22
      },
      1024: {
        slidesPerView: 2.23
      }
    },
    pagination: {
      el: pagination,
    },
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
  });
}

/* #Track
  ======================================================= */
if (document.querySelector('.track .swiper')) {
  const slider = document.querySelector('.track .swiper');
  const pagination = document.querySelector('.track .swiper-pagination');
  const next = document.querySelector('.track .next');
  const prev = document.querySelector('.track .prev');

  new Swiper(slider, {
    centeredSlides: true,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 3
      }
    },
    pagination: {
      el: pagination,
    },
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
  });
}