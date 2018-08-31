//Debug Learning Mode
Game.state = "learning";

//create play area
Layout.StartGame();
Player.dirgibleSystem = new createjs.Container();
Player.StartGame();
Game.GenerateProblem();

//add buttons
var addBalloon = new createjs.Bitmap("_/images/plusBalloon.png");
addBalloon.regX = 50;
addBalloon.regY = 65;
addBalloon.x = 100;
addBalloon.y = Layout.CANVAS_HEIGHT - 80;
addBalloon.on("click", function(evt){
  Player.addDirgBalloon();
});
var minusBalloon = new createjs.Bitmap("_/images/minusBalloon.png");
minusBalloon.regX = 50;
minusBalloon.regY = 65;
minusBalloon.x = 200;
minusBalloon.y = Layout.CANVAS_HEIGHT - 80;
minusBalloon.on("click", function(evt){
  Player.removeDirgBalloon();
});
var addWeight = new createjs.Bitmap("_/images/plusWeight.png");
addWeight.regX = 50;
addWeight.regY = 65;
addWeight.x = Layout.CANVAS_WIDTH - 100;
addWeight.y = Layout.CANVAS_HEIGHT - 80;
addWeight.on("click", function(evt){
  Player.addDirgWeight();
});
var minusWeight = new createjs.Bitmap("_/images/minusWeight.png");
minusWeight.regX = 50;
minusWeight.regY = 65;
minusWeight.x = Layout.CANVAS_WIDTH - 200;
minusWeight.y = Layout.CANVAS_HEIGHT - 80;
minusWeight.on("click", function(evt){
  Player.removeDirgWeight();
});
 Layout.stage.addChild(addBalloon, minusBalloon, addWeight, minusWeight);


createjs.Ticker.framerate = 30;
createjs.Ticker.addEventListener("tick", handleTick);
const ENEMY_SPAWN_RATE = 3000;
let enemySpawn = ENEMY_SPAWN_RATE;

function handleTick(event) {
  if(Game.state == "playing"){
    Game.UpdatePlayer();
    Game.UpdateEnemies();

    enemySpawn -= createjs.Ticker.interval;
    if(enemySpawn < 0)
    {
      Enemy.SpawnEnemy();
      enemySpawn = ENEMY_SPAWN_RATE;
    }
    
    if(Player.dirgibleSystem.x < 275){
      Player.dirgibleSystem.x += 4;
    }
  } else if(Game.state == "lost"){
    Player.dirgibleSystem.y += ((Math.random() * -4) + 8);
    Player.dirgibleSystem.x -= ((Math.random() * -4) + 8);
    if(Player.dirgibleSystem.y > 800){
      location.reload();
    }
  } else if(Game.state =="learning"){
    Player.dirgibleSystem.x = 275;
    Game.UpdatePlayer();
    Enemy.enemyList[0].x = 1000;
  } else if(Game.state == "runProblem"){
    
    if(Enemy.enemyList.length == 0 || Enemy.enemyList[0].x < 0){
      Game.score = Game.score + 1;
      Game.state = "learning";
      Game.GenerateProblem();
    }
    if(Game.score > 3){
      Game.state = "playing";
      Layout.stage.removeChild(Layout.submitButton);
    }
    Game.UpdateEnemies();
  }
   Layout.stage.update();
}
