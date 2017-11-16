import $ from './globals';
import 'owl.carousel';
import 'featherlight';

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
        dots: true,
        navContainer: '.js-full-width-nav',
        navText: ['<svg class="carousel__nav-left"><use xlink:href="#arrow"></use></svg>','<svg class="carousel__nav-right"><use xlink:href="#arrow"></use></svg>'],
        loop: $('.owl-carousel .carousel__item').length > 1 ? true : false
    });

    if ($('.owl-carousel .carousel__item').length === 1) {
        $('.carousel__nav').hide();
    }

    $('.js-article-filter').on('change', function() {
        var url = $(this).val();

        if (url) {
            window.location = `?category=${url}`;
            return false;
        }
        window.location = '/stories/';
        return false;
    });

    $('.js-modal').featherlight({
        targetAttr: 'href',
        variant: 'modal-container', // add class for custom styling
        afterOpen: () => {
            const video = $('.featherlight iframe')[0];
            video.src += '&autoplay=1';
        }
    });

    $('.js-search-desktop').on('click', function() {
        $(this).toggleClass('is-active');
        const headerHeight = $('.header').outerHeight();
        const searchBar = $('.header__search-bar--desktop');
        const form = $('.form--search');

        $(searchBar).css('top', headerHeight);
        $(form).removeClass('visible');
        $(searchBar).slideToggle(250, function() {
            $(form).addClass('visible');
            $('.input--search').focus();
        });
    });

    $('.js-search-mobile').on('click', function() {
        $('.header__search-bar--mobile').addClass('is-visible');
        $('.input--search').focus();
    });

    $('.js-close-search-mobile').on('click', function() {
        $('.header__search-bar--mobile').removeClass('is-visible');
    });
});
