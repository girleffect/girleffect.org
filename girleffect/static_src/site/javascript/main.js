import $ from './globals';
import 'owl.carousel';

$(function() {
    $('.js-carousel--full-width').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navContainer: '.js-full-width-nav',
        navText: ['&larr;','&rarr;'],
        loop: $('.owl-carousel .carousel__item').length > 1 ? true : false
    });

    if ($('.owl-carousel .carousel__item').length === 1) {
        $('.carousel__nav').hide();
    }
});
