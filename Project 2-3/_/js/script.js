function init() {
	console.log("Javascript loaded...");
	var canvas = document.getElementById("easel");

	var shape = new createjs.Shape();
	shape.graphics.beginLinearGradientFill(["blue", "red"], [0,1], 0, 0, 150, 150);
	shape.graphics.rect(50, 50, 100, 100);

	var stage = new createjs.Stage(canvas);
	stage.addChild(shape);
	stage.update();

}