class MainNav {
    static selector() {
        return '.main-nav';
    }

    constructor(node, $) {
        // This is the media query whch changes the header from the 'mobile' design
        // to the 'desktop' design.
        this.MEDIA_QUERY = "(min-width: 768px)";

        this.node = node;
        this.$ = $;

        this.state = {
            active: false,
        }
        
        this.bindEventListeners();
    }

    bindEventListeners() {
        // As the styling and functionality is very different between the 'mobile' and 
        // 'desktop' designs, different events need to be fired depending on the whether the menu
        // is 'mobile' or 'desktop'.
        const mql = window.matchMedia(this.MEDIA_QUERY);
        mql.addListener(this.onMediaChange.bind(this));
        this.onMediaChange(mql);
    }

    onMediaChange(mql) {
        if (mql.matches) {
            this.bindDesktopEventListeners();
        } else {
            this.unbindDesktopEventListeners();
        }
    }

    bindDesktopEventListeners() {
        this.unbindDesktopEventListeners();

        const onHover = this.onHover.bind(this);
        const offHover = this.offHover.bind(this);

        this.node.find('.main-nav__primary-items__item').each((index, el) => {
            this.$(el).hover(onHover, offHover);
        });
    }

    unbindDesktopEventListeners() {
        this.node.find('.main-nav__primary-items__item').each((index, el) => {
            // Unbind the mouseenter and mouseleave events, as the jQuery hover event
            // is just shorthand for mounseenter and mouseleave.
            this.$(el).unbind('mouseenter mouseleave')
        });
    }

    onHover(event) {
        this.state.active = true;

        // Remove all previously active elements when a new element
        // is active. This prevents more than one dropdown being open at any one time.
        this.node.find('.is-active').each((index, el) => {
            this.$(el).removeClass('is-active');
        });

        const primaryItem = this.$(event.target).closest('.main-nav__primary-items__item');
        primaryItem.addClass('is-active');
    }

    offHover(event) {
        this.state.active = false;

        // There is a small gap between the link element and the dropdown element.
        // Therefore without this timeout, the dropdown closes before the user gets to 
        // hover over the dropdown. Usually this problem can be solved using CSS, however
        // due to the design this wasn't possible in this case.
        setTimeout(() => {
            if (!this.state.active) {
                const primaryItem = this.$(event.target).closest('.main-nav__primary-items__item');
                primaryItem.removeClass('is-active');
            }
        }, 250);
    }
}

export default MainNav;