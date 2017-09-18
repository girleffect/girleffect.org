class MobileNavToggle {
    static selector() {
        return '.js-nav-toggle';
    }

    constructor(node) {
        this.node = node;

        this.state = {
            open: false,
        };

        this.bindEventListeners();
    }

    bindEventListeners() {
        this.node.click(this.toggle.bind(this));
    }

    toggle() {
        this.state.open ? this.close() : this.open();
    }

    open() {
        this.node.addClass('open');
        this.node.parent().addClass('open');
        this.node.next().slideDown(200);
        this.state.open = true;
    }

    close() {
        this.node.removeClass('open');
        this.node.parent().removeClass('open');
        this.node.next().slideUp(200, () => {
            // remove the inline attr so the menu is visible when the window is resized
            this.node.next().removeAttr('style');
        });
        this.state.open = false;
    }


}

export default MobileNavToggle;
