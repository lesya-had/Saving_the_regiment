class Enemy {
    constructor(game) {
        this.game = game;
        this.x = this.game.width;
        this.speedX = Math.random() * -1.5 - 2.5;
        this.markedForDeletion = false;
        this.lives = 5;
        this.score = this.lives;
    }

    update() {
        this.x += this.speedX;
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.fillStyle = 'black'; // ХЗ
        context.font = '20px Roboto';
        context.fillText(this.lives, this.x, this.y - 5);
    }
}