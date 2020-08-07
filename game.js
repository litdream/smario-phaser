// Phaser 3 documents are here:
//    https://photonstorm.github.io/phaser3-docs/index.html

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    parent: 'phaser-example',
    scene: [Title ]
};

// Phaser.Game doc:  https://photonstorm.github.io/phaser3-docs/Phaser.Game.html
var game = new Phaser.Game(config);

