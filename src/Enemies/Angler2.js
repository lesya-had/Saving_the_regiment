class Angler2 extends Enemy {
    constructor(game) {
        super(game);
        this.width = 213 * 0.5;
        this.height = 165 * 0.5;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById('angler2');
    }
}