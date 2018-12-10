function init() {
	console.log("Javascript loaded...");
}

var Layout = {
	CANVAS_WIDTH: 1280,
	CANVAS_HEIGHT: 720,
	centerX: 640,
	centerY: 200,
	stage: null
  };

  const canvas = document.getElementById("easel");

  createjs.Ticker.on("tick", function() {
	  stage.update();
  })