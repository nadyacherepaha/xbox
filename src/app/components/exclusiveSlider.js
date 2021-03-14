import 'slick-carousel/slick/slick.js'
import $ from 'jquery';

$('.exclusive-slider').slick({
    autoplay: true,
    speed: 800,
    lazyLoad: 'progressive',
    slidesToShow: 3,
    slidesToScroll: 1,
})
