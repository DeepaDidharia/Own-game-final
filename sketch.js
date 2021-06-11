var bgImg
var player1,player2;
var players;
var database;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1score =0;
var player2score =0;
var a1,a2,a3,a4;
var aGroup;
var asteriods;
var gameState =0;
var playerCount = 0;
var coin , coinImg;



function preload(){

  bgImg = loadImage("Galaxy bg.jpg");
player1 = loadImage("SpaceShip 1.png");
player2 = loadImage("SpaceShip 2.png");
a1 = loadImage("Asteriod1.png");
a2 = loadImage("Asteriod2.png");
a3 = loadImage("Asteriod3.png");
a4 = loadImage("Asteriod4.png");
coinImg= loadImage("Coin.png");
aGroup = new Group();
}

function setup() {
  createCanvas(1000,600);
  database = firebase.database();
  game = new Game();
  
  game.getState();
  game.start();
  
}

function draw() {
  background(bgImg);  

  if (gameState === 1) {
    clear(); 
    game.play();
  }

  if (gameState === 2) {
    
    game.end();
  }

   if (playerCount === 2) {
     game.update(1);
   }
  
  
  drawSprites();
}

