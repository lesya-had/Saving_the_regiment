class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.player = new Samolet(this); // Cоздание самолета
        this.input = new InputH(this); // Возможность играть стрелочками
        this.ui = new UI(this); // Добавление снарядов
        this.keys = [];
        // this.projectiles = [];
        this.ammo = 20;
        this.maxAmmo = 50;
        this.ammoTimer = 0;
        this.ammoInterval = 500;

    }

    update(deltaTime) {
        this.player.update();
        if (this.ammoTimer > this.ammoInterval) {
            if (this.ammo < this.maxAmmo) this.ammo++;
            this.ammoTimer = 0;
        } else {
            this.ammoTimer += deltaTime;
        }

    }

    draw(context) {
        this.ui.draw(context);
        this.player.draw(context);
    }
}