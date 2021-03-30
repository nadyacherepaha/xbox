import 'slick-carousel/slick/slick.js'
import $ from 'jquery';

$('.slider').slick({
  autoplay: true,
  speed: 800,
  lazyLoad: 'progressive',
  dots: true,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
    ]
})
