class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        // Cоздание танка
        this.player = new Tank(this);
        // Возможность играть стрелочками
        this.input = new InputH(this);
        this.keys = [];
    }

    update() {
        this.player.update();
    }

    draw(context) {
        this.player.draw(context);
    }


}