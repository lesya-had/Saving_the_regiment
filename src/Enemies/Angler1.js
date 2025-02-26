class Angler1 extends Enemy {
    constructor(game) {
        super(game);
        this.width = 102;
        this.height = 76;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById('angler1');
    }
}