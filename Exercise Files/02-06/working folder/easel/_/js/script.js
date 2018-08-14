function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();

	//before chaining
	/*
	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(10, "round", "round");
	shape.graphics.moveTo(50, 50);
	shape.graphics.lineTo(250, 250);
	shape.graphics.lineTo(50, 250);
	shape.graphics.closePath();
	*/

	//after chaining
	shape.graphics
		.beginStroke("purple")
		.setStrokeStyle(10, "round", "round")
		.moveTo(50, 50)
		.lineTo(250, 250)
		.lineTo(50, 250)
		.closePath();

	//after using shortcuts
	shape.graphics
		.s("purple")
		.ss(10, 1, 1)
		.mt(250, 250)
		.lt(50, 350)
		.lt(250, 350)
		.cp();

	stage.addChild(shape);
	stage.update();
}