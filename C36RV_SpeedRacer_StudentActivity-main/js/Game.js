class Game {
  constructor() {

    this.resetButton = createButton("reset") 

  }

  handleElement(){
    this.resetButton.position(width/2 + 450, 100)
  }

  handleResetButton(){

    this.resetButton.mousePressed(()=>{
      database.ref("/").update({
        gameState:0,
        playerCount:0,
        players:{}
      })
    })

  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.getPlayerCount()
    car1 = createSprite(width/2 - 100,height - 100)
    car2 = createSprite(width/2 +100 , height-100)
    car1.addImage("car1", car_1)
    car1.scale = 0.07
    car2.addImage("car2",car_2)
    car2.scale = 0.07
    cars = [car1,car2]


  }

   getGameState(){

    var gameRef = database.ref("gameState")
    gameRef.on("value",(data)=>{
      gameState = data.val();
      })
    
   }

   updateGameState(state){

    database.ref("/").update({
      gameState:state
    })
   }

   play(){
     this.handleElement()
     this.handleResetButton()
    form.hide();
    Player.getPlayersInfo()
    if(allPlayers !== undefined){
      var y = 0;
      var x = 0;
    var index = 0
    for(var plr in allPlayers){
      index = index + 1
       x = allPlayers[plr].positionX
       y = height - allPlayers[plr].positionY
       console.log(player.name + "y =" + y)
      if(index === player.index){
    stroke(10)
    fill("red")
    ellipse(x,y,50,60)
   // camera.position.y = cars[index-1].position.y
   //camera.position.y = cars[index - 1].position.y;
       


      }
      cars[index - 1].position.x = x
      cars[index - 1].position.y = y
    }
    this.handlePLayerControl()
    drawSprites()
    }
    
   }

   handlePLayerControl(){

    if(keyIsDown(UP_ARROW)){
    player.positionY += 10
    player.updatePlayerDetails()
    }



   }


   handleFuel(){
  






   }


}
