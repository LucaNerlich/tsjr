export default class Game {

    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaserGame', { preload: this.preload, create: this.create });
    }


    preload() {
        this.game.load.image('logo', './src/resources/img/part5.png');
    }

    create() {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, logo);
        logo.anchor.setTo(0.5, 0.5);
    }
}