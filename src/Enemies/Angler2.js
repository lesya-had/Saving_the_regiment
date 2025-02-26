class Angler2 extends Enemy {
    constructor(game) {
        super(game);
        this.width = 140;
        this.height = 140;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById('angler2');
    }
}