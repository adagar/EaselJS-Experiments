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
/*
//Add header text to canvas
var text = new createjs.Text("Predator vs Prey", "48px Arial", "black");
var b = text.getBounds();
text.x = centerX - b.width/2;
stage.addChild(text);
*/

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
/*
  function Tiger(){
    this.BitMap_constructor("https://cdn4.iconfinder.com/data/icons/vectortown-endangered-species/32/Tiger-512.png");
  }
  var p = createjs.extend(Tiger, createjs.BitMap);
  
  window.Tiger = createjs.promote(Tiger, "Bitmap");
*/
animalList = [];
const TIGER_VEL = 10;
const ANTELOPE_VEL = 15;
function SpawnAnimal(animal) {
    //var newTiger = new Tiger();
    let animalVel = 0;
    if(animal == 'tiger'){
      var newAnimal = new createjs.Bitmap("https://cdn4.iconfinder.com/data/icons/vectortown-endangered-species/32/Tiger-512.png");
      animalVel = TIGER_VEL;
      newAnimal.scale = 0.1;
      newAnimal.species = 'tiger'
      newAnimal.regX = 256;
      newAnimal.regY = 256;
    
    }
    else
    {
      var newAnimal = new createjs.Bitmap("https://static.thenounproject.com/png/181886-200.png");
      animalVel = ANTELOPE_VEL;
      newAnimal.scale = 0.2;
      newAnimal.species = 'antelope'
      newAnimal.regX = 50;
      newAnimal.regY = 50;
    }    
    
    newAnimal.x = Math.random() * (CANVAS_POINTS.x2 - CANVAS_POINTS.x1) + CANVAS_POINTS.x1;
    newAnimal.y = Math.random() * (CANVAS_POINTS.y2 - CANVAS_POINTS.y1) + CANVAS_POINTS.y1;
    newAnimal["velX"] = (Math.random() + -0.5) * TIGER_VEL;
    newAnimal["velY"] = (Math.random() + -0.5) * TIGER_VEL; 
    animalList.push(newAnimal);
    stage.addChild(newAnimal); 
};

function UpdateTigers() {
  if(animalList.length > 0)
  {
    tigerList = animalList.filter(thisAnimal => thisAnimal.species == 'tiger')
    antelopeList = animalList.filter(thisAnimal => thisAnimal.species == 'antelope')

    //General animal moving about
    for(let animal in animalList){
      animalList[animal].x += animalList[animal].velX;
      animalList[animal].y += animalList[animal].velY;

      if(animalList[animal].x > CANVAS_POINTS.x2 || animalList[animal].x < CANVAS_POINTS.x1){
        animalList[animal].velX *= -1;
      }
      if(animalList[animal].y > CANVAS_POINTS.y2 || animalList[animal].y < CANVAS_POINTS.y1){
        animalList[animal].velY *= -1;
      }
    }

    //tiger chasing behavior
    const CHASE_DISTANCE = 100;
    const DEATH_DISTANCE = 5;
    for(let tiger in tigerList){
      //look at each antelope
      for(let antelope in antelopeList){
        let distance = CalculateDistance(tigerList[tiger], antelopeList[antelope])
        if(distance < DEATH_DISTANCE){
          RemoveElement(antelopeList[antelope]);
        }else if(distance < CHASE_DISTANCE){
          //chase!
          let angle = Math.atan2(tigerList[tiger].y - antelopeList[antelope].y, tigerList[tiger].x - antelopeList[antelope].x);
          tigerList[tiger].velX = -Math.cos(angle) * TIGER_VEL;
          tigerList[tiger].velY = -Math.sin(angle) * TIGER_VEL;
        }
      }
       
    }
    for(let antelope in antelopeList){
      //look at each tiger
      for(let tiger in tigerList){

      }
        //calculate distance
          //if within range
            //change direction to AWAY fromtiger
            //change speed to 1.5
        //check for interception
          //die
    }
  }
}

function CalculateDistance(animal1, animal2){
  let distance = Math.sqrt(Math.pow(Math.abs(animal1.x - animal2.x), 2) + Math.pow(Math.abs(animal1.y - animal2.y), 2));
  return distance;
}

function handleTick(event) {
  UpdateTigers();
  stage.update();
}

function RemoveElement(animal) {
  let index = animalList.indexOf(animal);
  animalList.splice(index, 1);
  index = antelopeList.indexOf(animal);
  antelopeList.splice(animal);
  stage.removeChild(animal);
}