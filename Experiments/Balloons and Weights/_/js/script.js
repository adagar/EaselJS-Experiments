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
//add floating dirgible and its functions
var dirgible = new createjs.Bitmap("_/images/dirgible.png");
dirgible.regY = 50;
dirgible.x = 40;
dirgible.y = centerY;
dirgible.ballonCount = 0;
dirgible.weightCount = 0;
dirgible.addDirgBalloon = function() {
  this.ballonCount++;
};
dirgible.removeDirgBalloon = function() {
  this.ballonCount--;
};
dirgible.addDirgWeight = function() {
  this.weightCount++;
};
dirgible.removeDirgWeight = function() {
  this.weightCount--;
};
dirgible.netWeight = function() {
  let netWeight = this.ballonCount - this.weightCount;
  //console.log(netWeight);
  return this.ballonCount - this.weightCount;
};

stage.addChild(dirgible);

//add buttons
var addBalloon = new createjs.Bitmap("_/images/plusBalloon.png");
addBalloon.regX = 50;
addBalloon.regY = 65;
addBalloon.x = 100;
addBalloon.y = CANVAS_HEIGHT - 80;
addBalloon.on("click", function(evt){
  dirgible.addDirgBalloon();
});
var minusBalloon = new createjs.Bitmap("_/images/minusBalloon.png");
minusBalloon.regX = 50;
minusBalloon.regY = 65;
minusBalloon.x = 200;
minusBalloon.y = CANVAS_HEIGHT - 80;
minusBalloon.on("click", function(evt){
  dirgible.removeDirgBalloon();
});
var addWeight = new createjs.Bitmap("_/images/plusWeight.png");
addWeight.regX = 50;
addWeight.regY = 65;
addWeight.x = CANVAS_WIDTH - 100;
addWeight.y = CANVAS_HEIGHT - 80;
addWeight.on("click", function(evt){
  dirgible.addDirgWeight();
});
var minusWeight = new createjs.Bitmap("_/images/minusWeight.png");
minusWeight.regX = 50;
minusWeight.regY = 65;
minusWeight.x = CANVAS_WIDTH - 200;
minusWeight.y = CANVAS_HEIGHT - 80;
minusWeight.on("click", function(evt){
  dirgible.removeDirgWeight();
});
stage.addChild(addBalloon, minusBalloon, addWeight, minusWeight);

/*
var balloon = new createjs.Bitmap("_/images/soloBalloon.png");
balloon.regX = 29;
balloon.regY = 40;
balloon.x = CANVAS_WIDTH - 40;
balloon.y = centerY;
balloon.float = false;
stage.addChild(balloon);


balloon.on("click", function(evt) {
});
*/

createjs.Ticker.framerate = 30;
createjs.Ticker.addEventListener("tick", handleTick);

function handleTick(event) {
  dirgible.y = centerY - dirgible.netWeight() * 40;
  stage.update();
}
