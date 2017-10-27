class Hamburger {
    static selector() {
        return '.js-hamburger';
    }

    constructor(node, openCb = () => {}, closeCb = () => {}) {
        this.node = node;

        // Any callbacks to be called on open or close.
        this.openCb = openCb;
        this.closeCb = closeCb;

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
        this.openCb();

        this.state.open = true;
    }

    close() {
        this.node.removeClass('open');
        this.closeCb();

        this.state.open = false;
    }
}

export default Hamburger;
