var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount = 0;
var gameState = 0;
var car1,car2,cars , car_1 , car_2
var allPlayers


function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car_1 = loadImage("./assets/car1.png")
  car_2 = loadImage("./assets/car2.png")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  console.log(database)
  game = new Game();

  game.getGameState()

  game.start();

}

function draw() {
  background(backgroundImage);

  if(playerCount === 2){  
    game.updateGameState(1)
  }

  if(gameState === 1){
    game.play()

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
