class Angler1 extends Enemy {
    constructor(game) {
        super(game);
        this.width = 100;
        this.height = 100;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById('angler1');
    }
}