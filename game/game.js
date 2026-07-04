const sizes= {
    width: 500,
    height: 500,
}

const speedDown = 300

class GameScene extends Phaser.Scene{
    constructor(){
        super("scene-game")
    }

    preload(){
        this.load.image("bg", "assets/bg.png")
    }
    create(){
        this.add.image(0,0,"bg")
    }
    update(){}
}

const config = {
    type: Phaser.AUTO,
    width: sizes.width,
    height: sizes.height,
    scene: [GameScene],
    physics: {
        default: "arcade",
        arcade:{
            gravity:{y:speedDown},
            debug:true
        }
    }
}

const game = new Phaser.Game(config);
