// initializes a new game and adds the states

window.onload = function () {
    var game = new Phaser.Game(600, 400, Phaser.AUTO);
    
    //add the states for this game
    game.state.add('Boot', myGame.Boot);
    game.state.add('Preloader', myGame.Preloader);    
    game.state.add('Menu', myGame.Menu);
    game.state.add('gameCode', myGame.gameCode);
    game.state.add('gameOver', myGame.gameOver);
    
    // call the next module (Boot)
    game.state.start('Boot');   
}
