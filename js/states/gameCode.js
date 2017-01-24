// the code for the game 

myGame.gameCode = function(game){        
};
 
myGame.gameCode.prototype = {   
   
   create: function() {
       
       score = 0;
       lives = 3;
       count_alive = 0;
       xVelocity = 300;
       yVelocity = -300;
       
       this.physics.startSystem(Phaser.Physics.ARCADE);
        background = this.add.tileSprite(0, 0, 600, 400, 'background2');
       //Ball section
       ball = this.add.sprite(this.world.width*0.5, this.world.height-50, 'ball');
       ball.anchor.set(0.5);
       this.physics.enable(ball, Phaser.Physics.ARCADE);
       
       // detect collision with canvas edges and bounce off
       ball.body.collideWorldBounds = true;
       ball.body.bounce.set(1);
       
       // allow the ball to fall off the bottom
       this.physics.arcade.checkCollision.down = false;
       
       // did the ball go out of bounds
       ball.checkWorldBounds = true;
        
       //set the ball velocity
       ball.body.velocity.set(xVelocity, yVelocity);
       
       ball.events.onOutOfBounds.add(ballLeavesScreen, this);       
       //end of Ball section
       
       //Paddle section
       paddle = this.add.sprite(this.world.width*0.5, this.world.height-20, 'paddle');
       paddle.anchor.set(0.5, 1);
       this.physics.enable(paddle, Phaser.Physics.ARCADE);
       paddle.body.immovable = true;       
       //end of Paddle Section
       
       //Bricks section
       brickInfo = { width: 50, height: 50,
                    count: { row: 11, col:4},
                    offset: { top:70, left:50},
                    padding:0
                    }
        bricks = this.add.group();        
        for(c = 0; c<brickInfo.count.col; c++) {
            for(r = 0; r <brickInfo.count.row; r++) {
                var brickX = (r*(brickInfo.width+brickInfo.padding))+brickInfo.offset.left; 
                   var brickY = (c*(brickInfo.height+brickInfo.padding))+brickInfo.offset.top;
                   brick = this.add.sprite(brickX, brickY, 'brick');
                   this.physics.enable(brick, Phaser.Physics.ARCADE);
                   brick.body.immovable = true;
                   brick.anchor.set(0.5);
                   bricks.add(brick);
                }            
            } 
        // end of Bricks section
       
       // Text section       
        textStyle = {font: '18px Arial', fill: '#0095DD'};
           
        scoreText = this.add.text(5, 5, 'Score: ' + score, textStyle);
       
        livesText = this.add.text(this.world.width-5, 5, 'Lives: '+lives, textStyle);
        livesText.anchor.set(1, 0);
        lifeLostText = this.add.text(this.world.width*0.5, this.world.height*0.7, 'Life lost, click to continue', textStyle);
        lifeLostText.anchor.set(0.5);
        lifeLostText.visible = false;       
       // end of Text section  
       
       /*killTween = this.add.tween(brick.scale);
            killTween.to({x:0,y:0}, 200, Phaser.Easing.Linear.None);
            killTween.onComplete.addOnce(function() {
                //brick.kill();                
                //remove dead brick from the group    
               bricks.remove(brick);
    
                //increase the score and print to screen       
                score += 10;           
                scoreText.setText('Score: '+score);  
                //console.log(score);
       });*/

    
   }, //end of Create function
   
    update: function () {      
           // did the ball hit the paddle?         
            this.physics.arcade.collide(ball, paddle, ballHitPaddle);
          
           // did the ball hit a brick?
           this.physics.arcade.collide(ball, bricks, ballHitBrick);        
           //this.physics.arcade.collide(ball, bricks, killTween.start());       
          
           // move paddle sideways
           paddle.x = this.input.x || this.world.width*0.5; 
        
           // move the paddle up and down as well
           //paddle.y = this.input.y;
        
            // call gameOver when no bricks remain
            if(bricks.countLiving() == 0){ 
                this.state.start('gameOver');                
            }
        
    } //end of Update function   
    
} //end of prototype

// my functions
function ballHitBrick(ball, brick) {      
    //killTween.start();
    brick.kill();                
    //remove dead brick from the group    
    bricks.remove(brick);
    
    //increase the score and print to screen       
    score += 10;           
    scoreText.setText('Score: '+score);  
    //console.log(score);
}

function ballHitPaddle(ball, paddle) {
            //ball.animations.play('wobble');           
            ball.body.velocity.x = -1*5*(paddle.x-ball.x);
}
function ballLeavesScreen() {
            lives--;
            if (lives){
                livesText.setText('Lives: '+lives);
                lifeLostText.visible = true;
                ball.reset(this.world.width*0.5, this.world.height-50);
                paddle.reset(this.world.width*0.5, this.world.height-20);
                this.input.onDown.addOnce(function() {
                    lifeLostText.visible = false;
                    ball.body.velocity.set(xVelocity, yVelocity);
                }, this);
            }
            else { 
                // all lives lost, go to gameOver
                this.state.start('gameOver');                
            }
}

