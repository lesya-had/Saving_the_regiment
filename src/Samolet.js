class Samolet {
    constructor(game) {
        this.game = game;
        this.width = 120;
        this.height = 190;
        this.x = 20;
        this.y = 100;
        this.speedY = 0;
        this.maxSpeed = 5;
        this.projectiles = [];
        this.image = document.getElementById('player');
    }

    update() {
        this.y += this.speedY;
        
        if (this.game.keys.includes('ArrowUp')) this.speedY = -this.maxSpeed
        else if (this.game.keys.includes('ArrowDown')) this.speedY = this.maxSpeed
        else this.speedY = 0;
        
        if (this.y > this.game.height - this.height * 0.5) this.y = this.game.
            height - this.height * 0.5;
        else if (this.y < -this.height * 0.5) this.y = -this.height * 0.5;
        
        // Снаряды
        this.projectiles.forEach(projectile => { projectile.update(); });
        this.projectiles = this.projectiles.filter(projectile => !projectile.markedForDeletion);
    

    }

    draw(context) {
        // Отображение снарядов
        context.fillStyle = 'black';
        this.projectiles.forEach(projectile => {
            projectile.draw(context);
        });
        // Отображение изображения самолета
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    
    shootTop() {
        if (this.game.ammo > 0) {
            this.projectiles.push(new Projectile(this.game, this.x + 80, this.y + 100));
            this.game.ammo--;
        }

    }
}