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
});


