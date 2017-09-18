import $ from './globals';
import 'owl.carousel';

import Hamburger from './../patterns/00-atoms/buttons/hamburger/hamburger.js';
import MobileNavToggle from './../patterns/00-atoms/buttons/mobile-nav-toggle/mobile-nav-toggle.js';
import MainNav from './../patterns/02-organisms/navs/main-nav.js';
import Video from './../patterns/01-molecules/video/video.js';
import Search from './../patterns/02-organisms/search/search.js';

// Open the header callback
function openHeader() {
    $('.header').find('.header__inner--nav').css({ top: 0 });
}

// Close the header callback.
function closeHeader() {
    $('.header').find('.header__inner--nav').css({ top: -99999 });
}

$(function() {
    $(Hamburger.selector()).each((index, el) => {
        new Hamburger($(el), openHeader, closeHeader);
    });

    $(MobileNavToggle.selector()).each((index, el) => {
        new MobileNavToggle($(el));
    });

    $(MainNav.selector()).each((index, el) => {
        new MainNav($(el), $);
    });

    $(Video.selector()).each((index, el) => {
        new Video($(el));
    });

    $(Search.selector()).each((index, el) => {
        new Search($(el), $('.header__search-button'));
    });

    $('.js-carousel--testimonials').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        navContainer: '.js-nav-testimonials',
        navText: ['','']
    });

    $('.js-carousel--featured-listing').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        navContainer: '.js-nav-featured-listing',
        navText: ['',''],
        autoWidth: true
    });
});
