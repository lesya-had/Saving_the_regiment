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

        this.enemies = [];
        this.enemyTimer = 0;
        this.enemyInterval = 1000;
        this.gameOver = false;

        this.score = 0;
        this.winningScore = 80;

        this.gameTime = 0;
        this.timeLimit = 30 * 1000;

    }

    update(deltaTime) {
        if (!this.gameOver) this.gameTime += deltaTime;
        if (this.gameTime > this.timeLimit) this.gameOver = true;
        
        this.player.update();
        if (this.ammoTimer > this.ammoInterval) {
            if (this.ammo < this.maxAmmo) this.ammo++;
            this.ammoTimer = 0;
        } else {
            this.ammoTimer += deltaTime;
        }

        this.enemies.forEach(enemy => {
            enemy.update();
            if (this.checkCollision(this.player, enemy)) {
                enemy.markedForDeletion = true;
            }
            this.player.projectiles.forEach(projectile => {
                if (this.checkCollision(projectile, enemy)) {
                    enemy.lives--; // уменьшаем жизни врага на единицу
                    projectile.markedForDeletion = true; // удаляем пулю
                    // Проверяем, если у врага не осталось жизней
                    if (enemy.lives <= 0) {        
                        enemy.markedForDeletion = true; // удаляем врага        
                        this.score += enemy.score; // увеличиваем количество очков главного игрока       
                        
                        if (!this.gameOver) this.score += enemy.score;
                        if (this.isWin()) this.gameOver = true;  // проверяем условие победы
                    }
                }
            })
        });
        
        
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


    checkCollision(rect1, rect2) {
        return (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y)
    }

    isWin() {
        return this.score >= this.winningScore;
    }

}
    