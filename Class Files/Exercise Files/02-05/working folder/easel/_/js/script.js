function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();

	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(10, 1, 1);

	//shape.graphics.rect(50, 50, 250, 250);
	//shape.graphics.drawRoundRect(50, 50, 250, 250, 50);
	//shape.graphics.drawCircle(250, 250, 50);
	//shape.graphics.drawEllipse(100, 100, 250, 100);

	//shape.graphics.arc(100, 100, 50, 0, 90*(Math.PI/180), 1);

	shape.graphics.drawPolyStar(200, 200, 100, 3, 0.5, -90);
	//(x, y, radius, numSides, pointyness, angle)

	stage.addChild(shape);
	stage.update();
}