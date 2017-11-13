import $ from './globals';
import 'owl.carousel';
import 'scrolltofixed';

import Hamburger from './../patterns/00-atoms/buttons/hamburger/hamburger.js';

// Open the header callback
function openHeader() {
    $('.header').find('.header__row').slideDown(200);
}

// Close the header callback.
function closeHeader() {
    $('.header').find('.header__row').slideUp(200, () => {
        this.node.next().removeAttr('style');
    });
}

$(function() {
    $(Hamburger.selector()).each((index, el) => {
        new Hamburger($(el), openHeader, closeHeader);
    });

    $('.video__button').on('click', function(ev) {
        const video = $(this).parent().siblings().find('iframe');
        const overlay = $(this).parent('.video__overlay');
        $(video)[0].src += '&autoplay=1';
        $(overlay).hide();
        ev.preventDefault();
    });

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

    $('.js-share-icons').scrollToFixed({
        marginTop: 30,
        limit: $($('.section--downloads')).offset().top - $('.js-share-icons').outerHeight(true) - 30
    });
});
