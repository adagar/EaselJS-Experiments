function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();

	const STAGEWIDTH = canvas.width;
	const STAGEHEIGHT = canvas.height;
	const SHAPEWIDTH = 50;
	const SHAPEHEIGHT = 100;

	shape.graphics.f("purple").r(0, 0, SHAPEWIDTH, SHAPEHEIGHT);
	shape.regX = SHAPEWIDTH / 2;
	shape.regY = SHAPEHEIGHT / 2;
	shape.x = 200;
	shape.y = 200;
	shape.scaleY = 0.75;
	shape.scaleX = 1.25;
	shape.skewX = 200;

	stage.addChild(shape);

	createjs.Ticker.setFPS(30);
	var xDir = 5;
	createjs.Ticker.addListener(function()
	{
		//shape.rotation += 8;
		shape.x += xDir;
		if(shape.x > STAGEWIDTH || shape.x < 0)
		{
			xDir *= -1;
		}
		shape.skewX += (4 * xDir);
		stage.update();
	});
}