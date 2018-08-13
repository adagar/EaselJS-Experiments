function init() {
	console.log("Javascript loaded...");
	var canvas = document.getElementById("easel");
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();

	shape.graphics.beginLinearGradientStroke(["purple", "yellow"], [0,1], 50, 50, 250, 250);
	shape.graphics.setStrokeStyle(10, "round", "round");
	shape.graphics.moveTo(50, 300); //set starint position
	shape.graphics.lineTo(100, 50);
	shape.graphics.lineTo(150, 300);
	shape.graphics.moveTo(60, 250);
	shape.graphics.lineTo(135, 250);

	shape.x = canvas.width / 2;
	shape.y = canvas.height / 2;
	shape.regX = 100;
	shape.regY = 175;
	//shape.graphics.closePath();

	stage.addChild(shape);
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function()
	{
		shape.rotation += 8;
		stage.update();
	});
}