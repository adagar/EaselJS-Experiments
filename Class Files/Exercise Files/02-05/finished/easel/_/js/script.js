function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();

	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(10, 1, 1);
	
	shape.graphics.drawPolyStar(250, 250, 100, 3, 0, -90);
	
	stage.addChild(shape);
	stage.update();
}