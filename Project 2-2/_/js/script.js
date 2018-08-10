function init() {
	console.log("Javascript loaded...");
	var canvas = document.getElementById("easel"),
	SIZE = 100;
	centerX = canvas.width / 2;
	centerY = canvas.height / 2;

	

	var shape = new createjs.Shape();
	shape.graphics.beginFill("rgb(162, 216, 255)"); 
	shape.graphics.drawRect(0, 0, SIZE, SIZE);
	shape.x = centerX;
	shape.y = centerY;
	//change hte center point
	shape.regX = SIZE / 2;
	shape.regY = SIZE / 2;

	//rotate over time
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", function(){
		shape.rotation += 8;
		stage.update();
	});

	var stage = new createjs.Stage(canvas);
	stage.addChild(shape);
}