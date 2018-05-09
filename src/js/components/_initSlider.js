import slick from 'slick-carousel';

const slider = $('.js-slider');
slider
  .slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000
  });
