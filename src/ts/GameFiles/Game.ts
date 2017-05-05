export default class Game {

    phaserGame: Phaser.Game;

    constructor() {
        this.phaserGame = new Phaser.Game(800, 600, Phaser.AUTO, 'phaserGame', { preload: this.preload, create: this.create });
    }


    preload() {
        this.phaserGame.load.image('logo', './src/resources/img/part5.png');
    }

    create() {
        var logo = this.phaserGame.add.sprite(this.phaserGame.world.centerX, this.phaserGame.world.centerY, logo);
        logo.anchor.setTo(0.5, 0.5);
    }
}