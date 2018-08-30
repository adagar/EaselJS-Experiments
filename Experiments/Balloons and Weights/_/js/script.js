//create play area
var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
    centerX = canvas.width / 2,
    centerY = canvas.height / 2;

const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 720;

const CANVAS_POINTS = {
  x1: centerX - CANVAS_WIDTH / 2,
  x2: centerX + CANVAS_WIDTH / 2,
  y1: centerY - CANVAS_HEIGHT / 2,
  y2: centerY + CANVAS_HEIGHT / 2
}

var graphics = new createjs.Graphics()
  .beginStroke("black")
  .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
var frame = new createjs.Shape(graphics);
frame.regX = CANVAS_WIDTH / 2;
frame.regY = CANVAS_HEIGHT / 2;
frame.x = centerX;
frame.y = centerY;
stage.addChild(frame);

var graphics = new createjs.Graphics()
  .beginStroke("black")
  .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
var frame = new createjs.Shape(graphics);
frame.regX = CANVAS_WIDTH / 2;
frame.regY = CANVAS_HEIGHT / 2;
frame.x = centerX;
frame.y = centerY;
stage.addChild(frame);


var ocean = new createjs.Shape();
ocean.graphics.beginFill("#7770A0").beginStroke("#7770A0").drawRect(0, centerY, CANVAS_WIDTH, CANVAS_HEIGHT);
stage.addChild(ocean);

graphics.beginFill("black").drawRect(0, 0, 30, CANVAS_HEIGHT);
var bar = new createjs.Shape(graphics);
stage.addChild(bar);

//draw ticks
for(let i = -1 ; i < CANVAS_HEIGHT - 1; i+=40){
  var tick = new createjs.Shape();
  tick.graphics
    .s("white").ss(2, 1, 1).mt(20, i).lt(35, i).closePath();

  tickTextContent = (centerY - i -1) / 40;
  var tickText = new createjs.Text(tickTextContent, "12px Arial", "white");
  tickText.x = 5;
  tickText.y = i - 5;
  tickText.align = "center";

  stage.addChild(tick, tickText);
}

//GAME LOGIC///////////////
let GAME_STATE = "playing";
function LoseGame(){
  GAME_STATE = "lost";
}
///////////////////////////
//add floating dirgible and its functions
var dirgibleSystem = new createjs.Container();
var dirgible = new createjs.Bitmap("_/images/dirgible.png");
dirgible.setBounds(0, 40, 250, 130);
var linePointer = new createjs.Bitmap("_/images/linePointer.png");
linePointer.x = -260;
dirgibleSystem.addChild(linePointer, dirgible, );
dirgibleSystem.regY = 50;
dirgibleSystem.x = 40;
dirgibleSystem.y = centerY;
dirgibleSystem.balloonList = [];
dirgibleSystem.weightList = [];
dirgibleSystem.addDirgBalloon = function() {
  let newBalloon = new createjs.Bitmap("_/images/soloBalloon.png");
  newBalloon.regX = 27;
  newBalloon.regY = 36;
  newBalloon.x = Math.floor(Math.random() * 150) + 100;
  newBalloon.y = -100;
  dirgibleSystem.addChild(newBalloon);
  var balloonString = new createjs.Shape();
  balloonString.graphics
    .clear()
    .s("black")
    .ss(1, 1, 1)
    .mt(newBalloon.x, newBalloon.y+30)
    .lt(dirgible.x+170, dirgible.y + 25)
    .closePath();
  newBalloon.personalString = balloonString;
  dirgibleSystem.addChild(balloonString);
  this.balloonList.push(newBalloon);
};
dirgibleSystem.removeDirgBalloon = function() {
  dirgibleSystem.removeChild(this.balloonList[this.balloonList.length - 1].personalString);
  dirgibleSystem.removeChild(this.balloonList.pop());
};
dirgibleSystem.addDirgWeight = function() {
  let newWeight = new createjs.Bitmap("_/images/soloWeight.png");
  newWeight.x = Math.floor(Math.random() * 100) + 100;
  newWeight.y = 100;
  dirgibleSystem.addChild(newWeight);
  this.weightList.push(newWeight);
};
dirgibleSystem.removeDirgWeight = function() {
  dirgibleSystem.removeChild(this.weightList.pop());
};
dirgibleSystem.netWeight = function() {
  let netWeight = this.balloonList.length - this.weightList.length;
  //console.log(netWeight);
  return netWeight;
};

