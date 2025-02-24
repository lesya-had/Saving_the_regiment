class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.player = new Tank(this);
    }

    update() {
        this.player.update();
    }

    draw(context) {
        this.player.draw(context);
    }
}