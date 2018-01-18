import $ from './globals';
import 'owl.carousel';
import 'scrolltofixed';
import 'featherlight';

import Hamburger from './../patterns/00-atoms/buttons/hamburger/hamburger.js';

// Open the header callback
function openHeader() {
    $('.header')
        .addClass('nav-open')
        .find('.header__row')
        .fadeIn(250);
}

// Close the header callback.
function closeHeader() {
    $('.header')
        .removeClass('nav-open')
        .find('.header__row')
        .fadeOut(250, () => {
            this.node.next().removeAttr('style');
        });
}

// Change carousel component to owl carousel
function setCarousel() {
    $('.js-carousel').addClass('owl-carousel');

    $('.js-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: true
    });
}

function isMobileScreen() {
    return $(window).width() < 768;
}

function isOwlCarousel() {
    return $('.js-carousel').hasClass('owl-carousel');
}

function removeCarousel() {
    let carousel = $('.owl-carousel');
    carousel
        .trigger('destroy.owl.carousel')
        .removeClass('owl-carousel owl-loaded');
    carousel
        .find('.owl-stage-outer')
        .children()
        .unwrap();
}

$(function() {
    $(Hamburger.selector()).each((index, el) => {
        new Hamburger($(el), openHeader, closeHeader);
    });

    // Autoplays YouTube embed in a video streamfield
    $('.video__button').on('click', function(ev) {
        const video = $(this)
            .parent()
            .siblings()
            .find('iframe');
        const overlay = $(this).parent('.video__overlay');
        $(video)[0].src += '&autoplay=1&modestbranding=1&showinfo=0';
        $(overlay).hide();
        ev.preventDefault();
    });

    // Full width carousel streamfield
    $('.js-carousel--full-width').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoHeight: false,
        navContainer: '.js-full-width-nav',
        navText: [
            '<svg class="carousel__nav-left"><use xlink:href="#arrow"></use></svg>',
            '<svg class="carousel__nav-right"><use xlink:href="#arrow"></use></svg>'
        ],
        loop: $('.owl-carousel .carousel__item').length > 1 ? true : false
    });

    // Hide the carousel nav if there's only one slide - relies on the result of the loop ternary above
    if ($('.owl-carousel .carousel__item').length === 1) {
        $('.carousel__nav').hide();
    }

    // Filters articles via the category id
    $('.js-article-filter').on('change', function() {
        var url = $(this).val();

        if (url) {
            window.location = `?category=${url}`;
            return false;
        }
        window.location = '/stories/';
        return false;
    });

    // Modal that autoplays a YouTube embed
    $('.js-modal').featherlight({
        targetAttr: 'href',
        variant: 'modal-container', // add class for custom styling
        afterOpen: () => {
            const video = $('.featherlight iframe')[0];
            video.src += '&autoplay=1&modestbranding=1&showinfo=0';
        }
    });

    // Desktop search
    $('.js-search-desktop').on('click', function() {
        $(this).toggleClass('is-active');
        const headerHeight = $('.header').outerHeight();
        const searchBar = $('.header__search-bar--desktop');
        const form = $('.form--search');

        $(searchBar).css('top', headerHeight); // get the header height so the search bar displays in the correct place
        $(form).removeClass('visible');
        $(searchBar).slideToggle(250, function() {
            $(form).addClass('visible');
            $('.input--search').focus();
        });
    });

    // Mobile search open
    $('.js-search-mobile').on('click', function() {
        $('.header__search-bar--mobile').addClass('is-visible');
        $('.input--search').focus();
    });

    // Mobile search close
    $('.js-close-search-mobile').on('click', function() {
        $('.header__search-bar--mobile').removeClass('is-visible');
    });

    // Sticky share icons on the article page
    if ($('.js-share-icons').length) {
        $('.js-share-icons').scrollToFixed({
            marginTop: 30,
            limit:
                $($('.footer')).offset().top -
                $('.js-share-icons').outerHeight(true) -
                30
        });
    }

    // Desktop navigation
    if (window.matchMedia('(min-width: 1024px)').matches) {
        $('.header__nav-item-primary-parent, .header__nav-secondary').mouseover(
            function() {
                $(this)
                    .children('.header__link-primary')
                    .addClass('is-active');
                $(this)
                    .children('.header__nav-secondary')
                    .addClass('is-visible');
                $('.header__nav-overlay').addClass('is-visible');
            }
        );

        $(
            '.header__nav-item-primary-parent, .header__nav-overlay, .header__nav-secondary'
        ).mouseout(function() {
            $(this)
                .children('.header__link-primary')
                .removeClass('is-active');
            $('.header__nav-overlay, .header__nav-secondary').removeClass(
                'is-visible'
            );
        });
    }

    // Mobile navigation
    if (window.matchMedia('(max-width: 1024px)').matches) {
        $('.header__link-primary').on('click', function() {
            $(this)
                .parent()
                .toggleClass('is-open');
            $(this)
                .siblings('ul')
                .slideToggle(250);
        });

        $('.js-mobile-dropdown').on('click', function() {
            $(this)
                .parent()
                .toggleClass('is-open');
            $(this)
                .next('ul')
                .slideToggle(250);
        });
    }

    // Home page carousel - changes to Owl Carousel on mobile
    $('.carousel__panel').mouseover(function() {
        const panelNumber = $(this).data('panel');
        const image = document.querySelector(
            `img[data-image="${panelNumber}"]`
        );
        $('.carousel__panel').removeClass('is-expanded');
        $(this).addClass('is-expanded');

        this.addEventListener('transitionend', function(e) {
            if (e.propertyName !== 'height') return;
            $(this)
                .children('.carousel__panel-content')
                .css('opacity', 1);
        });

        $('.carousel__image--hidden').removeClass('is-visible');
        $(image).addClass('is-visible');
    });

    // Count items in carousel to set styling class
    $('.js-carousel').each((index, el) => {
        $(el).addClass(
            `carousel--${$(el).find('.carousel__block-item').length}-panel`
        );
    });

    $('.carousel__controls').mouseover(function() {
        let panel = $(this).closest('.carousel__block-item');
        panel.addClass('is-selected');
    });

    $('.carousel__controls').mouseout(function() {
        let panel = $(this).closest('.carousel__block-item');
        panel.removeClass('is-selected');
    });

    if (isMobileScreen()) {
        setCarousel();
    }

    // Change carousel to owl carousel when mobile screensize reaced
    $(window).on('resize', () => {
        if (isMobileScreen()) {
            if (!isOwlCarousel()) {
                setCarousel();
            }
        } else {
            if (isOwlCarousel()) {
                removeCarousel();
            }
        }
    });

    // Always show the main slide when not hovering on the home page carousel
    $('.carousel--home-desktop').mouseout(function() {
        $('.carousel__image.is-visible').removeClass('is-visible');
    });

    // Hide the carousel panels when not being hovered over
    $('.carousel__panel').mouseout(function() {
        $('.carousel__panel').removeClass('is-expanded');
    });

    // Extendable body toggleClass
    $('.extendable-body--toggle').on('click', function() {
        $('.extendable-body--collapsible').slideToggle();
        $('.extendable-body--open').toggle();
        $('.extendable-body--close').toggle();
    });
});
