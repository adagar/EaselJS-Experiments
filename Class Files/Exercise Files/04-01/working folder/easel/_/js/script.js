function init() {
	const canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	centerX = canvas.width / 2,
	centerY = canvas.height / 2,
	ss = new createjs.SpriteSheet({
		animations: {
			fly: [0, 15],
			explode: [15, 20, "fly"]},
		images: ["images/shipsprites.png"],
		frames: {
			regX: 50,
			regY: 50,
			height: 100,
			width: 100
		}
	}),
	ship = new createjs.BitmapAnimation(ss);

	ship.gotoAndPlay("fly");

	stage.addChild(ship);

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		var difX = stage.mouseX - ship.x;
		var difY = stage.mouseY - ship.y;

		ship.x += difX / 20;
		ship.y += difY / 20;

		ship.rotation = Math.atan2(difY, difX) * (180 / Math.PI);

		stage.update();
	})
}