class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        // Cоздание танка
        this.player = new Samolet(this);
        // Возможность играть стрелочками
        this.input = new InputH(this);
        this.keys = [];
        this.projectiles = [];
        this.ammo = 50;
        this.maxAmmo = 100;
    }

    update() {
        this.player.update();
    }

    draw(context) {
        this.player.draw(context);
    }


}