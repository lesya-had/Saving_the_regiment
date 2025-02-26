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
        this.ammoInterval = 1500;

        this.enemies = [];
        this.enemyTimer = 0;
        this.enemyInterval = 1000;
        this.gameOver = false;

    }

    update(deltaTime) {
        this.player.update();
        if (this.ammoTimer > this.ammoInterval) {
            if (this.ammo < this.maxAmmo) this.ammo++;
            this.ammoTimer = 0;
        } else {
            this.ammoTimer += deltaTime;
        }

        this.enemies.forEach(enemy => enemy.update());
        this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);
        if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
            this.addEnemy();
            this.enemyTimer = 0;
        } else {
            this.enemyTimer += deltaTime;
        }
    }

    draw(context) {
        this.ui.draw(context);
        this.player.draw(context);

        this.enemies.forEach(enemy => enemy.draw(context));
    }

    addEnemy() {
        const randomize = Math.random();
        if (randomize < 0.5) this.enemies.push(new Angler1(this))
        else this.enemies.push(new Angler2(this));
    }

}