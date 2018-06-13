function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	centerX = canvas.width/2,
	centerY = canvas.height/2;
	
	var ship = new createjs.Bitmap("images/ship.png");
	ship.x = centerX;
	ship.y = centerY;
	ship.regX = 50;
	ship.regY = 50;
	
	stage.addChild(ship);

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		stage.update();
	});
}