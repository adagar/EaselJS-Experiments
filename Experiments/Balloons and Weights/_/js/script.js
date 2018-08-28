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

var line = new createjs.Shape();

line.graphics
  .s("black")
  .ss(3, 1, 1)
  .mt(40, 0)
  .lt(40, CANVAS_POINTS.y2)
  .closePath();

stage.addChild(shape);
stage.addChild(line);
createjs.Ticker.framerate = 30;
createjs.Ticker.addEventListener("tick", handleTick);

function handleTick(event) {
  stage.update();
}
