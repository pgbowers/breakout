//Show the game over screen, display scores, choice to play again or quit

myGame.gameOver = function(game){
    //var text;
    //var background;
};
 
myGame.gameOver.prototype = {
   create: function() {
        background = this.add.tileSprite(0, 0, 600, 400, 'background3');
        //this.game.stage.backgroundColor = "#ffaabb";
        this.add.text(10, 10, 'Game Over', {fill: '#000'});
        this.add.text(10, 50, 'Your score was: ' + score, {fill: '#000'});
        text = this.add.text(this.world.centerX,
                             this.world.centerY, 'Main Menu', {fill: '#000'});
 
        text.inputEnabled = true;
        text.events.onInputDown.add(this.go, this);
   },
   go: function(){
       // call the next state (Menu)
       this.state.start('Menu');
   }
};