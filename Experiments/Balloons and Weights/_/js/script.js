//create play area
var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
    centerX = canvas.width / 2,
    centerY = canvas.height / 2;

const CANVAS_WIDTH = 720;
const CANVAS_HEIGHT = 480;

const CANVAS_POINTS = {
  x1: centerX - CANVAS_WIDTH / 2,
  x2: centerX + CANVAS_WIDTH / 2,
  y1: centerY - CANVAS_HEIGHT / 2,
  y2: centerY + CANVAS_HEIGHT / 2
}

var graphics = new createjs.Graphics()
  .beginStroke("black")
  .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
var shape = new createjs.Shape(graphics);
shape.regX = CANVAS_WIDTH / 2;
shape.regY = CANVAS_HEIGHT / 2;
shape.x = centerX;
shape.y = centerY;
stage.addChild(shape);

var line = new createjs.Shape();
line.graphics
  .s("black")
  .ss(3, 1, 1)
  .mt(40, 0)
  .lt(40, CANVAS_POINTS.y2)
  .closePath();
stage.addChild(line);

var balloon = new createjs.Bitmap("_/images/soloBalloon.png");
balloon.regX = 18;
balloon.regY = 40;
balloon.x = centerX;
balloon.y = centerY;
balloon.float = false;
stage.addChild(balloon);
var balloonString = new createjs.Shape();

balloon.on("click", function(evt) {
  balloon.isFloating = true;
});

stage.on("stagemouseup", function(evt) {
  balloon.isFloating = false;
})

var chair = new createjs.Bitmap("_/images/dirgible.png");
createjs.Ticker.framerate = 30;
createjs.Ticker.addEventListener("tick", handleTick);

function handleTick(event) {
  
  if(balloon.isFloating)
  {
    if(Math.abs(stage.mouseY - balloon.y < 100))
    {
      balloon.y -= 5;
    }
    else{
      balloon.y = stage.mouseY - 100;
    }
    
    balloonXDiff = balloon.x - stage.mouseX;
    balloon.x -= balloonXDiff / 20;
    
    balloonString.graphics
      .clear()
      .s("black")
      .ss(1, 1, 1)
      .mt(balloon.x, balloon.y)
      .lt(stage.mouseX, stage.mouseY)
      .closePath();
    stage.addChild(balloonString);

  }
  stage.update();
}
