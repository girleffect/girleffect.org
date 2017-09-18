class Search {
    static selector() {
        return '.search';
    }

    constructor(node, openBtn) {
        this.node = node;
        this.openBtn = openBtn;        
        this.bindEventListeners();
    }

    bindEventListeners() {
        const closeBtn = this.node.find('.search__close')
        this.openBtn.click(this.open.bind(this));
        closeBtn.click(this.close.bind(this));
    }

    open() {
        this.node.addClass('open');
    }

    close() {
        this.node.removeClass('open');
    }
}

export default Search;