function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();
	
	shape.graphics.s("purple").ss(10, 1, 1).mt(50, 50).lt(250, 250).lt(50, 250).cp();

	stage.addChild(shape);
	stage.update();
}