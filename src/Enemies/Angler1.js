class Angler1 extends Enemy {
    constructor(game) {
        super(game);
        this.width = 228 * 0.45;
        this.height = 169 * 0.45;
        this.y = Math.random() * (this.game.height * 0.95 - this.height);
        this.image = document.getElementById('angler1');
    }
}