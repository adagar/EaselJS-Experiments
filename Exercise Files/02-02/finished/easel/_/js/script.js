function init() {
	var canvas = document.getElementById("easel"),
	SIZE = 100,
	centerX = canvas.width/2,
	centerY = canvas.height/2,
	rotation = 0;
		
	var shape = new createjs.Shape();
	shape.graphics.beginFill(createjs.Graphics.getRGB(162, 216, 255));
	shape.graphics.drawRect(0, 0, SIZE, SIZE);
	shape.x = centerX;
	shape.y = centerY;
	shape.regX = SIZE/2;
	shape.regY = SIZE/2;
	
	var stage = new createjs.Stage(canvas);
	stage.addChild(shape);
	
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		shape.rotation +=8;
		stage.update();
	});
}