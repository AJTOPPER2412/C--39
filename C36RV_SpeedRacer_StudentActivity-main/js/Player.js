class Player {
  constructor() {

this.name = ""
this.score = 0
this.rank = 0
this.fuel = 0
this.life = 0
this.positionX = 0
this.positionY = 0
this.index = 0

  }


  getPlayerCount(){

  var playerRef =  database.ref("playerCount");
  playerRef.on("value",(data)=>{
  playerCount = data.val();
  })


  }

  updatePlayerCount(count){

    database.ref("/").update({
      playerCount:count
    }
    )
  }

  addPlayer(){

    var playerIndex = "players/player" + this.index
    if(this.index === 1){
      this.positionX = width/2 - 100;
    }
    if(this.index === 2){
      this.positionX = width/2 + 100;
    }
    database.ref(playerIndex).set({
      name:this.name,
      score:this.score,
      rank:this.rank,
      life:this.life,
      positionX:this.positionX,
      positionY:this.positionY

    })

  }

  getDistance(){

    var playerIndex = "players/player" + this.index
    var getDistance = database.ref(playerIndex);
    getDistance.on("value",(data)=>{
      var data = data.val()
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    })
    
  }


updatePlayerDetails(){

  var playerIndex = "players/player" + this.index
  database.ref(playerIndex).update({
    positionX:this.positionX,
    positionY:this.positionY,
    score:this.score,
    rank:this.rank
  }
  )
}

static getPlayersInfo(){

  var getInfo = database.ref("players")
  getInfo.on("value",(data)=>{
    allPlayers = data.val()

  })
}


}
