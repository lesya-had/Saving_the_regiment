class Angler2 extends Enemy {
    constructor(game) {
        super(game);
        this.width = 98;
        this.height = 75;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById('angler2');
    }
}