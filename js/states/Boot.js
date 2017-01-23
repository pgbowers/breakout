//creates a new game instance and sets things like scale

var myGame = {};

myGame.Boot = function (game) {  //declare the boot state

};

myGame.Boot.prototype = {
    preload: function () {
        // load assets to be used later in the preloader e.g. for loading screen / splashscreen
        
        //this.load.image('logo', '/assets/phaser2.png');     
        //this.load.image('preloaderBar', 'assets/preloader-bar.png');
    },
    create: function () {
        // setup game environment
        // scale, input etc..        
        // enable scaling for various screen sizes       
        
      // this.game.stage.backgroundColor = '#ddd';
       //this.add.sprite(30, 10, 'logo');
       this.input.maxPointers = 1;
        
       // Configure the game application according to the device it’s being rendered on.
       if(this.game.device.desktop)
       {
           this.scale.pageAlignHorizontally = true;
       }
       else
       {
           // fits all the game objects/elements inside the device screen.
           this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
           
           this.scale.forceLandscape = true;
           this.scale.pageAlignHorizontally = true;
        //   this.scale.pageAlignVertically = true;      
        //   this.scale.forcePortrait = true;
        //   this.scale.minWidth = 600;    
        //   this.scale.minHeight = 800;
        //   this.scale.maxWidth = 1000;
        //   this.scale.maxHeight = 1800;           
        // After we pass ‘true’ to setScreenSize() method below, these device scales get set in our game.
        //   this.scale.setScreenSize(true);
           
        // adds input pointer to the game. For mobile, its finger touch.
        this.input.addPointer();
       }       
        // call next state (Preloader)
        this.state.start('Preloader');
    }
};