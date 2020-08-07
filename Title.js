class Title extends Phaser.Scene {
    constructor() {
	super("titleScene");
    }

    preload() {
	this.load.image("background","assets/images/title.jpg");
    }

    create() {
	this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
	this.background.setOrigin(0,0);
    }

    update() {
	
    }
}
