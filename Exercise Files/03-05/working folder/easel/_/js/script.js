function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	centerX = canvas.width/2,
	centerY = canvas.height/2;
	
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
	});
}