stage.addChild(dirgibleSystem);

//add buttons
var addBalloon = new createjs.Bitmap("_/images/plusBalloon.png");
addBalloon.regX = 50;
addBalloon.regY = 65;
addBalloon.x = 100;
addBalloon.y = CANVAS_HEIGHT - 80;
addBalloon.on("click", function(evt){
  dirgibleSystem.addDirgBalloon();
});
var minusBalloon = new createjs.Bitmap("_/images/minusBalloon.png");
minusBalloon.regX = 50;
minusBalloon.regY = 65;
minusBalloon.x = 200;
minusBalloon.y = CANVAS_HEIGHT - 80;
minusBalloon.on("click", function(evt){
  dirgibleSystem.removeDirgBalloon();
});
var addWeight = new createjs.Bitmap("_/images/plusWeight.png");
addWeight.regX = 50;
addWeight.regY = 65;
addWeight.x = CANVAS_WIDTH - 100;
addWeight.y = CANVAS_HEIGHT - 80;
addWeight.on("click", function(evt){
  dirgibleSystem.addDirgWeight();
});
var minusWeight = new createjs.Bitmap("_/images/minusWeight.png");
minusWeight.regX = 50;
minusWeight.regY = 65;
minusWeight.x = CANVAS_WIDTH - 200;
minusWeight.y = CANVAS_HEIGHT - 80;
minusWeight.on("click", function(evt){
  dirgibleSystem.removeDirgWeight();
});
stage.addChild(addBalloon, minusBalloon, addWeight, minusWeight);

//add enemies
const enemyList = [];
function SpawnEnemy(){
  let randomHeight = (Math.random() * 640) + 40;
  console.log(randomHeight);
  if(randomHeight <= centerY){
    var newEnemy = new createjs.Bitmap("_/images/dinosaurEnemy.png");
  } else{
    var newEnemy = new createjs.Bitmap("_/images/sharkEnemy.png");
  }
  newEnemy.regX = 150;
  newEnemy.regY = 75;
  newEnemy.x = 1500;
  newEnemy.y = randomHeight;
  newEnemy.CheckIntersection = function(rect2){
    shipBox = {
      x: rect2.x + 150,
      y: rect2.y,
      width: 250,
      height: 132 
    }
    enemyBox = {
      x: this.x,
      y: this.y,
      width: 300,
      height: 150
    }
   
    //DrawBoundingBox(shipBox);
    //DrawBoundingBox(enemyBox);
    if ( shipBox.x >= enemyBox.x + enemyBox.width || shipBox.x + shipBox.width <= enemyBox.x || shipBox.y >= enemyBox.y + enemyBox.height || shipBox.y + shipBox.height <= enemyBox.y )
    {
      return false;
    }else{
      LoseGame();
      return true;
    }    
    
  }
  
  enemyList.push(newEnemy);
  stage.addChild(newEnemy);
}
//enemies scroll
//collisions lose

createjs.Ticker.framerate = 30;
createjs.Ticker.addEventListener("tick", handleTick);
const ENEMY_SPAWN_RATE = 3000;
let enemySpawn = ENEMY_SPAWN_RATE;
SpawnEnemy();
function handleTick(event) {
  if(GAME_STATE == "playing"){
    dirgibleSystem.y = centerY - dirgibleSystem.netWeight() * 40;

    enemySpawn -= createjs.Ticker.interval;
    if(enemySpawn < 0)
    {
      SpawnEnemy();
      enemySpawn = ENEMY_SPAWN_RATE;
    }
    for(let enemy in enemyList){
      enemyList[enemy].x -= 5;
      enemyList[enemy].CheckIntersection(dirgibleSystem);
    }
    if(dirgibleSystem.x < 275){
      dirgibleSystem.x += 4;
    }
  } else{
    dirgibleSystem.y += ((Math.random() * -4) + 8);
    dirgibleSystem.x -= ((Math.random() * -4) + 8);
  }
  
  stage.update();
}
