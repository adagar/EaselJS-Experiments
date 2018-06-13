function init() {
	var canvas = document.getElementById("easel");	
	var shape = new createjs.Shape();
	
	shape.graphics.beginRadialGradientFill(["yellow", "purple"], [0, 1], 100, 100, 0, 100, 100, 100);
	shape.graphics.rect(50, 50, 100, 100);
	
	var stage = new createjs.Stage(canvas);
	stage.addChild(shape);
	stage.update();
}