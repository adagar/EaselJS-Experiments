//create play area
var canvas = document.getElementById("PvsP"),
	stage = new createjs.Stage(canvas),
    centerX = canvas.width / 2,
    centerY = canvas.height / 2;

const CANVAS_WIDTH = 720;
const CANVAS_HEIGHT = 360;

const CANVAS_POINTS = {
  x1: centerX - CANVAS_WIDTH / 2,
  x2: centerX + CANVAS_WIDTH / 2,
  y1: centerY - CANVAS_HEIGHT / 2,
  y2: centerY + CANVAS_HEIGHT / 2
}
var text = new createjs.Text("Predator vs Prey", "48px Arial", "black");
var b = text.getBounds();
text.x = centerX - b.width/2;
stage.addChild(text);

var graphics = new createjs.Graphics()
  .beginStroke("black")
  .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
var shape = new createjs.Shape(graphics);
shape.regX = CANVAS_WIDTH / 2;
shape.regY = CANVAS_HEIGHT / 2;
shape.x = centerX;
shape.y = centerY;

stage.addChild(shape);
createjs.Ticker.framerate = 30;
createjs.Ticker.addEventListener("tick", handleTick);

  function Tiger(){
    this.BitMap_constructor("https://cdn4.iconfinder.com/data/icons/vectortown-endangered-species/32/Tiger-512.png");
  }
  var p = createjs.extend(Tiger, createjs.BitMap);
  
  window.Tiger = createjs.promote(Tiger, "Bitmap");

tigerList = [];

function SpawnTiger() {
    var newTiger = new Tiger();
    newTiger.regX = 256;
    newTiger.regY = 256;
    newTiger.scale = 0.1;
    newTiger.x = Math.random() * (CANVAS_POINTS.x2 - CANVAS_POINTS.x1) + CANVAS_POINTS.x1;
    newTiger.y = Math.random() * (CANVAS_POINTS.y2 - CANVAS_POINTS.y1) + CANVAS_POINTS.y1;

    tigerList.push(newTiger);
    stage.addChild(newTiger); 
};

function handleTick(event) {
  /*
  if(tigerList.length > 0)
  {
    for(let tiger in tigerList){
      tigerList[tiger].x += 1;
      tigerList[tiger].y += 1;
    }
  }
  */
  stage.update();
}