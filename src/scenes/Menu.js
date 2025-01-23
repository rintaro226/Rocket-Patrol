class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene')
    }
    preload(){
        //loadimage/title sprites
        // this.load.path = "./assets/Rocket Patrol/"
        this.load.image('rocket','./assets/Rocket Patrol/rocket.png')
        this.load.image('spaceship','./assets/Rocket Patrol/spaceship.png')
        this.load.image('starfield','./assets/Rocket Patrol/starfield.png')
        this.load.spritesheet('explosion','./assets/Rocket Patrol/explosion.png',{
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        })

        this.load.audio('sfx-select', './assets/Rocket Patrol/sfx-select.wav')
        this.load.audio('sfx-explosion', './assets/Rocket Patrol/sfx-explosion.wav')
        this.load.audio('sfx-shot', './assets/Rocket Patrol/sfx-shot.wav')

    }

    

    create(){
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion',{start: 0,end: 9,first: 0}),
            frameRate: 30
        })
        
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize:'28px',
            backgroundColor:'#F3B141',
            color: '#843605',
            align: 'right',
            padding : {
                top:5,
                bottom:5,
            },
            fixedWidth:0
        }

        this.add.text(game.config.width/2,game.config.height/2-borderUISize-borderPadding,'Rocket Patrol',menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'Use <--> arrows to move & (F) to fire', menuConfig).setOrigin(0.5)
        menuConfig.backgroundColor = '#00FF00'
        menuConfig.color = '#000'
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press <- for Novice or -> for experts', menuConfig).setOrigin(0.5)

        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)


    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer:60000
            }
        this.sound.play('sfx-select')
        this.scene.start('playScene')   
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
              spaceshipSpeed: 4,
              gameTimer: 45000    
            }
            this.sound.play('sfx-select')
            this.scene.start('playScene')    
          }
    }
}