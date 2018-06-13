function init() {
	var canvas = document.getElementById("easel"),
	context = canvas.getContext("2d"),
	SIZE = 100,
	centerX = canvas.width/2,
	centerY = canvas.height/2,
	rotation = 0;
	
	setInterval(function() {
		rotation +=8;
		context.save();
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "rgb(162, 216, 255)";
		context.translate(centerX, centerY);
		context.rotate(rotation * Math.PI / 180);
		context.fillRect(-SIZE/2, -SIZE/2, SIZE, SIZE);
		context.restore();
		
	}, 30)	
}