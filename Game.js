class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player1_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player2_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(bgImg, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                
                 drawSprites();
                 for(var plr in allPlayers){
                    var index =0;
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;

                    
                     
                     players[index -1].x =mouseX;
                     players[index - 1].y = y;
                       players[index].visible=false;
  
                    
                         textSize(25);
                         fill("white");
                         text(allPlayers.player1.name + "'s Score:"+allPlayers.player1.score,50,50);
                        text(allPlayers.player2.name + "'s Score:" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                

                 
            
                 if (frameCount % 20 === 0) {
                     asteriods = createSprite(random(100, 1000), 0, 100, 100);
                     asteriods.velocityY = 6;
                     var rand = Math.round(random(1,4));
                     switch(rand){
                         case 1: asteriods.addImage("asteriod1", a1_img);
                         break;
                         case 2: asteriods.addImage(" asteriod2", a2_img);
                         break;
                         case 3:  asteriods.addImage("asteriod3", a3_img);
                         break;
                         case 4: asteriods.addImage(" asteriod4", a4_img);
                         break;
                         
                     }
                     aGroup.add(asteriods);
                     
                 }


                 if (frameCount % 30 === 0) {
                    coin = createSprite(random(100, 1000), 0, 100, 100);
                    coin.velocityY = 7;
                    var rand = Math.round(random(coin));
                    
                }
                 
                 
                  if (player.index !== null) {
                      for(var i = 0; i< coin.length;i++){
                          if(coin.get(i).isTouching(players)){
                            coin.get(i).destroy();
                            player.score =player.score + 1;
                            player.update();
                          }
                       
                      }
                            
                        
                  }

                  if (player.index !== null) {
                    for(var i = 0; i< aGroup.length;i++){
                        if(aGroup.get(i).isTouching(players)){
                            aGroup.get(i).destroy();
                          player.score =player.score - 1;
                          player.update();
                        }
                     
                    }
                          
                      
                }
             
               
    }

    end(){
       console.log("Game Ended");
    
    }
}
