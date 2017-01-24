//Display a Welcome screen, some instructions and a choice to start the game
 
myGame.Menu = function(game){
    var text1; 
    var enterKey;
};
 
myGame.Menu.prototype = {
   create: function(){
         background = this.add.tileSprite(0, 0, 600, 400, 'background1');
       //this.game.stage.backgroundColor = '#ebc';
        //this.add.sprite(30, 10, 'logo');
        text1 = this.add.text(100, 50, "Peter's Classic Breakout", { font: "40px Arial", fill: "#3F46BF" }); 
       
        // center the text in the screen
        //text1.anchor.setTo(0.5, 0.5); 
       
        //text1.inputEnabled = true;
        //text1.events.onInputDown.add(this.startGame, this);
       
        button1 = this.game.add.button(350, this.game.height-50, 'startButton', this.startGame, this);
       
       // button1.anchor.setTo(1.0, 1.0); 
       
        //enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        //enterKey.onDown.add(this.startGame, this);       
   },
   startGame: function(){
       // call the next state ( gameCode)
        this.state.start('gameCode'); 
   }    
};
