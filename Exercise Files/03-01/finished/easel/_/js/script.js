function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();
	
	shape.graphics.f("purple").r(-50, -50, 100, 100);
	
	shape.x = 100;
	shape.y = 100;
		
	stage.addChild(shape);
	
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		shape.rotation += 8;
		shape.skewX += 5;
		
		stage.update();
	});
}