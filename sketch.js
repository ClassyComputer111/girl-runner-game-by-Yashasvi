var background1, back1Image;
var background2,back2Image;
var runner,runnerImg;
var invisibleGround;
var obstacle1,obstacle1Img;
var obstacle2,obstacle2Img;
var Score = 0;
var PLAY = 1;
var END = 0;
var gameState = 1;
var points,starpointsImg;
var pointsGroup,obstacleGroup;
var gameOver,GameOverImg;

function preload(){
  back1Image = loadImage("back3.png");
  runnerImg = loadImage("girl7.png");
  obstacle1Img = loadImage("car3.png.jpg");
  obstacle2Img = loadImage("car2.png");
  back2Image = loadImage("back5.png");
  starPointsImg = loadImage("starpoints1.png");
  GameOverImg = loadImage("gameover2.png.jpg");

}

function setup() {
  createCanvas(400,600);
  
 background = createSprite(0,0,0,0);
 background.addImage(back1Image);
 background.scale = 2;
 background.velocityX = -2;
  
 runner = createSprite(80,150,0,0)
runner.addImage("sporty",runnerImg);
 runner.scale = 0.5;

  obstacleGroup = new Group();
  pointsGroup = createGroup();
  
 invisibleGround = createSprite(300,380,900,10);
  invisibleGround.visible = false;
 
  Score = 0;
  
  
  
}

function draw() {
  if(background.x<0) {
   background.x = background.width/2
 }
  
  if(pointsGroup.isTouching(runner)) {
    Score = Score+1;
    pointsGroup.destroyEach();
  }
  
  
  if(obstacleGroup.isTouching(runner)) {
    gameState = END;
  
  }
  
  if(gameState === PLAY) {
    spawnObstacles();
    Points();
   if(keyDown("space")) {
    runner.velocityY = -10; 
  } 
  runner.velocityY = runner.velocityY + 0.8; 
  }
  
  if(gameState === END) {
    obstacleGroup.setVelocityXEach(0);
    pointsGroup.setVelocityXEach(0);
    pointsGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
    gameOver = createSprite(200,190,10,10);
  gameOver.addImage(GameOverImg);
  gameOver.scale = 0.4;
    
    background.velocityX = 0
    
  }
  runner.collide(invisibleGround)
 

 drawSprites();
   stroke("black");
  textSize = (40);
  fill("black");
 text("Score: "+ Score, 340,60);

}

function spawnObstacles() {
 if(frameCount%100 === 0) {
  var obstacle = createSprite(300,350,0,0);
  obstacle.addImage(obstacle1Img);
  obstacle.scale = 0.5;
  obstacle.velocityX = -6;
  obstacle.lifetime = 100;
  obstacleGroup.add(obstacle);
 }
}

function Points() {
  if(frameCount%30===0) {
    points = createSprite(300,190,40,10);
    points.addImage(starPointsImg);
    points.scale = 0.2;
    points.y = random(100,300);
    points.velocityX = -2;
    points.lifetime = 100;
    points.scale = 0.1;
    pointsGroup.add(points);
    
  }
}
 





