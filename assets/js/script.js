window.addEventListener("DOMContentLoaded", () => {
  $('.promo__slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="assets/img/left.png" alt="author"></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="assets/img/right.png" alt="author"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

  const menu = document.querySelector(".header__ul"),
    menuItem = document.querySelectorAll(".header__li"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("header__hamburger_active");
    menu.classList.toggle("header__nav_active");
  });


  menuItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      hamburger.classList.toggle("header__hamburger_active");
      menu.classList.toggle("header__nav_active");
    });
  });

  window.onscroll = function changeHeader() {
    const header = document.querySelector('.header'),
      headerWrapper = document.querySelector('.header__wrapper'), 
      logo = document.querySelector('.header__logo'),
      logoImage = logo.querySelector('img');

    if(window.pageYOffset > 200) {
      headerWrapper.style.flexDirection = 'row',
      headerWrapper.style.justifyContent = 'space-between';
      headerWrapper.style.padding = '10px 0 10px 0';
      header.style.backgroundColor = 'var(--main-color)';
      logo.style.marginBottom = '0';
      logoImage.style.width = '60px';
    } else {
      headerWrapper.style.flexDirection = 'column';
      header.style.backgroundColor = 'transparent';
      headerWrapper.style.padding = '20px 0 20px 0';
      logo.style.marginBottom = '30px';
      logoImage.style.width = '100%';
    }
  }

  let $root = $('html, body');
  $('a[href^="#"]').click(function () {
    let href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });

  lightGallery(document.querySelector('.gallery__gallery'));
  lightGallery(document.querySelector('.gallery__gallery2'));
  lightGallery(document.querySelector('.gallery__gallery3'));
});


