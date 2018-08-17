function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	centerX = canvas.width / 2,
	centerY = canvas.height / 2;

	const ss = new createjs.SpriteSheet({
		animations: {
			fly: [0, 15],
			explode: [16, 20, "fly"] },
		images: ["images/shipsprites.png"],
		frames: {
			regX: 50,
			regY: 50,
			width: 100,
			height: 100
		}
	});
	const ship = new createjs.BitmapAnimation(ss);

	ship.x = centerX;
	ship.y = centerY;
	ship.gotoAndPlay("explode");

	stage.addChild(ship);
	createjs.Ticker.setFPS(10);
	createjs.Ticker.addListener(function(){
		stage.update();
	});
}