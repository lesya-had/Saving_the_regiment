class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        // Cоздание танка
        this.player = new Samolet(this);
        // Возможность играть стрелочками
        this.input = new InputH(this);
        this.keys = [];
        this.ammo = 20;
    }

    update() {
        this.player.update();
    }

    draw(context) {
        this.player.draw(context);
    }


}