// Preloader will load all of the assets like graphics and audio

myGame.Preloader = function (game) {
    this.preloadBar = null;
}

myGame.Preloader.prototype = {
    preload: function () {
        // common to add a loading bar sprite here...
        this.preloadBar = this.add.sprite(this.game.width / 2 - 100, this.game.height / 2, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);
        
         // set the background color for preloader only
        //this.game.stage.backgroundColor = '#afa';
        // load all game assets
        // images, spritesheets, atlases, audio etc..
        this.load.image('logo', 'assets/phaser2.png');
        this.load.image('ball', 'assets/red_ball.png');
        this.load.image('paddle', 'assets/bluepaddle.png');
        this.load.image('brick', 'assets/blueSquare.png');
        this.load.image('startButton', 'assets/redstart.png');
        this.load.image('background1','assets/water1.jpg');
        this.load.image('background2','assets/water2.jpg');
        this.load.image('background3','assets/water3.jpg');
    },
    create: function () {
        // call next state (Menu)
        this.state.start('Menu');
    }
};