class Video {
    static selector() {
        return '.js-video';
    }

    constructor(node) {
        this.node = node;

        this.state = {
            playing: false,
        };

        this.bindEventListeners();
    }

    bindEventListeners() {
        this.node.click(this.toggle.bind(this));
    }

    toggle() {
        this.state.playing ? this.pause() : this.play();
    }

    play() {
        this.node.addClass('is-playing');
        this.node.find('video').get(0).play()
        this.state.playing = true;
    }

    pause() {
        this.node.removeClass('is-playing');
        this.node.find('video').get(0).pause()
        this.state.playing = false;
    }
}

export default Video;
