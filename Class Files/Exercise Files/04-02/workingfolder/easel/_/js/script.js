function init(){
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	centerX = canvas.width / 2,
	centerY = canvas.height / 2,
	ss = new createjs.SpriteSheet({
		animations: {
			fly: [0, 15],
			explode: [16, 20, "fly"] },
		images: ["images/shipsprites.png"],
		frames: {
			regX: 50,
			regY: 50, 
			height: 100,
			width: 100
		}		
	}),
	ship = new createjs.BitmapAnimation(ss);
	ship.x = centerX;
	ship.y = centerY;
	ship.gotoAndPlay("fly");
	let gotoX = ship.x;
	let gotoY = ship.y;
	const velocity = 10;

	ship.onPress = e => {
		e.onMouseMove = ev => {
			e.target.x = ev.stageX;
			e.target.y = ev.stageY;
		}
	}
	
	/*
	stage.onClick = evt => {
		gotoX = evt.stageX;
		gotoY = evt.stageY;
		console.log(gotoX, gotoY);
	}
	*/
	stage.enableMouseOver();
	createjs.MouseEvent
	stage.addChild(ship);
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(()=>{
		/*
		let difX = gotoX - ship.x;
		let difY = gotoY - ship.y;
		*/
		ship.x += difX / velocity;
		ship.y += difY / velocity;
		stage.update();
	});
}