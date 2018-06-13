function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas);
	

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		stage.update();
	});
}